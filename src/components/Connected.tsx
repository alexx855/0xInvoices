'use client'

import type { ReactNode } from 'react'
import { useAccount } from 'wagmi'
import { SignIn } from '@/components/SignIn'

export function Connected({ children, showSignIn = false }: { children: ReactNode, showSignIn?: boolean }) {
  const { isConnected } = useAccount()

  if (!isConnected && !showSignIn) return null
  if (!isConnected && showSignIn) return <SignIn />
  return <>{children}</>
}
