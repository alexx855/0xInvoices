import { Account } from "@/components/Account"
import { Connected } from "@/components/Connected"
import { InvoiceForm } from "@/components/InvoiceForm"
import { NetworkSwitcher } from "@/components/NetworkSwitcher"

export default function Page() {
  return (
    <>
      <h1 className="mb-4 mt-0 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Create a free  <span className="text-blue-600">open invoice</span>.</h1>
      {/*
       <p className="mb-4">
        TODO: add more info here, some ideas:
      </p>
      <ul>
        <li>Get paid in crypto directly with the same invoice</li>
        <li>Free, no fees</li>
        <li>All data is encrypted</li>
      </ul> 
      */}

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, architecto omnis quo sint perferendis asperiores nisi nobis aspernatur. Inventore, reprehenderit deserunt illo laudantium in vitae quae corporis possimus temporibus expedita?</p>
      <hr className="my-4" />

      <Connected showSignIn>
        <Account />
        <NetworkSwitcher />
        <InvoiceForm />
      </Connected>
    </>
  )
}