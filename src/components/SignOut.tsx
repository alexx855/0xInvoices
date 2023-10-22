'use client'

import { AuthSigDispatchContext } from "@/context";
import { useContext } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";

// This component renders the sign out button, and handles the sign out logic
export function SignOut() {
  const { connector, isConnected } = useAccount()
  const { isLoading } = useConnect()
  const { disconnect } = useDisconnect()
  const dispatch = useContext(AuthSigDispatchContext);

  return (
    <button
      disabled={!isConnected || isLoading}
      onClick={() => {
        disconnect()
        dispatch({ type: 'deleted' })
      }}
      className="w-full flex items-center p-2  rounded-lg"
    >
      <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path clipRule="evenodd" fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" />
        <path clipRule="evenodd" fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" />
      </svg>
      <span className="text-left flex-1 ml-3 whitespace-nowrap">Sign out
        <span className="sr-only">{connector?.name}</span>
      </span>
    </button>
  )
}
