import { invoiceABI } from "@/generated"
import { isAddress } from "viem"
import { CONTRACT_ADDRESS } from "@/constants"
import { InvoiceEncryptedData, createClient } from "@/invoice"

export interface ApiOwnerResponse {
  data: InvoiceEncryptedData[];
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
  const data: InvoiceEncryptedData[] = []

  try {
    // get user invoices from rpc in contract  
    const address = CONTRACT_ADDRESS
    const client = createClient()

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

        const [ciphertext, dataHash] = await client.readContract({
          address,
          abi: invoiceABI,
          functionName: 'getInvoiceData',
          args: [tokenId]
        })

        data.push({
          tokenId: tokenId.toString(),
          ciphertext,
          dataHash
        })
      }
    }

  } catch (error) {
    console.log(error)
  }

  const res: ApiOwnerResponse = { data }
  return Response.json(res)
}