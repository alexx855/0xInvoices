'use client'

import Link from "next/link";
import { useAccount, useConnect, useDisconnect } from 'wagmi'

export function SignIn() {
  const { connector, isConnected } = useAccount()
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect()

  return (
    <>
      {connectors
        .filter((x) => x.ready && x.id !== connector?.id)
        .map((x) => (
          <button
            className="flex w-full items-center p-2 text-gray-900 rounded-lg"
            disabled={isLoading || x.id === pendingConnector?.id}
            key={x.id}
            onClick={() => connect({ connector: x })}
          >
            <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"></path></svg>
            <span className="text-left flex-1 ml-3 whitespace-nowrap">Sign in with {x.name}</span>

            {/* {isLoading && x.id === pendingConnector?.id && ' (connecting)'} */}
          </button>
        ))}
    </>
  )
}
