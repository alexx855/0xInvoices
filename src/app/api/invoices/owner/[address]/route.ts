import { invoiceABI } from "@/generated"
import { createPublicClient, http, isAddress } from "viem"
import { CONTRACT_ADDRESS, INVOICE_MOCK, SCROLL_SEPOLIA_CHAIN } from "@/constants"
import { Invoice } from "@/invoice"
import { foundry } from "viem/chains"

interface ApiResponse {
  data: Invoice[];
}

// opt out of caching for a specific route segment
export const dynamic = 'force-dynamic'

export async function POST(request: Request, { params }: { params: { address: string } }) {
  console.log("POST /invoices/owner/[address]")

  // check if valid address
  if (!isAddress(params.address)) {
    return new Response('Invalid address', { status: 400 })
  }

  const ownerAddress: `0x${string}` = params.address;
  const invoices: Invoice[] = []

  try {
    // get user invoices from rpc in contract  
    const address = CONTRACT_ADDRESS
    const chain = process.env.NODE_ENV === 'development' ? foundry : SCROLL_SEPOLIA_CHAIN

    const client = createPublicClient({
      chain,
      transport: http()
    })

    const balance = await client.readContract({
      address,
      abi: invoiceABI,
      functionName: 'balanceOf',
      args: [ownerAddress]
    })

    if (balance > 0) {
      // get all tokenIds of the address
      for (let i = 0; i < Number(balance); i++) {
        const tokenId = await client.readContract({
          address,
          abi: invoiceABI,
          functionName: 'tokenOfOwnerByIndex',
          args: [ownerAddress, BigInt(i)]
        })

        invoices.push({
          id: tokenId.toString(),
          ...INVOICE_MOCK
        })
      }
    }

  } catch (error) {
    console.log(error)
  }

  const res: ApiResponse = { data: invoices }

  return Response.json(res)

}