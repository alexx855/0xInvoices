'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useAccount, useWaitForTransaction } from 'wagmi'
import { usePrepareInvoiceNewInvoice, useInvoiceNewInvoice } from '@/generated'

export function CreateInvoiceButton() {
  const { address } = useAccount()

  const [tokenId, setTokenId] = useState('')
  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareInvoiceNewInvoice({
    args: address ? [`${address}`] : undefined,
  })
  const { data, error, isError, write } = useInvoiceNewInvoice(config)

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  })

  return (
    <div>
      <button disabled={!write} onClick={() => write?.()}>
        {isLoading ? 'Minting...' : 'Mint'}
      </button>
      {isSuccess && (
        <div>
          Successfully minted your Invoice NFT!
          {tokenId.length && (
            <div>
              <Link href={`/invoices/${tokenId}`}>View your Invoice NFT</Link>
            </div>
          )}
        </div>
      )}
      {isError && (
        <div>Error</div>
      )}
    </div>
  )
}
