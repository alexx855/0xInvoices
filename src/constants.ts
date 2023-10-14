import { type Chain } from 'wagmi'

export const FOUNDRY_CONTRACT_ADDRESS = ''
export const SCROLL_CONTRACT_ADDRESS = ''

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

export const FOUNDRY_LOCAL_CHAIN = {
  id: 31337,
  name: "Foundry",
  network: "foundry",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    public: { http: ["http://127.0.0.1:9545"] },
    default: { http: ["http://127.0.0.1:9545"] },
  },
  blockExplorers: {
    etherscan: { name: 'SnowTrace', url: 'https://sepolia-blockscout.scroll.io' },
    default: { name: 'SnowTrace', url: 'https://sepolia-blockscout.scroll.io' },
  }
} as const satisfies Chain
