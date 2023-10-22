import { createPublicClient, fromHex, http } from "viem"
import { foundry } from "viem/chains"
import { CONTRACT_ADDRESS, SCROLL_SEPOLIA_CHAIN } from "./constants"
import { ApiOwnerResponse } from "./app/api/invoices/owner/[address]/route"
import litInstance from "./lit"
import { ApiInvoiceResponse } from "./app/api/invoices/[invoiceId]/route"
import { invoiceABI } from "./generated"

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

export interface InvoiceEncryptedData {
  tokenId: string;
  ciphertext: `0x${string}`;
  dataHash: `0x${string}`;
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
    cache: 'no-store',
    method: 'POST',
  })
    .then(res => res.json())
    .then(res => (res as ApiOwnerResponse).data)
    .catch(err => {
      console.log(err)
    })
}
export const getInvoice = async (tokenId: string, authSig: `0x${string}`) => {
  return fetch(`${process.env.NEXT_PUBLIC_URL}/api/invoices/${tokenId}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': authSig
    },
    cache: 'no-store',
    body: authSig,
    method: 'POST'
  })
    .then(res => res.json())
    .then(res => (res as ApiInvoiceResponse).data)
    .catch(err => {
      console.log(err)
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
