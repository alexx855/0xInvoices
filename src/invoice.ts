import { createPublicClient, http } from "viem"
import { foundry } from "viem/chains"
import { SCROLL_SEPOLIA_CHAIN } from "./constants"
import { ApiOwnerResponse } from "./app/api/invoices/owner/[address]/route"

export type InvoiceStatus = "draft" | "sent" | "paid" | "void"

export interface InvoiceDataItems {
  details: string
  quantity: number
  rate: number
  amount: number
}

export interface InvoiceStorage {
  id?: string;
  ciphertext: string;
  dataToEncryptHash: string;
}

export interface InvoiceData {
  invoice_number: string;
  status: InvoiceStatus;
  client_display_name: string;
  creation_date: string;
  total: number;
  total_unit: string;
  items: InvoiceDataItems[]
  due_date?: string;
  customer_notes?: string;
}
export interface Invoice extends InvoiceData {
  id: string;
}

export const getInvoicesList = (address: string) => {
  return fetch(`${process.env.NEXT_PUBLIC_URL}/api/invoices/owner/${address}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  })
    .then(res => res.json())
    .then(res => (res as ApiOwnerResponse).data)
    .catch(err => {
      console.log(err)
      return []
    })
}

export const createClient = () => {
  const chain = process.env.NODE_ENV === 'development' ? foundry : SCROLL_SEPOLIA_CHAIN

  const client = createPublicClient({
    chain,
    transport: http()
  })

  return client
}
