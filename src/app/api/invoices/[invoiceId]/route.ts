import { Invoice } from "@/invoice";
import { INVOICE_MOCK } from "@/constants";

export async function POST(request: Request) {
  const urlParts = request.url.split('/')
  const invoiceId = urlParts[urlParts.length - 1]
  console.log(`POST /invoices/${invoiceId}]`)
  const data = { ...INVOICE_MOCK, id: invoiceId } satisfies Invoice
  return Response.json({ data })
}