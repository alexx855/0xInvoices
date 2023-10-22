import { type Chain } from 'wagmi'
import { InvoiceData, InvoiceDataItems } from './invoice'
import { foundry } from 'viem/chains'

export const FOUNDRY_CONTRACT_ADDRESS = '0xbeC6419cD931e29ef41157fe24C6928a0C952f0b'
export const SCROLL_CONTRACT_ADDRESS = '0x0dD41926367E50C5f8B62A9FEb96a7f34Df4E884'
export const CONTRACT_ADDRESS = process.env.NODE_ENV === 'development' ? FOUNDRY_CONTRACT_ADDRESS : SCROLL_CONTRACT_ADDRESS

export const SCROLL_SEPOLIA_CHAIN = {
  id: 534351,
  name: "Scroll Sepolia",
  network: "scrollSepolia",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    public: { http: ['https://sepolia-rpc.scroll.io'] },
    default: { http: ['https://sepolia-rpc.scroll.io'] },
  },
  blockExplorers: {
    etherscan: { name: 'SnowTrace', url: 'https://sepolia-blockscout.scroll.io' },
    default: { name: 'SnowTrace', url: 'https://sepolia-blockscout.scroll.io' },
  }
} as const satisfies Chain

export const ITEM_MOCK = {
  details: "Software Development",
  quantity: 3,
  rate: 30,
  amount: 30
} satisfies InvoiceDataItems

export const INVOICE_MOCK = {
  invoice_number: '0001',
  status: 'draft',
  client_display_name: "John Doe",
  creation_date: "2023-06-13",
  total: 90,
  total_unit: "USD",
  items: [ITEM_MOCK],
  due_date: undefined,
  customer_notes: "Thank you for your business! Please make payment within 30 days of the invoice date. If you have any questions or concerns, please don't hesitate to contact us.",
} satisfies InvoiceData

export const CHAIN = process.env.NODE_ENV === 'development' ? foundry : SCROLL_SEPOLIA_CHAIN
