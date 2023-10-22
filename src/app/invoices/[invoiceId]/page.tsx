import { InvoiceView } from "@/components/InvoiceView"

// This is the page that will be rendered for the route /invoices/[invoiceId] (e.g. /invoices/1) 
export default async function Page({ params }: { params: { invoiceId: string } }) {
  const { invoiceId } = params;
  return (
    <>
      <h1 className="mb-4 mt-0 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Invoice  0x<span className="text-blue-600">{invoiceId}</span></h1>
      <InvoiceView invoiceId={invoiceId} />
    </>
  )
}