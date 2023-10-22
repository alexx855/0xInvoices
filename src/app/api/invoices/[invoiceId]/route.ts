import { invoiceABI } from "@/generated"
import { fromHex } from "viem"
import { CONTRACT_ADDRESS, INVOICE_MOCK } from "@/constants"
import { Invoice, createClient } from "@/invoice"
import litInstance from "@/lit"

export interface ApiInvoiceResponse {
  data: Invoice
}

// opt out of caching for a specific route segment
export const dynamic = 'force-dynamic'

export async function POST(request: Request, { params }: { params: { invoiceId: string } }) {
  console.log("POST /invoices/[invoiceId]")
  try {
    // get user invoices from rpc in contract  
    const address = CONTRACT_ADDRESS
    const client = createClient()

    const [ciphertext, dataHash] = await client.readContract({
      address,
      abi: invoiceABI,
      functionName: 'getInvoiceData',
      args: [BigInt(params.invoiceId)]
    })

    console.log(ciphertext, dataHash)

    // get authSig from request header authorization
    const authSig = request.headers.get('authorization')
    console.log(authSig)

    if (!authSig) {
      return new Response('Unauthorized', { status: 401 })
    }

    // decrypt data using authSig
    const recovered = JSON.parse(fromHex(authSig as `0x${string}`, "string"))
    console.log(recovered)

    // decrypt data using authSig
    const decryptedData = await litInstance.decrypt(fromHex(ciphertext, 'string'), fromHex(dataHash, 'string'), recovered)
    console.log(decryptedData)

    const data: Invoice = {
      id: params.invoiceId,
      ...JSON.parse(decryptedData)
    }

    const res: ApiInvoiceResponse = { data }
    return Response.json(res)

  } catch (error) {
    console.log(error)
    // return new Response('Internal Server Error', { status: 500 })
    const data: Invoice = {
      id: params.invoiceId,
      ...INVOICE_MOCK
    }

    const res: ApiInvoiceResponse = { data }
    return Response.json(res)
  }

}