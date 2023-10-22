import { InvoiceView } from "@/components/InvoiceView"
import { Layout } from "@/components/Layout";

// This is the page that will be rendered for the route /invoices/[invoiceId] (e.g. /invoices/1) 
export default async function Page({ params }: { params: { invoiceId: string } }) {
  const { invoiceId } = params;
  return (
    <Layout>
      <InvoiceView invoiceId={invoiceId} />
    </Layout>
  )
}