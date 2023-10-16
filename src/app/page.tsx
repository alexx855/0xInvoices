import { Account } from "@/components/Account"
import { Connected } from "@/components/Connected"
import { InvoiceList } from "@/components/InvoiceList"
import { NetworkSwitcher } from "@/components/NetworkSwitcher"
import Link from "next/link"

export default async function Page() {

  return (
    <>
      <h1 className="mb-4 mt-0 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">0x <span className="text-blue-600">invoices</span>.</h1>
      <hr className="my-4" />
      <Connected showSignIn>
        <Account />
        <NetworkSwitcher />
        <hr />
        <Link href="/create" className="inline-flex w-full my-5 items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 ">
          <span className="w-full">Create a new invoice</span>
          <svg aria-hidden="true" className="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </Link>
        <InvoiceList />
      </Connected>
    </>
  )
}
