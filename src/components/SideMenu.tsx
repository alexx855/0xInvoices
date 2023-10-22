'use client'

import Link from 'next/link'
import { SignOut } from '@/components/SignOut'
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { NetworkSwitcher } from './NetworkSwitcher';
import { SignIn } from './SignIn';
import { useAccount } from 'wagmi';

export function SideMenu({ onNavigation }: { onNavigation: () => void }) {
  const { isConnected } = useAccount()

  // detect route change pathname
  const pathname = usePathname();
  useEffect(() => {
    onNavigation();
  }, [onNavigation, pathname]);

  return (
    <>
      <ul className="space-y-2 font-medium">
        <li>
          <Link href="/" className="flex items-center p-2 text-gray-900 rounded-lg">
            <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path clipRule="evenodd" fillRule="evenodd" d="M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zm2.25 8.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 3a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" />
            </svg>
            <span className="ml-3">Your Invoices</span>
          </Link>
        </li>

        <li>
          <Link href="/create" className="flex items-center p-2 text-gray-900 rounded-lg">
            <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
              <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
            </svg>
            <span className="flex-1 ml-3 whitespace-nowrap">Create Invoice</span>
          </Link>
        </li>

        {isConnected ? (
          <li>
            <SignOut />
          </li>
        ) : (
          <li>
            <SignIn />
          </li>
        )}

        <li>
          <NetworkSwitcher />
        </li>

      </ul>
    </>
  )
}
