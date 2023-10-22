"use client"
import { AuthSigContext } from "@/context";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { keccak256, toHex } from "viem";

export function ForceDownloadInvoice({ tokenId }: { tokenId: string }) {
  const authSig = useContext(AuthSigContext);
  useEffect(() => {
    downloadInvoice()
    async function downloadInvoice() {
      const headers = new Headers()
      headers.append('Content-Disposition', 'attachment')

      const response = await fetch(`/api/invoices/${tokenId}/download?force`, { headers })
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)

      const a = document.createElement('a')
      a.style.display = 'none'
      a.href = url
      a.download = `0xinvoice-${tokenId}.pdf`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      a.remove()
    }
  }, [tokenId])


  return <p><Link className=" text-blue-600 hover:text-blue-700 hover:underline" href={`/api/invoices/${tokenId}/download?authSig=${toHex(JSON.stringify(authSig))}`}>Click here</Link> if the download does not start automatically.</p>

}
