import { InvoiceView } from "@/components/InvoiceView"
import { getInvoice } from "@/invoice"

// This is the page that will be rendered for the route /invoices/[invoiceId] (e.g. /invoices/1) 
export default async function Page({ params }: { params: { invoiceId: string } }) {

  const { invoiceId } = params 
  const invoice = await getInvoice(invoiceId)

  if (!invoice) {
    return <div>Invoice not found</div>
  }

  return (<InvoiceView invoice={invoice} />)
}