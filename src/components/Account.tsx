'use client'


import { useAccount, useBalance } from 'wagmi'

export function Account() {
  const { address } = useAccount()

  const { data, isError, isLoading } = useBalance({
    address,
  })

  if (!address) {
    throw new Error('No address')
  }

  return (
    <div>
      {address}
      <hr />
      Balance: <span>{data?.formatted} {data?.symbol}</span>
    </div>
  )
}
