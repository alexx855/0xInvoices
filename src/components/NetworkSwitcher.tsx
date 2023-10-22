'use client'

// import { BaseError } from 'viem'
import { useNetwork, useSwitchNetwork } from 'wagmi'

export function NetworkSwitcher() {
  const { chain } = useNetwork()
  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork()

  return (
    <>
      {switchNetwork && (
        <>
          {chains.map((x) =>
            x.id === chain?.id ? null : (
              <button className='p-2 text-left' key={x.id} onClick={() => switchNetwork(x.id)}>
                Switch to  {x.name}
                {isLoading && x.id === pendingChainId && ' (switching)'}
              </button>
            ),
          )}
        </>
      )}

      {/* <p className="p-2  text-gray-900 rounded-lg">
        Connected to {chain?.name ?? chain?.id}
        {chain?.unsupported && ' (unsupported)'}
      </p> */}

      {/* <p>{error && (error as BaseError).shortMessage}</p> */}
    </>
  )
}
