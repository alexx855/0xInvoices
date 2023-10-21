import { configureChains, createConfig } from 'wagmi'
import { foundry } from 'wagmi/chains'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { publicProvider } from 'wagmi/providers/public'
import { SCROLL_SEPOLIA_CHAIN } from '@/constants'


const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    ...(process.env.NODE_ENV === 'development' ? [foundry] : [SCROLL_SEPOLIA_CHAIN]),
  ],
  [
    publicProvider(),
  ],
)


export const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
  ],
  publicClient,
  webSocketPublicClient,
})
