
import { ForceDownloadInvoice } from "@/components/ForceDownloadInvoice"
import { Layout } from "@/components/Layout";

// This is the page that will be rendered for the route /invoices/[invoiceId]/download (e.g. /invoices/1/download) 
export default async function Page({ params }: { params: { invoiceId: string } }) {
  return (
    <Layout>
      <section className="text-center">
        <p>Your download will start shortly...</p>
        <ForceDownloadInvoice tokenId={params.invoiceId} />
      </section>
    </Layout>
  )
}
