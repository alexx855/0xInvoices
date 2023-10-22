import { createContext, useContext, useEffect, useReducer } from 'react';
import { SiweMessage } from 'siwe';
import { useAccount, useNetwork, useSignMessage } from 'wagmi';

interface AuthSig {
  sig: `0x${string}`;
  derivedVia: string;
  signedMessage: string;
  address: `0x${string}` | undefined;
};

export const AuthSigContext = createContext<AuthSig | null>(null);
export const AuthSigDispatchContext = createContext<(action: any) => void>(() => { });

export function AuthSigProvider({ children }: { children: React.ReactNode }) {
  const { address, isConnected } = useAccount()
  const { chain } = useNetwork()
  const { signMessageAsync } = useSignMessage()
  const [authSig, dispatch] = useReducer(
    authSigReducer,
    null
  );

  useEffect(() => {
    if (isConnected && address && !authSig) {
      const getAuthSig = async () => {
        try {

          // get from local storage first
          if (localStorage.getItem('authSig')) {
            const authSig = JSON.parse(localStorage.getItem('authSig')!)
            dispatch({ type: 'added', authSig })
            return
          }

          const message = new SiweMessage({
            domain: window.location.host,
            address,
            statement: 'Sign in with Ethereum to the app.',
            uri: window.location.origin,
            version: '1',
            chainId: chain?.id,
            // nonce: state.nonce,
          })
          const messageToSign = message.prepareMessage();

          const signature = await signMessageAsync({
            message: messageToSign,
          })

          const authSig = {
            sig: signature,
            derivedVia: 'web3.eth.personal.sign',
            signedMessage: messageToSign,
            address: address,
          };

          dispatch({ type: 'added', authSig })
        } catch (error) {
          console.log(error)
        }
      }

      getAuthSig();
    }
  }, [address, authSig, chain?.id, isConnected, signMessageAsync])

  return (
    <AuthSigContext.Provider value={authSig}>
      <AuthSigDispatchContext.Provider value={dispatch}>
        {children}
      </AuthSigDispatchContext.Provider>
    </AuthSigContext.Provider>
  );
}

function authSigReducer(authSig: AuthSig | null, action: { type: string; authSig: AuthSig | null }) {
  switch (action.type) {
    case 'added': {
      // Save to local storage
      localStorage.setItem('authSig', JSON.stringify(action.authSig))
      return action.authSig
    }
    case 'changed': {
      // TODO: handle account changes
      localStorage.setItem('authSig', JSON.stringify(action.authSig))
      return action.authSig
    }
    case 'deleted': {
      // remove from local storage
      localStorage.removeItem('authSig')
      return null
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

