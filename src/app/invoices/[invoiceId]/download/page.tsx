
import { ForceDownloadInvoice } from "@/components/ForceDownloadInvoice"
import Link from "next/link"

// This is the page that will be rendered for the route /invoices/[invoiceId]/download (e.g. /invoices/1/download) 
export default async function Page({ params }: { params: { invoiceId: string } }) {
  return (
    <section className="text-center">
      <p>Your download will start shortly...</p>
      <ForceDownloadInvoice tokenId={params.invoiceId} />
      <p><Link className=" text-blue-600 hover:text-blue-700 hover:underline" href={`/api/invoices/${params.invoiceId}/download`}>Click here to open the invoice instead</Link></p>
    </section>
  )
}
