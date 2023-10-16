
import { InvoiceStatusLabel } from '@/components/InvoiceStatusLabel'
// import { Loading } from '@/components/Loading';
import { type Invoice } from '@/invoice';
import { formatAmount } from '@/utils';
import Link from 'next/link';

import { getInvoicesList } from "@/invoice"

export async function InvoiceList() {
  // export function InvoiceList({ invoices }: { invoices: Invoice[] }) {
  // const [loading, setLoading] = useState(false);

  const invoices = await getInvoicesList()
  // // TODO:
  // const handleDeleteInvoice = useCallback(async (invoiceId: string) => {
  //   try {
  //     setLoading(true)
  //   } catch (error) {
  //     console.log(error)
  //   } finally {
  //     setLoading(false)
  //   }
  // }, [])

  const handleDeleteInvoice = async (invoiceId: string) => {
    try {
    } catch (error) {
      console.log(error)
    } finally {
    }
  }

  return (
    <>
      <h3>Your Invoices:</h3>
      {invoices.length ? (
        <div className="overflow-x-auto relative">
          <div className="mb-6 relative bg-white shadow-md sm:rounded-lg overflow-hidden">
            {/* {loading && (
              <div className='flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 absolute inset-0 z-10 overflow-hidden'>
                <Loading />
              </div>
            )} */}
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
                {invoices.map((data, inv) =>
                (
                  <tr key={data.id} className="border-b">
                    <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">
                      <Link href={`/invoices/${data.id}`} className=" text-blue-600 hover:text-blue-700">
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
                        {/* TODO: download */}
                        {/* <Link href={`/`} className="p-2.5 m-0 bg-white rounded hover:bg-gray-100">
                                <svg className="w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                                </svg>
                              </Link> */}

                        {/* Edit */}
                        <Link href={`/invoices/${data.id}/edit`} className="p-2.5 m-0 bg-white rounded hover:bg-gray-100">
                          <svg className="w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                            <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                          </svg>
                        </Link>

                        {/* Delete */}
                        <Link href={`/invoices/${data.id}/delete`} className="p-2.5 m-0 bg-white rounded hover:bg-gray-100">
                          <svg className="w-5 h-5  text-gray-500 transition duration-75  group-hover:text-gray-900" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                          </svg>
                        </Link>

                      </div>

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : <div>No invoices found</div>}
    </>
  )
}
