'use client'

import { useInvoiceBalanceOf } from '@/generated'
import { useAccount } from 'wagmi'

export function Account() {
  const { address } = useAccount()
  if (!address) {
    throw new Error('No address')
  }

  const { data } = useInvoiceBalanceOf({
    args: [
      address!
    ],
  })

  return (
    <div>
      {address}
      <hr />
      Account 0xInvoices: <span>{data?.toString() || '0'}</span>
    </div>
  )
}
