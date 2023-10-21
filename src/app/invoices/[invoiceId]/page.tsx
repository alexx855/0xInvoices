import { InvoiceView } from "@/components/InvoiceView"

// This is the page that will be rendered for the route /invoices/[invoiceId] (e.g. /invoices/1) 
export default async function Page({ params }: { params: { invoiceId: string } }) {

  const { invoiceId } = params 

  if (!invoiceId) {
    return <div>Invoice not found</div>
  }

  return (<InvoiceView invoiceId={invoiceId} />)
}