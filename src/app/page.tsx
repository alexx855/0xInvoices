import { InvoiceList } from "@/components/InvoiceList"

export default async function Page() {

  return (
    <>
      <h1 className="mb-4 mt-0 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">0x<span className="text-blue-600">invoice</span></h1>
      {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, vel dicta eius nesciunt, odit excepturi explicabo deserunt minima ab, architecto quisquam? Inventore rerum numquam commodi, vitae praesentium debitis optio voluptatum.</p> */}
      <hr className="my-4" />
      <InvoiceList />
    </>
  )
}
