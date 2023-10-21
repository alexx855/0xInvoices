"use client"
import { useEffect } from "react";

export function ForceDownloadInvoice({ tokenId }: { tokenId: string }) {
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
      a.download = `${tokenId}.png`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      a.remove()
    }
  }, [tokenId])
  return null
}
