import { Connected } from '@/components/Connected'
import { NetworkSwitcher } from '@/components/NetworkSwitcher'

export default function InvoiceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Connected showSignIn>
      <NetworkSwitcher />
      {children}
    </Connected>
  )
}
