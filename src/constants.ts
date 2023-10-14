import { type Chain } from 'wagmi'

export const FOUNDRY_CONTRACT_ADDRESS = '0xed12bE400A07910E4d4E743E4ceE26ab1FC9a961'
export const SCROLL_CONTRACT_ADDRESS = '0x93D7B1a473088cCea249Eb02e8eA5B0b43Bd1234'

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
