'use client'
import { type Invoice } from '@/invoice'
import { InvoiceStatusLabel } from './InvoiceStatusLabel'
import { formatAmount } from '@/utils'
import { CONTRACT_ADDRESS, INVOICE_MOCK } from '@/constants'
import { useContext, useEffect, useState } from 'react'
import { useContractRead, useNetwork, useWalletClient } from 'wagmi'
import { invoiceABI } from '@/generated'
import litInstance from '@/lit';
import { fromHex, toHex } from 'viem'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { AuthSigContext } from '@/context'
import { InvoiceTable } from './InvoiceTable'
import Link from 'next/link'

export function InvoiceView({ invoiceId }: { invoiceId: string }) {
  const authSig = useContext(AuthSigContext);
  const { chain } = useNetwork()
  const router = useRouter();

  const { data: walletClient } = useWalletClient()
  const [invoice, setInvoice] = useState<Invoice>({
    id: invoiceId,
    ...INVOICE_MOCK
  })

  const [locked, setLocked] = useState<boolean>(true)

  const { data, isSuccess, isError, error, isLoading } = useContractRead({
    chainId: chain?.id,
    address: CONTRACT_ADDRESS,
    abi: invoiceABI,
    functionName: 'getInvoiceData',
    // account: walletClient?.account,
    args: [BigInt(invoiceId)],
    enabled: walletClient?.account != null && chain?.id != null,
  })

  useEffect(() => {
    if (isSuccess && data) {
      const ciphertext = data[0]
      const dataHash = data[1]

      async function unlockData(ciphertext: `0x${string}`, dataHash: `0x${string}`) {
        // Create SIWE message with pre-fetched nonce and sign with wallet

        try {
          const decryptedData = await litInstance.decrypt(fromHex(ciphertext, 'string'), fromHex(dataHash, 'string'), authSig)
          setInvoice({
            ...JSON.parse(decryptedData)
          })

          setLocked(false)

        } catch (error: any) {
          // User denied message signature error.details
          if (error?.details?.includes('User denied message signature')) {
            const action = {
              label: 'Back',
              onClick: () => router.push('/')
            }
            toast.error('You need to sign the message to view the invoice', { action, duration: 10000 })
          }
        }
      }

      unlockData(ciphertext, dataHash)
    }
  }, [authSig, data, isSuccess, router])

  useEffect(() => {
    if (isError) {
      const action = {
        label: 'Back',
        onClick: () => router.push('/')
      }

      if (error?.message?.includes('ERC721NonexistentToken')) {
        toast.error('Invoice does not exist', { action, duration: 10000 })
      } else if (error?.message?.includes('ERC721NonexistentToken')) {
        toast.error('Invoice does not exist', { action, duration: 10000 })
      } else {
        toast.error('Error fetching invoice data', { action, duration: 10000 })
      }
      console.log(error?.message)
    }
  }, [isError, error, router])

  return (
    <>
      <div className="flex justify-between content-center">
        <h1 className="mb-4 mt-0 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Invoice  0x<span className="text-blue-600">{invoiceId}</span></h1>
        <Link href={`/api/invoices/${invoiceId}/download?authSig=${toHex(JSON.stringify(authSig))}`} className="text-blue-600 hover:text-blue-700 hover:underline">
          Download PDF
        </Link>
      </div>
      <div className={locked ? "blur-sm animate-pulse animation-delay-1000" : "" + "relative p-4 border-2 border-gray-200 border-dashed rounded-lg"}>
        <InvoiceTable invoice={invoice} />
      </div>
    </>
  )
}

