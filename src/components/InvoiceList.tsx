
"use client"
import { Loading } from '@/components/Loading';
import { InvoiceStatusLabel } from '@/components/InvoiceStatusLabel'
import { type Invoice } from '@/invoice';
import { formatAmount } from '@/utils';
import Link from 'next/link';
import { getInvoicesList } from "@/invoice"
import { useAccount } from 'wagmi';
import { useContext, useEffect, useState } from 'react';
import { DownloadInvoiceButton } from './DownloadInvoiceButton';
import { DeleteInvoiceButton } from './DeleteInvoiceButton';
import { toast } from 'sonner'
import { SCROLL_SEPOLIA_CHAIN } from '@/constants';
import litInstance from '@/lit';
import { fromHex, isAddress, toHex } from 'viem';
import { AuthSigContext } from '@/context';

export function InvoiceList() {
  const authSig = useContext(AuthSigContext);
  const { address, isConnected } = useAccount()
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [isloading, setisLoading] = useState(true)

  useEffect(() => {
    //  && authSig
    if (isAddress(address!)) {
      getAndDecryptData();
    }

    async function getAndDecryptData() {
      try {
        const data = await getInvoicesList(address!)
        const invoices: Invoice[] = []

        if (!data.length || !authSig) {
          setInvoices([])
          setisLoading(false)
          return
        }

        // Decrypt data
        for (let i = 0; i < data.length; i++) {
          const decryptedData = await litInstance.decrypt(fromHex(data[i].ciphertext, 'string'), fromHex(data[i].dataHash, 'string'), authSig)
          invoices.push({
            id: data[i].tokenId,
            ...JSON.parse(decryptedData)
          })
        }

        setInvoices(invoices)
        setisLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
  }, [address, authSig])

  const handleDeleteInvoice = async (invoiceId: string, result: `0x${string}`) => {
    setInvoices(invoices.filter((invoice) => invoice.id !== invoiceId))
    toast.success(`Invoice ${invoiceId} deleted`, {
      action: {
        label: 'View explorer',
        onClick: () => {
          // open explorer tx with result
          window.open(SCROLL_SEPOLIA_CHAIN.blockExplorers.default.url + '/tx/' + result, '_blank')
        }
      },
      duration: 10000
    })
  }

  return (
    <>
      <h2 className='mb-5 text-2xl sr-only'>Invoices: <small>{address}</small></h2>
      <div className="overflow-x-auto relative">
        <div className="mb-6 relative bg-white shadow-md sm:rounded-lg overflow-hidden">
          <table className="w-full m-0 text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-4 py-3">Invoice Number</th>
                <th scope="col" className="px-4 py-3 text-right">Status</th>
                <th scope="col" className="px-4 py-3 text-right">Client</th>
                <th scope="col" className="px-4 py-3 text-right">Date</th>
                <th scope="col" className="px-4 py-3 text-right">Total</th>
                <th scope="col" className="px-4 py-3 text-right w-[180px]">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {invoices.length ? (
                invoices.map((data, inv) =>
                (
                  <tr key={data.id} className="border-b">
                    <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">
                      <Link href={`/invoices/${data.id}`} className=" text-blue-600 hover:text-blue-700 hover:underline">
                        #{data.invoice_number}
                      </Link>
                    </th>
                    <td className="px-4 py-3 text-right">
                      <InvoiceStatusLabel status={data.status} />
                    </td>
                    <td className="px-4 py-3 text-right">
                      <span className=''>
                        {data.client_display_name}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <span className=''>
                        {new Date(data.creation_date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <span className=''>
                        {data.total && formatAmount(data.total, data.total_unit || 'USD')}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex flex-row items-stretch gap-2 justify-end">
                        <DownloadInvoiceButton tokenId={data.id} />
                        <DeleteInvoiceButton tokenId={data.id} onDelete={handleDeleteInvoice} />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="border-b">
                    <td colSpan={6} className="px-4 py-3">
                      {isloading ? <Loading /> : (<p className='mt-2'>No invoices found found for this address, you can create one from <Link href="/create" className="text-blue-600 hover:text-blue-700 hover:underline">here</Link></p>)}
                      {!isConnected && <p className='mt-2'>Please connect your wallet to view your invoices</p>}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
