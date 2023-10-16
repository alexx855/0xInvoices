import { Connected } from "@/components/Connected"
import { InvoiceForm } from "@/components/InvoiceForm"
import { getInvoice } from "@/invoice"
// import { cookies, headers } from "next/headers";

export default async function Page({ params }: { params: { invoiceId: string } }) {
  // const cookiesList = cookies()
  // const hasCookie = cookiesList.has('theme')
  const { invoiceId } = params

  const invoice = await getInvoice(invoiceId)

  return (
    <>
      <h1 className="mb-4 mt-0 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Edit inovice #<span className="text-blue-600">{invoice.id}</span></h1>
      <hr className="my-4" />
      <Connected showSignIn>
        <InvoiceForm invoice={invoice} editMode />
      </Connected>
    </>
  )
}

