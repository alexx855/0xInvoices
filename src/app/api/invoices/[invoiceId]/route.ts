import { Invoice } from "@/invoice";
import { CONTRACT_ADDRESS, INVOICE_MOCK, SCROLL_SEPOLIA_CHAIN } from "@/constants";
import { invoiceABI } from "@/generated";
import { createPublicClient, http } from "viem";
import { foundry } from "viem/chains";

// opt out of caching for a specific route segment
export const dynamic = 'force-dynamic'

export async function POST(request: Request, { params }: { params: { invoiceId: string } }) {
  console.log("POST /invoices/[invoiceId]");
  const invoiceId = BigInt(params.invoiceId);

  // check if valid invoiceId
  if (!invoiceId || invoiceId < 0) {
    return new Response('Invalid invoiceId', { status: 400 })
  }

  try {
    // get user invoices from rpc in contract  
    const address = CONTRACT_ADDRESS
    const chain = process.env.NODE_ENV === 'development' ? foundry : SCROLL_SEPOLIA_CHAIN

    const client = createPublicClient({
      chain,
      transport: http()
    })

    const tokenURI = await client.readContract({
      address,
      abi: invoiceABI,
      functionName: 'tokenURI',
      args: [invoiceId]
    })

    const invoice: Invoice = {
      id: tokenURI,
      ...INVOICE_MOCK
    }

    return new Response(JSON.stringify({ data: invoice }), {
      headers: {
        "content-type": "application/json;charset=UTF-8"
      }
    });

  } catch (error) {
    console.log(error)
    return new Response('Invoice not found', { status: 404 })
  }
}
