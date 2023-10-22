import { InvoiceForm } from "@/components/InvoiceForm"

export default function Page() {
  return (
    <>
      <h1 className="mb-4 mt-0 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Create   0x<span className="text-blue-600">invoice</span></h1>
      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, architecto omnis quo sint perferendis asperiores nisi nobis aspernatur. Inventore, reprehenderit deserunt illo laudantium in vitae quae corporis possimus temporibus expedita?</p> */}
      <hr className="my-4" />
      <InvoiceForm />
    </>
  )
}