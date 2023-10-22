'use client'

import * as React from 'react'
import { WagmiConfig } from 'wagmi'

import { config } from '../wagmi'
import { AuthSigProvider } from '@/context'

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  return (
    <WagmiConfig config={config}>
      <AuthSigProvider>
        {mounted && children}
      </AuthSigProvider>
    </WagmiConfig>
  )
}
