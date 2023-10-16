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

export const getInvoice = (invoiceId: string) => {
  return fetch(`http://localhost:3000/api/invoices/${invoiceId}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  })
    .then(res => res.json())
    .then(res => res.data as Invoice)
}


export const getInvoicesList = () => {
  return fetch(`http://localhost:3000/api/invoices`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  })
    .then(res => res.json())
    .then(res => res.data as Invoice[])
}

