"use client"

import { CONTRACT_ADDRESS } from "@/constants"
import { invoiceABI } from "@/generated"
import { useEffect } from "react"
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from "wagmi"

export function DeleteInvoiceButton({ tokenId, onDelete }:
  { tokenId: string, onDelete: (tokenId: string, result: `0x${string}`) => void }
) {

  const { config, isLoading: isPrepareLoading } = usePrepareContractWrite({
    address: CONTRACT_ADDRESS,
    abi: invoiceABI,
    functionName: 'burn',
    args: [BigInt(tokenId)],
  })

  const { write, isLoading, data } = useContractWrite(config)

  const { isSuccess } = useWaitForTransaction({
    chainId: 31337,
    hash: data?.hash,
  })

  useEffect(() => {
    if (isSuccess && data !== undefined) {
      console.log(`Invoice ${tokenId} deleted with hash ${data.hash}!`)
      onDelete(tokenId, data.hash)
    }
  }, [isSuccess, data, onDelete, tokenId])

  return (
    <button
      disabled={isPrepareLoading || isLoading || isSuccess || !write}
      onClick={() => write?.()}
      className="p-2.5 m-0 bg-white rounded hover:bg-gray-100">
      <span>Delete</span>
      <svg className="w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
      </svg>
    </button>
  )
}
