'use client'
import { CONTRACT_ADDRESS, INVOICE_MOCK, ITEM_MOCK } from '@/constants';
import { invoiceABI } from '@/generated';
import { type InvoiceData, type InvoiceDataItems, type InvoiceStatus } from '@/invoice';
import litInstance from '@/lit';
import { formatAmount } from '@/utils';
import { useCallback, useEffect, useRef, useState } from 'react';
import { SiweMessage } from 'siwe';
import { useAccount, useContractWrite, useNetwork, useSignMessage, useWaitForTransaction } from 'wagmi';
import { stringToHex } from 'viem'

const IS_DEV = process.env.NODE_ENV === 'development'

export function InvoiceForm({
  invoice = INVOICE_MOCK,
}: {
    invoice?: InvoiceData,
}) {
  const { chain } = useNetwork()
  const { address } = useAccount()
  const { signMessageAsync } = useSignMessage()

  // const { write, isLoading, data } = useContractWrite(config)
  const { write, isLoading, data } = useContractWrite({
    chainId: chain?.id,
    address: CONTRACT_ADDRESS,
    abi: invoiceABI,
    functionName: 'createInvoice',
  })

  const { isSuccess } = useWaitForTransaction({
    chainId: chain?.id,
    hash: data?.hash,
  })

  const formRef = useRef<HTMLFormElement>(null);
  const [items, setItems] = useState<InvoiceDataItems[]>(
    invoice?.items || [ITEM_MOCK]
  )

  const getItemsTotal = useCallback(() => {
    return items.reduce((acc, item) => acc + item.quantity * item.rate, 0)
  }, [items])

  // ??: use reducer instead for all state changes
  const handleAddItem = useCallback(() => {
    setItems((prev) => [...prev, ITEM_MOCK])
  }, [])

  const handleDeleteItem = useCallback((index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index))
  }, [])

  const handleItemQuantityChange = useCallback((index: number, value: string) => {
    setItems((prev) => prev.map((item, i) => i === index ? { ...item, quantity: Number(value), amount: Number(value) * item.rate } : item))
  }, [])

  const handleItemRateChange = useCallback((index: number, value: string) => {
    setItems((prev) => prev.map((item, i) => i === index ? { ...item, rate: Number(value), amount: Number(value) * item.rate } : item))
  }, [])

  const handleItemDetailsChange = useCallback((index: number, value: string) => {
    setItems((prev) => prev.map((item, i) => i === index ? { ...item, details: value } : item))
  }, [])


  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formRef.current) return;

    // Get form data
    const formData = new FormData(formRef.current);
    const formValues: Record<string, string> = {};
    formData.forEach((value, key) => {
      formValues[key] = value.toString();
    });

    const total_unit = invoice.total_unit
    const total = getItemsTotal()

    const invoiceData: InvoiceData = {
      invoice_number: formValues['invoice_number'],
      status: formValues['status'] ? formValues['status'].toLowerCase() as InvoiceStatus : 'sent',
      total: total,
      total_unit: total_unit,
      client_display_name: formValues['client_display_name'],
      creation_date: formValues['creation_date'],
      items: items,
      due_date: formValues['due_date'] || '',
      customer_notes: formValues['customer_notes'] || ''
    }

    // Create SIWE message with pre-fetched nonce and sign with wallet
    const message = new SiweMessage({
      domain: window.location.host,
      address,
      statement: 'Sign in with Ethereum to the app.',
      uri: window.location.origin,
      version: '1',
      chainId: chain?.id,
      // nonce: state.nonce,
    })
    const messageToSign = message.prepareMessage();

    const signature = await signMessageAsync({
      message: messageToSign,
    })

    const authSig = {
      sig: signature,
      derivedVia: 'web3.eth.personal.sign',
      signedMessage: messageToSign,
      address: address,
    };

    // Encrypt all invoice data using symmetric encryption
    const { ciphertext, dataToEncryptHash } = await litInstance.encrypt(JSON.stringify(invoiceData), authSig)

    write?.({ args: [stringToHex(ciphertext), stringToHex(dataToEncryptHash)] })
  }

  useEffect(() => {
    if (isSuccess && data !== undefined) {
      // TODO: display success message toast
      console.log('Invoice created: ', data.hash)
    }
  }, [isSuccess, data])

  return (
    <form ref={formRef} onSubmit={handleFormSubmit}>
      <div className='flex w-full sm:space-x-4 sm:flex-row flex-col justify-between'>

        <div className="mb-6">
          <label htmlFor="client_display_name" className="block mb-2 text-sm font-medium text-gray-900 ">Client name <span className='text-red-900'>*</span></label>
          <input type="client_display_name" id="client_display_name" name="client_display_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John Doe" required defaultValue={IS_DEV ? invoice.client_display_name : undefined} />
        </div>
        <div className="mb-6">
          <label htmlFor="invoice_number" className="block mb-2 text-sm font-medium text-gray-900 ">Invoice Number <span className='text-red-900'>*</span></label>
          <input type="text" id="invoice_number" name="invoice_number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required defaultValue={IS_DEV ? invoice.invoice_number : undefined} />
        </div>

        <div className="mb-6 relative">
          <label htmlFor="creation_date" className="block mb-2 text-sm font-medium text-gray-900 ">Invoice date <span className='text-red-900'>*</span></label>
          <input type="date" id="creation_date" name="creation_date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="mm/dd/yyyy" required defaultValue={IS_DEV ? invoice.creation_date : new Date().toISOString().split('T')[0]} />
        </div>

        <div className="mb-6 relative">
          <label htmlFor="due_date" className="block mb-2 text-sm font-medium text-gray-900 ">Due date </label>
          <input type="date" id="due_date" name="due_date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="mm/dd/yyyy" defaultValue={IS_DEV ? invoice.due_date : undefined} />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900 ">Status</label>
        <select id="status" defaultValue={IS_DEV ? invoice.status : 'draft'} name="status" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
          {['draft', 'sent', 'paid'].map((status, index) => (
            <option key={index} value={status} >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6 relative bg-white shadow-md sm:rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          {/* Items table */}
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-4 py-3 w-[300px]">ITEM DETAILS</th>
                <th scope="col" className="px-4 py-3 w-[100px] text-right">QUANTITY</th>
                <th scope="col" className="px-4 py-3 w-[100px] text-right">RATE</th>
                <th scope="col" className="px-4 py-3 w-[100px] text-right">AMOUNT</th>
                <th scope="col" className="px-4 py-3 w-[40px] text-right">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody>

              {items.map((item, index) => (
                <tr key={index} className="border-b">
                  <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">
                    <textarea
                      rows={2}
                      className="m-0 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Software Development"
                      onChange={(e) => handleItemDetailsChange(index, e.target.value)}
                      required
                      defaultValue={IS_DEV ? item.details : undefined}
                    ></textarea>
                  </th>
                  <td className="px-4 py-3 text-right">
                    <input
                      type="number"
                      onChange={(e) => handleItemQuantityChange(index, e.target.value)}
                      className="m-0 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      step='1'
                      placeholder='0.00'
                      required defaultValue={IS_DEV ? item.quantity : undefined}
                    />
                  </td>
                  <td className="px-4 py-3 text-right">
                    <input
                      type="number"
                      onChange={(e) => handleItemRateChange(index, e.target.value)}
                      className="m-0 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      step='1'
                      placeholder='0.00'
                      required defaultValue={IS_DEV ? item.rate : undefined}
                    />
                  </td>
                  <td className="px-4 py-3 text-right">
                    <span className='inline-block p-2.5 font-bold'>
                      {formatAmount(item.quantity * item.rate, invoice.total_unit)}
                    </span>
                  </td>
                  <td className="px-4 py-3 flex items-center justify-end">
                    {index > 0 && (
                      <button
                        onClick={() => handleDeleteItem(index)}
                        id={`rm-item-${index}`}
                        type="button"
                        className='p-2.5 m-0 bg-transparent'
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>

        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
          <button onClick={handleAddItem} type="button" className="flex items-center justify-center  bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 ">
            <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
            </svg>
            Add Item
          </button>
        </div>

      </div>

      {/* Totals table  */}
      <div className='flex justify-end'>
        <table className="w-[50%] text-sm text-left text-gray-500 mt-4">
          <tbody>
            <tr className="border-b">
              <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">
                Total
              </th>
              <td className="px-4 py-3 text-right">
                {formatAmount(getItemsTotal(), invoice.total_unit)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mb-6">
        <label htmlFor="Customer Notes" className="block mb-2 text-sm font-medium text-gray-900 ">Customer Notes</label>
        <textarea id="customer_notes" name="customer_notes" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder={invoice.customer_notes} defaultValue={IS_DEV ? invoice.customer_notes : undefined}></textarea>
      </div>

      <div className="flex items-start mb-6">
        <button disabled={isLoading || isSuccess || !(write !== undefined)} type="submit" name="save_and_share" value="save_and_share" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
          {isLoading || isSuccess ? 'Creating...' : 'Create'}
        </button>
      </div>
    </form>
  )
}
