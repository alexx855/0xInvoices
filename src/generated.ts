import {
  useNetwork,
  useChainId,
  useContractRead,
  UseContractReadConfig,
  useContractWrite,
  Address,
  UseContractWriteConfig,
  usePrepareContractWrite,
  UsePrepareContractWriteConfig,
  useContractEvent,
  UseContractEventConfig,
} from 'wagmi'
import {
  ReadContractResult,
  WriteContractMode,
  PrepareWriteContractResult,
} from 'wagmi/actions'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Counter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x93D7B1a473088cCea249Eb02e8eA5B0b43Bd1234)
 */
export const counterABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'increment',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'number',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newNumber', internalType: 'uint256', type: 'uint256' }],
    name: 'setNumber',
    outputs: [],
  },
] as const

/**
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x93D7B1a473088cCea249Eb02e8eA5B0b43Bd1234)
 */
export const counterAddress = {
  31337: '0x3489745eff9525CCC3d8c648102FE2cf3485e228',
  534351: '0x93D7B1a473088cCea249Eb02e8eA5B0b43Bd1234',
} as const

/**
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x93D7B1a473088cCea249Eb02e8eA5B0b43Bd1234)
 */
export const counterConfig = {
  address: counterAddress,
  abi: counterABI,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC165
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc165ABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc721ABI = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC721Burnable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc721BurnableABI = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'burn',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC721Enumerable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc721EnumerableABI = [
  { type: 'error', inputs: [], name: 'ERC721EnumerableForbiddenBatchMint' },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
  {
    type: 'error',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721OutOfBoundsIndex',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC721URIStorage
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc721UriStorageABI = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_fromTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: '_toTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'BatchMetadataUpdate',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'MetadataUpdate',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1155Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1155ErrorsABI = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidApprover',
  },
  {
    type: 'error',
    inputs: [
      { name: 'idsLength', internalType: 'uint256', type: 'uint256' },
      { name: 'valuesLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InvalidArrayLength',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidSender',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1155MissingApprovalForAll',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC165
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc165ABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20ErrorsABI = [
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC4906
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc4906ABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_fromTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: '_toTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'BatchMetadataUpdate',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'MetadataUpdate',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Enumerable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721EnumerableABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ErrorsABI = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Metadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721MetadataABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Receiver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ReceiverABI = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC721Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Invoice
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const invoiceABI = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
  { type: 'error', inputs: [], name: 'ERC721EnumerableForbiddenBatchMint' },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
  {
    type: 'error',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721OutOfBoundsIndex',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_fromTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: '_toTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'BatchMetadataUpdate',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'MetadataUpdate',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'burn',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'newInvoice',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Math
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const mathABI = [
  { type: 'error', inputs: [], name: 'MathOverflowedMulDiv' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Ownable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ownableABI = [
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Strings
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stringsABI = [
  {
    type: 'error',
    inputs: [
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'length', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'StringsInsufficientHexLength',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Test
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const testABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_named_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_named_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_named_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_named_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_named_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'logs',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'IS_TEST',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'failed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link counterABI}__.
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x93D7B1a473088cCea249Eb02e8eA5B0b43Bd1234)
 */
export function useCounterRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof counterABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>,
    'abi' | 'address'
  > & { chainId?: keyof typeof counterAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    ...config,
  } as UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"number"`.
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x93D7B1a473088cCea249Eb02e8eA5B0b43Bd1234)
 */
export function useCounterNumber<
  TFunctionName extends 'number',
  TSelectData = ReadContractResult<typeof counterABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof counterAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: 'number',
    ...config,
  } as UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link counterABI}__.
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x93D7B1a473088cCea249Eb02e8eA5B0b43Bd1234)
 */
export function useCounterWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof counterAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof counterABI, string>['request']['abi'],
        TFunctionName,
        TMode
      > & { address?: Address; chainId?: TChainId }
    : UseContractWriteConfig<typeof counterABI, TFunctionName, TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof counterABI, TFunctionName, TMode>({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"increment"`.
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x93D7B1a473088cCea249Eb02e8eA5B0b43Bd1234)
 */
export function useCounterIncrement<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof counterAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof counterABI,
          'increment'
        >['request']['abi'],
        'increment',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'increment' }
    : UseContractWriteConfig<typeof counterABI, 'increment', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'increment'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof counterABI, 'increment', TMode>({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: 'increment',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"setNumber"`.
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x93D7B1a473088cCea249Eb02e8eA5B0b43Bd1234)
 */
export function useCounterSetNumber<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof counterAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof counterABI,
          'setNumber'
        >['request']['abi'],
        'setNumber',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'setNumber' }
    : UseContractWriteConfig<typeof counterABI, 'setNumber', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setNumber'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof counterABI, 'setNumber', TMode>({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: 'setNumber',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link counterABI}__.
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x93D7B1a473088cCea249Eb02e8eA5B0b43Bd1234)
 */
export function usePrepareCounterWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof counterABI, TFunctionName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof counterAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    ...config,
  } as UsePrepareContractWriteConfig<typeof counterABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"increment"`.
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x93D7B1a473088cCea249Eb02e8eA5B0b43Bd1234)
 */
export function usePrepareCounterIncrement(
  config: Omit<
    UsePrepareContractWriteConfig<typeof counterABI, 'increment'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof counterAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: 'increment',
    ...config,
  } as UsePrepareContractWriteConfig<typeof counterABI, 'increment'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"setNumber"`.
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x93D7B1a473088cCea249Eb02e8eA5B0b43Bd1234)
 */
export function usePrepareCounterSetNumber(
  config: Omit<
    UsePrepareContractWriteConfig<typeof counterABI, 'setNumber'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof counterAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: 'setNumber',
    ...config,
  } as UsePrepareContractWriteConfig<typeof counterABI, 'setNumber'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link counterABI}__.
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x93D7B1a473088cCea249Eb02e8eA5B0b43Bd1234)
 */
export function useCounterEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof counterABI, TEventName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof counterAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    ...config,
  } as UseContractEventConfig<typeof counterABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link counterABI}__ and `eventName` set to `"Transfer"`.
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x93D7B1a473088cCea249Eb02e8eA5B0b43Bd1234)
 */
export function useCounterTransferEvent(
  config: Omit<
    UseContractEventConfig<typeof counterABI, 'Transfer'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof counterAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof counterABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc165ABI}__.
 */
export function useErc165Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof erc165ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc165ABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({ abi: erc165ABI, ...config } as UseContractReadConfig<
    typeof erc165ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc165ABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useErc165SupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof erc165ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc165ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc165ABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<typeof erc165ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__.
 */
export function useErc721Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({ abi: erc721ABI, ...config } as UseContractReadConfig<
    typeof erc721ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useErc721BalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"getApproved"`.
 */
export function useErc721GetApproved<
  TFunctionName extends 'getApproved',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'getApproved',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"isApprovedForAll"`.
 */
export function useErc721IsApprovedForAll<
  TFunctionName extends 'isApprovedForAll',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'isApprovedForAll',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"name"`.
 */
export function useErc721Name<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"ownerOf"`.
 */
export function useErc721OwnerOf<
  TFunctionName extends 'ownerOf',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'ownerOf',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useErc721SupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"symbol"`.
 */
export function useErc721Symbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"tokenURI"`.
 */
export function useErc721TokenUri<
  TFunctionName extends 'tokenURI',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'tokenURI',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__.
 */
export function useErc721Write<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof erc721ABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof erc721ABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof erc721ABI, TFunctionName, TMode>({
    abi: erc721ABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"approve"`.
 */
export function useErc721Approve<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc721ABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof erc721ABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof erc721ABI, 'approve', TMode>({
    abi: erc721ABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function useErc721SafeTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc721ABI,
          'safeTransferFrom'
        >['request']['abi'],
        'safeTransferFrom',
        TMode
      > & { functionName?: 'safeTransferFrom' }
    : UseContractWriteConfig<typeof erc721ABI, 'safeTransferFrom', TMode> & {
        abi?: never
        functionName?: 'safeTransferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof erc721ABI, 'safeTransferFrom', TMode>({
    abi: erc721ABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function useErc721SetApprovalForAll<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc721ABI,
          'setApprovalForAll'
        >['request']['abi'],
        'setApprovalForAll',
        TMode
      > & { functionName?: 'setApprovalForAll' }
    : UseContractWriteConfig<typeof erc721ABI, 'setApprovalForAll', TMode> & {
        abi?: never
        functionName?: 'setApprovalForAll'
      } = {} as any,
) {
  return useContractWrite<typeof erc721ABI, 'setApprovalForAll', TMode>({
    abi: erc721ABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useErc721TransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc721ABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<typeof erc721ABI, 'transferFrom', TMode> & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof erc721ABI, 'transferFrom', TMode>({
    abi: erc721ABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__.
 */
export function usePrepareErc721Write<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc721ABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721ABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc721ABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareErc721Approve(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc721ABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721ABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc721ABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function usePrepareErc721SafeTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc721ABI, 'safeTransferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721ABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc721ABI, 'safeTransferFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function usePrepareErc721SetApprovalForAll(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc721ABI, 'setApprovalForAll'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721ABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc721ABI, 'setApprovalForAll'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareErc721TransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc721ABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721ABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc721ABI, 'transferFrom'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721ABI}__.
 */
export function useErc721Event<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof erc721ABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc721ABI,
    ...config,
  } as UseContractEventConfig<typeof erc721ABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721ABI}__ and `eventName` set to `"Approval"`.
 */
export function useErc721ApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof erc721ABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc721ABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof erc721ABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721ABI}__ and `eventName` set to `"ApprovalForAll"`.
 */
export function useErc721ApprovalForAllEvent(
  config: Omit<
    UseContractEventConfig<typeof erc721ABI, 'ApprovalForAll'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc721ABI,
    eventName: 'ApprovalForAll',
    ...config,
  } as UseContractEventConfig<typeof erc721ABI, 'ApprovalForAll'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721ABI}__ and `eventName` set to `"Transfer"`.
 */
export function useErc721TransferEvent(
  config: Omit<
    UseContractEventConfig<typeof erc721ABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc721ABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof erc721ABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721BurnableABI}__.
 */
export function useErc721BurnableRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof erc721BurnableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721BurnableABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721BurnableABI,
    ...config,
  } as UseContractReadConfig<
    typeof erc721BurnableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721BurnableABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useErc721BurnableBalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof erc721BurnableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721BurnableABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721BurnableABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<
    typeof erc721BurnableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721BurnableABI}__ and `functionName` set to `"getApproved"`.
 */
export function useErc721BurnableGetApproved<
  TFunctionName extends 'getApproved',
  TSelectData = ReadContractResult<typeof erc721BurnableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721BurnableABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721BurnableABI,
    functionName: 'getApproved',
    ...config,
  } as UseContractReadConfig<
    typeof erc721BurnableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721BurnableABI}__ and `functionName` set to `"isApprovedForAll"`.
 */
export function useErc721BurnableIsApprovedForAll<
  TFunctionName extends 'isApprovedForAll',
  TSelectData = ReadContractResult<typeof erc721BurnableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721BurnableABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721BurnableABI,
    functionName: 'isApprovedForAll',
    ...config,
  } as UseContractReadConfig<
    typeof erc721BurnableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721BurnableABI}__ and `functionName` set to `"name"`.
 */
export function useErc721BurnableName<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof erc721BurnableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721BurnableABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721BurnableABI,
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<
    typeof erc721BurnableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721BurnableABI}__ and `functionName` set to `"ownerOf"`.
 */
export function useErc721BurnableOwnerOf<
  TFunctionName extends 'ownerOf',
  TSelectData = ReadContractResult<typeof erc721BurnableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721BurnableABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721BurnableABI,
    functionName: 'ownerOf',
    ...config,
  } as UseContractReadConfig<
    typeof erc721BurnableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721BurnableABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useErc721BurnableSupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof erc721BurnableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721BurnableABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721BurnableABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<
    typeof erc721BurnableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721BurnableABI}__ and `functionName` set to `"symbol"`.
 */
export function useErc721BurnableSymbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof erc721BurnableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721BurnableABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721BurnableABI,
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<
    typeof erc721BurnableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721BurnableABI}__ and `functionName` set to `"tokenURI"`.
 */
export function useErc721BurnableTokenUri<
  TFunctionName extends 'tokenURI',
  TSelectData = ReadContractResult<typeof erc721BurnableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721BurnableABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721BurnableABI,
    functionName: 'tokenURI',
    ...config,
  } as UseContractReadConfig<
    typeof erc721BurnableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721BurnableABI}__.
 */
export function useErc721BurnableWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc721BurnableABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof erc721BurnableABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof erc721BurnableABI, TFunctionName, TMode>({
    abi: erc721BurnableABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721BurnableABI}__ and `functionName` set to `"approve"`.
 */
export function useErc721BurnableApprove<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc721BurnableABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof erc721BurnableABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof erc721BurnableABI, 'approve', TMode>({
    abi: erc721BurnableABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721BurnableABI}__ and `functionName` set to `"burn"`.
 */
export function useErc721BurnableBurn<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc721BurnableABI,
          'burn'
        >['request']['abi'],
        'burn',
        TMode
      > & { functionName?: 'burn' }
    : UseContractWriteConfig<typeof erc721BurnableABI, 'burn', TMode> & {
        abi?: never
        functionName?: 'burn'
      } = {} as any,
) {
  return useContractWrite<typeof erc721BurnableABI, 'burn', TMode>({
    abi: erc721BurnableABI,
    functionName: 'burn',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721BurnableABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function useErc721BurnableSafeTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc721BurnableABI,
          'safeTransferFrom'
        >['request']['abi'],
        'safeTransferFrom',
        TMode
      > & { functionName?: 'safeTransferFrom' }
    : UseContractWriteConfig<
        typeof erc721BurnableABI,
        'safeTransferFrom',
        TMode
      > & {
        abi?: never
        functionName?: 'safeTransferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof erc721BurnableABI, 'safeTransferFrom', TMode>({
    abi: erc721BurnableABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721BurnableABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function useErc721BurnableSetApprovalForAll<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc721BurnableABI,
          'setApprovalForAll'
        >['request']['abi'],
        'setApprovalForAll',
        TMode
      > & { functionName?: 'setApprovalForAll' }
    : UseContractWriteConfig<
        typeof erc721BurnableABI,
        'setApprovalForAll',
        TMode
      > & {
        abi?: never
        functionName?: 'setApprovalForAll'
      } = {} as any,
) {
  return useContractWrite<typeof erc721BurnableABI, 'setApprovalForAll', TMode>(
    {
      abi: erc721BurnableABI,
      functionName: 'setApprovalForAll',
      ...config,
    } as any,
  )
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721BurnableABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useErc721BurnableTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc721BurnableABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<
        typeof erc721BurnableABI,
        'transferFrom',
        TMode
      > & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof erc721BurnableABI, 'transferFrom', TMode>({
    abi: erc721BurnableABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721BurnableABI}__.
 */
export function usePrepareErc721BurnableWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc721BurnableABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721BurnableABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc721BurnableABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721BurnableABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareErc721BurnableApprove(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc721BurnableABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721BurnableABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc721BurnableABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721BurnableABI}__ and `functionName` set to `"burn"`.
 */
export function usePrepareErc721BurnableBurn(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc721BurnableABI, 'burn'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721BurnableABI,
    functionName: 'burn',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc721BurnableABI, 'burn'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721BurnableABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function usePrepareErc721BurnableSafeTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc721BurnableABI, 'safeTransferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721BurnableABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof erc721BurnableABI,
    'safeTransferFrom'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721BurnableABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function usePrepareErc721BurnableSetApprovalForAll(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof erc721BurnableABI,
      'setApprovalForAll'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721BurnableABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof erc721BurnableABI,
    'setApprovalForAll'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721BurnableABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareErc721BurnableTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc721BurnableABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721BurnableABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc721BurnableABI, 'transferFrom'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721BurnableABI}__.
 */
export function useErc721BurnableEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof erc721BurnableABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc721BurnableABI,
    ...config,
  } as UseContractEventConfig<typeof erc721BurnableABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721BurnableABI}__ and `eventName` set to `"Approval"`.
 */
export function useErc721BurnableApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof erc721BurnableABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc721BurnableABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof erc721BurnableABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721BurnableABI}__ and `eventName` set to `"ApprovalForAll"`.
 */
export function useErc721BurnableApprovalForAllEvent(
  config: Omit<
    UseContractEventConfig<typeof erc721BurnableABI, 'ApprovalForAll'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc721BurnableABI,
    eventName: 'ApprovalForAll',
    ...config,
  } as UseContractEventConfig<typeof erc721BurnableABI, 'ApprovalForAll'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721BurnableABI}__ and `eventName` set to `"Transfer"`.
 */
export function useErc721BurnableTransferEvent(
  config: Omit<
    UseContractEventConfig<typeof erc721BurnableABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc721BurnableABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof erc721BurnableABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721EnumerableABI}__.
 */
export function useErc721EnumerableRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof erc721EnumerableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof erc721EnumerableABI,
      TFunctionName,
      TSelectData
    >,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721EnumerableABI,
    ...config,
  } as UseContractReadConfig<
    typeof erc721EnumerableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721EnumerableABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useErc721EnumerableBalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof erc721EnumerableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof erc721EnumerableABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721EnumerableABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<
    typeof erc721EnumerableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721EnumerableABI}__ and `functionName` set to `"getApproved"`.
 */
export function useErc721EnumerableGetApproved<
  TFunctionName extends 'getApproved',
  TSelectData = ReadContractResult<typeof erc721EnumerableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof erc721EnumerableABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721EnumerableABI,
    functionName: 'getApproved',
    ...config,
  } as UseContractReadConfig<
    typeof erc721EnumerableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721EnumerableABI}__ and `functionName` set to `"isApprovedForAll"`.
 */
export function useErc721EnumerableIsApprovedForAll<
  TFunctionName extends 'isApprovedForAll',
  TSelectData = ReadContractResult<typeof erc721EnumerableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof erc721EnumerableABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721EnumerableABI,
    functionName: 'isApprovedForAll',
    ...config,
  } as UseContractReadConfig<
    typeof erc721EnumerableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721EnumerableABI}__ and `functionName` set to `"name"`.
 */
export function useErc721EnumerableName<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof erc721EnumerableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof erc721EnumerableABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721EnumerableABI,
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<
    typeof erc721EnumerableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721EnumerableABI}__ and `functionName` set to `"ownerOf"`.
 */
export function useErc721EnumerableOwnerOf<
  TFunctionName extends 'ownerOf',
  TSelectData = ReadContractResult<typeof erc721EnumerableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof erc721EnumerableABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721EnumerableABI,
    functionName: 'ownerOf',
    ...config,
  } as UseContractReadConfig<
    typeof erc721EnumerableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721EnumerableABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useErc721EnumerableSupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof erc721EnumerableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof erc721EnumerableABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721EnumerableABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<
    typeof erc721EnumerableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721EnumerableABI}__ and `functionName` set to `"symbol"`.
 */
export function useErc721EnumerableSymbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof erc721EnumerableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof erc721EnumerableABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721EnumerableABI,
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<
    typeof erc721EnumerableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721EnumerableABI}__ and `functionName` set to `"tokenByIndex"`.
 */
export function useErc721EnumerableTokenByIndex<
  TFunctionName extends 'tokenByIndex',
  TSelectData = ReadContractResult<typeof erc721EnumerableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof erc721EnumerableABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721EnumerableABI,
    functionName: 'tokenByIndex',
    ...config,
  } as UseContractReadConfig<
    typeof erc721EnumerableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721EnumerableABI}__ and `functionName` set to `"tokenOfOwnerByIndex"`.
 */
export function useErc721EnumerableTokenOfOwnerByIndex<
  TFunctionName extends 'tokenOfOwnerByIndex',
  TSelectData = ReadContractResult<typeof erc721EnumerableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof erc721EnumerableABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721EnumerableABI,
    functionName: 'tokenOfOwnerByIndex',
    ...config,
  } as UseContractReadConfig<
    typeof erc721EnumerableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721EnumerableABI}__ and `functionName` set to `"tokenURI"`.
 */
export function useErc721EnumerableTokenUri<
  TFunctionName extends 'tokenURI',
  TSelectData = ReadContractResult<typeof erc721EnumerableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof erc721EnumerableABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721EnumerableABI,
    functionName: 'tokenURI',
    ...config,
  } as UseContractReadConfig<
    typeof erc721EnumerableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721EnumerableABI}__ and `functionName` set to `"totalSupply"`.
 */
export function useErc721EnumerableTotalSupply<
  TFunctionName extends 'totalSupply',
  TSelectData = ReadContractResult<typeof erc721EnumerableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof erc721EnumerableABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721EnumerableABI,
    functionName: 'totalSupply',
    ...config,
  } as UseContractReadConfig<
    typeof erc721EnumerableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721EnumerableABI}__.
 */
export function useErc721EnumerableWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc721EnumerableABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<
        typeof erc721EnumerableABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof erc721EnumerableABI, TFunctionName, TMode>({
    abi: erc721EnumerableABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721EnumerableABI}__ and `functionName` set to `"approve"`.
 */
export function useErc721EnumerableApprove<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc721EnumerableABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof erc721EnumerableABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof erc721EnumerableABI, 'approve', TMode>({
    abi: erc721EnumerableABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721EnumerableABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function useErc721EnumerableSafeTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc721EnumerableABI,
          'safeTransferFrom'
        >['request']['abi'],
        'safeTransferFrom',
        TMode
      > & { functionName?: 'safeTransferFrom' }
    : UseContractWriteConfig<
        typeof erc721EnumerableABI,
        'safeTransferFrom',
        TMode
      > & {
        abi?: never
        functionName?: 'safeTransferFrom'
      } = {} as any,
) {
  return useContractWrite<
    typeof erc721EnumerableABI,
    'safeTransferFrom',
    TMode
  >({
    abi: erc721EnumerableABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721EnumerableABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function useErc721EnumerableSetApprovalForAll<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc721EnumerableABI,
          'setApprovalForAll'
        >['request']['abi'],
        'setApprovalForAll',
        TMode
      > & { functionName?: 'setApprovalForAll' }
    : UseContractWriteConfig<
        typeof erc721EnumerableABI,
        'setApprovalForAll',
        TMode
      > & {
        abi?: never
        functionName?: 'setApprovalForAll'
      } = {} as any,
) {
  return useContractWrite<
    typeof erc721EnumerableABI,
    'setApprovalForAll',
    TMode
  >({
    abi: erc721EnumerableABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721EnumerableABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useErc721EnumerableTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc721EnumerableABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<
        typeof erc721EnumerableABI,
        'transferFrom',
        TMode
      > & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof erc721EnumerableABI, 'transferFrom', TMode>({
    abi: erc721EnumerableABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721EnumerableABI}__.
 */
export function usePrepareErc721EnumerableWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc721EnumerableABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721EnumerableABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc721EnumerableABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721EnumerableABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareErc721EnumerableApprove(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc721EnumerableABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721EnumerableABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc721EnumerableABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721EnumerableABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function usePrepareErc721EnumerableSafeTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof erc721EnumerableABI,
      'safeTransferFrom'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721EnumerableABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof erc721EnumerableABI,
    'safeTransferFrom'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721EnumerableABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function usePrepareErc721EnumerableSetApprovalForAll(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof erc721EnumerableABI,
      'setApprovalForAll'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721EnumerableABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof erc721EnumerableABI,
    'setApprovalForAll'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721EnumerableABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareErc721EnumerableTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc721EnumerableABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721EnumerableABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof erc721EnumerableABI,
    'transferFrom'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721EnumerableABI}__.
 */
export function useErc721EnumerableEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof erc721EnumerableABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc721EnumerableABI,
    ...config,
  } as UseContractEventConfig<typeof erc721EnumerableABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721EnumerableABI}__ and `eventName` set to `"Approval"`.
 */
export function useErc721EnumerableApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof erc721EnumerableABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc721EnumerableABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof erc721EnumerableABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721EnumerableABI}__ and `eventName` set to `"ApprovalForAll"`.
 */
export function useErc721EnumerableApprovalForAllEvent(
  config: Omit<
    UseContractEventConfig<typeof erc721EnumerableABI, 'ApprovalForAll'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc721EnumerableABI,
    eventName: 'ApprovalForAll',
    ...config,
  } as UseContractEventConfig<typeof erc721EnumerableABI, 'ApprovalForAll'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721EnumerableABI}__ and `eventName` set to `"Transfer"`.
 */
export function useErc721EnumerableTransferEvent(
  config: Omit<
    UseContractEventConfig<typeof erc721EnumerableABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc721EnumerableABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof erc721EnumerableABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721UriStorageABI}__.
 */
export function useErc721UriStorageRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof erc721UriStorageABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof erc721UriStorageABI,
      TFunctionName,
      TSelectData
    >,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721UriStorageABI,
    ...config,
  } as UseContractReadConfig<
    typeof erc721UriStorageABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721UriStorageABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useErc721UriStorageBalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof erc721UriStorageABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof erc721UriStorageABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721UriStorageABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<
    typeof erc721UriStorageABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721UriStorageABI}__ and `functionName` set to `"getApproved"`.
 */
export function useErc721UriStorageGetApproved<
  TFunctionName extends 'getApproved',
  TSelectData = ReadContractResult<typeof erc721UriStorageABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof erc721UriStorageABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721UriStorageABI,
    functionName: 'getApproved',
    ...config,
  } as UseContractReadConfig<
    typeof erc721UriStorageABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721UriStorageABI}__ and `functionName` set to `"isApprovedForAll"`.
 */
export function useErc721UriStorageIsApprovedForAll<
  TFunctionName extends 'isApprovedForAll',
  TSelectData = ReadContractResult<typeof erc721UriStorageABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof erc721UriStorageABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721UriStorageABI,
    functionName: 'isApprovedForAll',
    ...config,
  } as UseContractReadConfig<
    typeof erc721UriStorageABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721UriStorageABI}__ and `functionName` set to `"name"`.
 */
export function useErc721UriStorageName<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof erc721UriStorageABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof erc721UriStorageABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721UriStorageABI,
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<
    typeof erc721UriStorageABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721UriStorageABI}__ and `functionName` set to `"ownerOf"`.
 */
export function useErc721UriStorageOwnerOf<
  TFunctionName extends 'ownerOf',
  TSelectData = ReadContractResult<typeof erc721UriStorageABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof erc721UriStorageABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721UriStorageABI,
    functionName: 'ownerOf',
    ...config,
  } as UseContractReadConfig<
    typeof erc721UriStorageABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721UriStorageABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useErc721UriStorageSupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof erc721UriStorageABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof erc721UriStorageABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721UriStorageABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<
    typeof erc721UriStorageABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721UriStorageABI}__ and `functionName` set to `"symbol"`.
 */
export function useErc721UriStorageSymbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof erc721UriStorageABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof erc721UriStorageABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721UriStorageABI,
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<
    typeof erc721UriStorageABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721UriStorageABI}__ and `functionName` set to `"tokenURI"`.
 */
export function useErc721UriStorageTokenUri<
  TFunctionName extends 'tokenURI',
  TSelectData = ReadContractResult<typeof erc721UriStorageABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof erc721UriStorageABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721UriStorageABI,
    functionName: 'tokenURI',
    ...config,
  } as UseContractReadConfig<
    typeof erc721UriStorageABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721UriStorageABI}__.
 */
export function useErc721UriStorageWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc721UriStorageABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<
        typeof erc721UriStorageABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof erc721UriStorageABI, TFunctionName, TMode>({
    abi: erc721UriStorageABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721UriStorageABI}__ and `functionName` set to `"approve"`.
 */
export function useErc721UriStorageApprove<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc721UriStorageABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof erc721UriStorageABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof erc721UriStorageABI, 'approve', TMode>({
    abi: erc721UriStorageABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721UriStorageABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function useErc721UriStorageSafeTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc721UriStorageABI,
          'safeTransferFrom'
        >['request']['abi'],
        'safeTransferFrom',
        TMode
      > & { functionName?: 'safeTransferFrom' }
    : UseContractWriteConfig<
        typeof erc721UriStorageABI,
        'safeTransferFrom',
        TMode
      > & {
        abi?: never
        functionName?: 'safeTransferFrom'
      } = {} as any,
) {
  return useContractWrite<
    typeof erc721UriStorageABI,
    'safeTransferFrom',
    TMode
  >({
    abi: erc721UriStorageABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721UriStorageABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function useErc721UriStorageSetApprovalForAll<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc721UriStorageABI,
          'setApprovalForAll'
        >['request']['abi'],
        'setApprovalForAll',
        TMode
      > & { functionName?: 'setApprovalForAll' }
    : UseContractWriteConfig<
        typeof erc721UriStorageABI,
        'setApprovalForAll',
        TMode
      > & {
        abi?: never
        functionName?: 'setApprovalForAll'
      } = {} as any,
) {
  return useContractWrite<
    typeof erc721UriStorageABI,
    'setApprovalForAll',
    TMode
  >({
    abi: erc721UriStorageABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721UriStorageABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useErc721UriStorageTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc721UriStorageABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<
        typeof erc721UriStorageABI,
        'transferFrom',
        TMode
      > & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof erc721UriStorageABI, 'transferFrom', TMode>({
    abi: erc721UriStorageABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721UriStorageABI}__.
 */
export function usePrepareErc721UriStorageWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc721UriStorageABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721UriStorageABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc721UriStorageABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721UriStorageABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareErc721UriStorageApprove(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc721UriStorageABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721UriStorageABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc721UriStorageABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721UriStorageABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function usePrepareErc721UriStorageSafeTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof erc721UriStorageABI,
      'safeTransferFrom'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721UriStorageABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof erc721UriStorageABI,
    'safeTransferFrom'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721UriStorageABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function usePrepareErc721UriStorageSetApprovalForAll(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof erc721UriStorageABI,
      'setApprovalForAll'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721UriStorageABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof erc721UriStorageABI,
    'setApprovalForAll'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721UriStorageABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareErc721UriStorageTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc721UriStorageABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721UriStorageABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof erc721UriStorageABI,
    'transferFrom'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721UriStorageABI}__.
 */
export function useErc721UriStorageEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof erc721UriStorageABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc721UriStorageABI,
    ...config,
  } as UseContractEventConfig<typeof erc721UriStorageABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721UriStorageABI}__ and `eventName` set to `"Approval"`.
 */
export function useErc721UriStorageApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof erc721UriStorageABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc721UriStorageABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof erc721UriStorageABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721UriStorageABI}__ and `eventName` set to `"ApprovalForAll"`.
 */
export function useErc721UriStorageApprovalForAllEvent(
  config: Omit<
    UseContractEventConfig<typeof erc721UriStorageABI, 'ApprovalForAll'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc721UriStorageABI,
    eventName: 'ApprovalForAll',
    ...config,
  } as UseContractEventConfig<typeof erc721UriStorageABI, 'ApprovalForAll'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721UriStorageABI}__ and `eventName` set to `"BatchMetadataUpdate"`.
 */
export function useErc721UriStorageBatchMetadataUpdateEvent(
  config: Omit<
    UseContractEventConfig<typeof erc721UriStorageABI, 'BatchMetadataUpdate'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc721UriStorageABI,
    eventName: 'BatchMetadataUpdate',
    ...config,
  } as UseContractEventConfig<
    typeof erc721UriStorageABI,
    'BatchMetadataUpdate'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721UriStorageABI}__ and `eventName` set to `"MetadataUpdate"`.
 */
export function useErc721UriStorageMetadataUpdateEvent(
  config: Omit<
    UseContractEventConfig<typeof erc721UriStorageABI, 'MetadataUpdate'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc721UriStorageABI,
    eventName: 'MetadataUpdate',
    ...config,
  } as UseContractEventConfig<typeof erc721UriStorageABI, 'MetadataUpdate'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721UriStorageABI}__ and `eventName` set to `"Transfer"`.
 */
export function useErc721UriStorageTransferEvent(
  config: Omit<
    UseContractEventConfig<typeof erc721UriStorageABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc721UriStorageABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof erc721UriStorageABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc165ABI}__.
 */
export function useIerc165Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof ierc165ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc165ABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc165ABI,
    ...config,
  } as UseContractReadConfig<typeof ierc165ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc165ABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useIerc165SupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof ierc165ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc165ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc165ABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<typeof ierc165ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc4906ABI}__.
 */
export function useIerc4906Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof ierc4906ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc4906ABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc4906ABI,
    ...config,
  } as UseContractReadConfig<typeof ierc4906ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc4906ABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useIerc4906BalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof ierc4906ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc4906ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc4906ABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<typeof ierc4906ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc4906ABI}__ and `functionName` set to `"getApproved"`.
 */
export function useIerc4906GetApproved<
  TFunctionName extends 'getApproved',
  TSelectData = ReadContractResult<typeof ierc4906ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc4906ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc4906ABI,
    functionName: 'getApproved',
    ...config,
  } as UseContractReadConfig<typeof ierc4906ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc4906ABI}__ and `functionName` set to `"isApprovedForAll"`.
 */
export function useIerc4906IsApprovedForAll<
  TFunctionName extends 'isApprovedForAll',
  TSelectData = ReadContractResult<typeof ierc4906ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc4906ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc4906ABI,
    functionName: 'isApprovedForAll',
    ...config,
  } as UseContractReadConfig<typeof ierc4906ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc4906ABI}__ and `functionName` set to `"ownerOf"`.
 */
export function useIerc4906OwnerOf<
  TFunctionName extends 'ownerOf',
  TSelectData = ReadContractResult<typeof ierc4906ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc4906ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc4906ABI,
    functionName: 'ownerOf',
    ...config,
  } as UseContractReadConfig<typeof ierc4906ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc4906ABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useIerc4906SupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof ierc4906ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc4906ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc4906ABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<typeof ierc4906ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc4906ABI}__.
 */
export function useIerc4906Write<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc4906ABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof ierc4906ABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof ierc4906ABI, TFunctionName, TMode>({
    abi: ierc4906ABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc4906ABI}__ and `functionName` set to `"approve"`.
 */
export function useIerc4906Approve<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc4906ABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof ierc4906ABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof ierc4906ABI, 'approve', TMode>({
    abi: ierc4906ABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc4906ABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function useIerc4906SafeTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc4906ABI,
          'safeTransferFrom'
        >['request']['abi'],
        'safeTransferFrom',
        TMode
      > & { functionName?: 'safeTransferFrom' }
    : UseContractWriteConfig<typeof ierc4906ABI, 'safeTransferFrom', TMode> & {
        abi?: never
        functionName?: 'safeTransferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof ierc4906ABI, 'safeTransferFrom', TMode>({
    abi: ierc4906ABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc4906ABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function useIerc4906SetApprovalForAll<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc4906ABI,
          'setApprovalForAll'
        >['request']['abi'],
        'setApprovalForAll',
        TMode
      > & { functionName?: 'setApprovalForAll' }
    : UseContractWriteConfig<typeof ierc4906ABI, 'setApprovalForAll', TMode> & {
        abi?: never
        functionName?: 'setApprovalForAll'
      } = {} as any,
) {
  return useContractWrite<typeof ierc4906ABI, 'setApprovalForAll', TMode>({
    abi: ierc4906ABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc4906ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useIerc4906TransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc4906ABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<typeof ierc4906ABI, 'transferFrom', TMode> & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof ierc4906ABI, 'transferFrom', TMode>({
    abi: ierc4906ABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc4906ABI}__.
 */
export function usePrepareIerc4906Write<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc4906ABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc4906ABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc4906ABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc4906ABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareIerc4906Approve(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc4906ABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc4906ABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc4906ABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc4906ABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function usePrepareIerc4906SafeTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc4906ABI, 'safeTransferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc4906ABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc4906ABI, 'safeTransferFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc4906ABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function usePrepareIerc4906SetApprovalForAll(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc4906ABI, 'setApprovalForAll'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc4906ABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc4906ABI, 'setApprovalForAll'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc4906ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareIerc4906TransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc4906ABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc4906ABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc4906ABI, 'transferFrom'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc4906ABI}__.
 */
export function useIerc4906Event<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof ierc4906ABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc4906ABI,
    ...config,
  } as UseContractEventConfig<typeof ierc4906ABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc4906ABI}__ and `eventName` set to `"Approval"`.
 */
export function useIerc4906ApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc4906ABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc4906ABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof ierc4906ABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc4906ABI}__ and `eventName` set to `"ApprovalForAll"`.
 */
export function useIerc4906ApprovalForAllEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc4906ABI, 'ApprovalForAll'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc4906ABI,
    eventName: 'ApprovalForAll',
    ...config,
  } as UseContractEventConfig<typeof ierc4906ABI, 'ApprovalForAll'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc4906ABI}__ and `eventName` set to `"BatchMetadataUpdate"`.
 */
export function useIerc4906BatchMetadataUpdateEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc4906ABI, 'BatchMetadataUpdate'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc4906ABI,
    eventName: 'BatchMetadataUpdate',
    ...config,
  } as UseContractEventConfig<typeof ierc4906ABI, 'BatchMetadataUpdate'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc4906ABI}__ and `eventName` set to `"MetadataUpdate"`.
 */
export function useIerc4906MetadataUpdateEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc4906ABI, 'MetadataUpdate'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc4906ABI,
    eventName: 'MetadataUpdate',
    ...config,
  } as UseContractEventConfig<typeof ierc4906ABI, 'MetadataUpdate'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc4906ABI}__ and `eventName` set to `"Transfer"`.
 */
export function useIerc4906TransferEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc4906ABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc4906ABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof ierc4906ABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721ABI}__.
 */
export function useIerc721Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof ierc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721ABI,
    ...config,
  } as UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useIerc721BalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof ierc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721ABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"getApproved"`.
 */
export function useIerc721GetApproved<
  TFunctionName extends 'getApproved',
  TSelectData = ReadContractResult<typeof ierc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721ABI,
    functionName: 'getApproved',
    ...config,
  } as UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"isApprovedForAll"`.
 */
export function useIerc721IsApprovedForAll<
  TFunctionName extends 'isApprovedForAll',
  TSelectData = ReadContractResult<typeof ierc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721ABI,
    functionName: 'isApprovedForAll',
    ...config,
  } as UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"ownerOf"`.
 */
export function useIerc721OwnerOf<
  TFunctionName extends 'ownerOf',
  TSelectData = ReadContractResult<typeof ierc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721ABI,
    functionName: 'ownerOf',
    ...config,
  } as UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useIerc721SupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof ierc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721ABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<typeof ierc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721ABI}__.
 */
export function useIerc721Write<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof ierc721ABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof ierc721ABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof ierc721ABI, TFunctionName, TMode>({
    abi: ierc721ABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"approve"`.
 */
export function useIerc721Approve<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721ABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof ierc721ABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof ierc721ABI, 'approve', TMode>({
    abi: ierc721ABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function useIerc721SafeTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721ABI,
          'safeTransferFrom'
        >['request']['abi'],
        'safeTransferFrom',
        TMode
      > & { functionName?: 'safeTransferFrom' }
    : UseContractWriteConfig<typeof ierc721ABI, 'safeTransferFrom', TMode> & {
        abi?: never
        functionName?: 'safeTransferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof ierc721ABI, 'safeTransferFrom', TMode>({
    abi: ierc721ABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function useIerc721SetApprovalForAll<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721ABI,
          'setApprovalForAll'
        >['request']['abi'],
        'setApprovalForAll',
        TMode
      > & { functionName?: 'setApprovalForAll' }
    : UseContractWriteConfig<typeof ierc721ABI, 'setApprovalForAll', TMode> & {
        abi?: never
        functionName?: 'setApprovalForAll'
      } = {} as any,
) {
  return useContractWrite<typeof ierc721ABI, 'setApprovalForAll', TMode>({
    abi: ierc721ABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useIerc721TransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721ABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<typeof ierc721ABI, 'transferFrom', TMode> & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof ierc721ABI, 'transferFrom', TMode>({
    abi: ierc721ABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721ABI}__.
 */
export function usePrepareIerc721Write<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc721ABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721ABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc721ABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareIerc721Approve(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc721ABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721ABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc721ABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function usePrepareIerc721SafeTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc721ABI, 'safeTransferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721ABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc721ABI, 'safeTransferFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function usePrepareIerc721SetApprovalForAll(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc721ABI, 'setApprovalForAll'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721ABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc721ABI, 'setApprovalForAll'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareIerc721TransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc721ABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721ABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc721ABI, 'transferFrom'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721ABI}__.
 */
export function useIerc721Event<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof ierc721ABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc721ABI,
    ...config,
  } as UseContractEventConfig<typeof ierc721ABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721ABI}__ and `eventName` set to `"Approval"`.
 */
export function useIerc721ApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc721ABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc721ABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof ierc721ABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721ABI}__ and `eventName` set to `"ApprovalForAll"`.
 */
export function useIerc721ApprovalForAllEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc721ABI, 'ApprovalForAll'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc721ABI,
    eventName: 'ApprovalForAll',
    ...config,
  } as UseContractEventConfig<typeof ierc721ABI, 'ApprovalForAll'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721ABI}__ and `eventName` set to `"Transfer"`.
 */
export function useIerc721TransferEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc721ABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc721ABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof ierc721ABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721EnumerableABI}__.
 */
export function useIerc721EnumerableRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof ierc721EnumerableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721EnumerableABI,
      TFunctionName,
      TSelectData
    >,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721EnumerableABI,
    ...config,
  } as UseContractReadConfig<
    typeof ierc721EnumerableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721EnumerableABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useIerc721EnumerableBalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof ierc721EnumerableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721EnumerableABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721EnumerableABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721EnumerableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721EnumerableABI}__ and `functionName` set to `"getApproved"`.
 */
export function useIerc721EnumerableGetApproved<
  TFunctionName extends 'getApproved',
  TSelectData = ReadContractResult<typeof ierc721EnumerableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721EnumerableABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721EnumerableABI,
    functionName: 'getApproved',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721EnumerableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721EnumerableABI}__ and `functionName` set to `"isApprovedForAll"`.
 */
export function useIerc721EnumerableIsApprovedForAll<
  TFunctionName extends 'isApprovedForAll',
  TSelectData = ReadContractResult<typeof ierc721EnumerableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721EnumerableABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721EnumerableABI,
    functionName: 'isApprovedForAll',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721EnumerableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721EnumerableABI}__ and `functionName` set to `"ownerOf"`.
 */
export function useIerc721EnumerableOwnerOf<
  TFunctionName extends 'ownerOf',
  TSelectData = ReadContractResult<typeof ierc721EnumerableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721EnumerableABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721EnumerableABI,
    functionName: 'ownerOf',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721EnumerableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721EnumerableABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useIerc721EnumerableSupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof ierc721EnumerableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721EnumerableABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721EnumerableABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721EnumerableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721EnumerableABI}__ and `functionName` set to `"tokenByIndex"`.
 */
export function useIerc721EnumerableTokenByIndex<
  TFunctionName extends 'tokenByIndex',
  TSelectData = ReadContractResult<typeof ierc721EnumerableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721EnumerableABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721EnumerableABI,
    functionName: 'tokenByIndex',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721EnumerableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721EnumerableABI}__ and `functionName` set to `"tokenOfOwnerByIndex"`.
 */
export function useIerc721EnumerableTokenOfOwnerByIndex<
  TFunctionName extends 'tokenOfOwnerByIndex',
  TSelectData = ReadContractResult<typeof ierc721EnumerableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721EnumerableABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721EnumerableABI,
    functionName: 'tokenOfOwnerByIndex',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721EnumerableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721EnumerableABI}__ and `functionName` set to `"totalSupply"`.
 */
export function useIerc721EnumerableTotalSupply<
  TFunctionName extends 'totalSupply',
  TSelectData = ReadContractResult<typeof ierc721EnumerableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721EnumerableABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721EnumerableABI,
    functionName: 'totalSupply',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721EnumerableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721EnumerableABI}__.
 */
export function useIerc721EnumerableWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721EnumerableABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<
        typeof ierc721EnumerableABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof ierc721EnumerableABI, TFunctionName, TMode>({
    abi: ierc721EnumerableABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721EnumerableABI}__ and `functionName` set to `"approve"`.
 */
export function useIerc721EnumerableApprove<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721EnumerableABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof ierc721EnumerableABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof ierc721EnumerableABI, 'approve', TMode>({
    abi: ierc721EnumerableABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721EnumerableABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function useIerc721EnumerableSafeTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721EnumerableABI,
          'safeTransferFrom'
        >['request']['abi'],
        'safeTransferFrom',
        TMode
      > & { functionName?: 'safeTransferFrom' }
    : UseContractWriteConfig<
        typeof ierc721EnumerableABI,
        'safeTransferFrom',
        TMode
      > & {
        abi?: never
        functionName?: 'safeTransferFrom'
      } = {} as any,
) {
  return useContractWrite<
    typeof ierc721EnumerableABI,
    'safeTransferFrom',
    TMode
  >({
    abi: ierc721EnumerableABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721EnumerableABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function useIerc721EnumerableSetApprovalForAll<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721EnumerableABI,
          'setApprovalForAll'
        >['request']['abi'],
        'setApprovalForAll',
        TMode
      > & { functionName?: 'setApprovalForAll' }
    : UseContractWriteConfig<
        typeof ierc721EnumerableABI,
        'setApprovalForAll',
        TMode
      > & {
        abi?: never
        functionName?: 'setApprovalForAll'
      } = {} as any,
) {
  return useContractWrite<
    typeof ierc721EnumerableABI,
    'setApprovalForAll',
    TMode
  >({
    abi: ierc721EnumerableABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721EnumerableABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useIerc721EnumerableTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721EnumerableABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<
        typeof ierc721EnumerableABI,
        'transferFrom',
        TMode
      > & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof ierc721EnumerableABI, 'transferFrom', TMode>({
    abi: ierc721EnumerableABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721EnumerableABI}__.
 */
export function usePrepareIerc721EnumerableWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc721EnumerableABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721EnumerableABI,
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof ierc721EnumerableABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721EnumerableABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareIerc721EnumerableApprove(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc721EnumerableABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721EnumerableABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc721EnumerableABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721EnumerableABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function usePrepareIerc721EnumerableSafeTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof ierc721EnumerableABI,
      'safeTransferFrom'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721EnumerableABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof ierc721EnumerableABI,
    'safeTransferFrom'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721EnumerableABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function usePrepareIerc721EnumerableSetApprovalForAll(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof ierc721EnumerableABI,
      'setApprovalForAll'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721EnumerableABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof ierc721EnumerableABI,
    'setApprovalForAll'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721EnumerableABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareIerc721EnumerableTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc721EnumerableABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721EnumerableABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof ierc721EnumerableABI,
    'transferFrom'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721EnumerableABI}__.
 */
export function useIerc721EnumerableEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof ierc721EnumerableABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc721EnumerableABI,
    ...config,
  } as UseContractEventConfig<typeof ierc721EnumerableABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721EnumerableABI}__ and `eventName` set to `"Approval"`.
 */
export function useIerc721EnumerableApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc721EnumerableABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc721EnumerableABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof ierc721EnumerableABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721EnumerableABI}__ and `eventName` set to `"ApprovalForAll"`.
 */
export function useIerc721EnumerableApprovalForAllEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc721EnumerableABI, 'ApprovalForAll'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc721EnumerableABI,
    eventName: 'ApprovalForAll',
    ...config,
  } as UseContractEventConfig<typeof ierc721EnumerableABI, 'ApprovalForAll'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721EnumerableABI}__ and `eventName` set to `"Transfer"`.
 */
export function useIerc721EnumerableTransferEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc721EnumerableABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc721EnumerableABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof ierc721EnumerableABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721MetadataABI}__.
 */
export function useIerc721MetadataRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof ierc721MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721MetadataABI,
      TFunctionName,
      TSelectData
    >,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721MetadataABI,
    ...config,
  } as UseContractReadConfig<
    typeof ierc721MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useIerc721MetadataBalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof ierc721MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721MetadataABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721MetadataABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"getApproved"`.
 */
export function useIerc721MetadataGetApproved<
  TFunctionName extends 'getApproved',
  TSelectData = ReadContractResult<typeof ierc721MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721MetadataABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721MetadataABI,
    functionName: 'getApproved',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"isApprovedForAll"`.
 */
export function useIerc721MetadataIsApprovedForAll<
  TFunctionName extends 'isApprovedForAll',
  TSelectData = ReadContractResult<typeof ierc721MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721MetadataABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721MetadataABI,
    functionName: 'isApprovedForAll',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"name"`.
 */
export function useIerc721MetadataName<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof ierc721MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721MetadataABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721MetadataABI,
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"ownerOf"`.
 */
export function useIerc721MetadataOwnerOf<
  TFunctionName extends 'ownerOf',
  TSelectData = ReadContractResult<typeof ierc721MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721MetadataABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721MetadataABI,
    functionName: 'ownerOf',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useIerc721MetadataSupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof ierc721MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721MetadataABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721MetadataABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"symbol"`.
 */
export function useIerc721MetadataSymbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof ierc721MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721MetadataABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721MetadataABI,
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"tokenURI"`.
 */
export function useIerc721MetadataTokenUri<
  TFunctionName extends 'tokenURI',
  TSelectData = ReadContractResult<typeof ierc721MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc721MetadataABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc721MetadataABI,
    functionName: 'tokenURI',
    ...config,
  } as UseContractReadConfig<
    typeof ierc721MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__.
 */
export function useIerc721MetadataWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721MetadataABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<
        typeof ierc721MetadataABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof ierc721MetadataABI, TFunctionName, TMode>({
    abi: ierc721MetadataABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"approve"`.
 */
export function useIerc721MetadataApprove<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721MetadataABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof ierc721MetadataABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof ierc721MetadataABI, 'approve', TMode>({
    abi: ierc721MetadataABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function useIerc721MetadataSafeTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721MetadataABI,
          'safeTransferFrom'
        >['request']['abi'],
        'safeTransferFrom',
        TMode
      > & { functionName?: 'safeTransferFrom' }
    : UseContractWriteConfig<
        typeof ierc721MetadataABI,
        'safeTransferFrom',
        TMode
      > & {
        abi?: never
        functionName?: 'safeTransferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof ierc721MetadataABI, 'safeTransferFrom', TMode>(
    {
      abi: ierc721MetadataABI,
      functionName: 'safeTransferFrom',
      ...config,
    } as any,
  )
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function useIerc721MetadataSetApprovalForAll<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721MetadataABI,
          'setApprovalForAll'
        >['request']['abi'],
        'setApprovalForAll',
        TMode
      > & { functionName?: 'setApprovalForAll' }
    : UseContractWriteConfig<
        typeof ierc721MetadataABI,
        'setApprovalForAll',
        TMode
      > & {
        abi?: never
        functionName?: 'setApprovalForAll'
      } = {} as any,
) {
  return useContractWrite<
    typeof ierc721MetadataABI,
    'setApprovalForAll',
    TMode
  >({
    abi: ierc721MetadataABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useIerc721MetadataTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721MetadataABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<
        typeof ierc721MetadataABI,
        'transferFrom',
        TMode
      > & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof ierc721MetadataABI, 'transferFrom', TMode>({
    abi: ierc721MetadataABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__.
 */
export function usePrepareIerc721MetadataWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc721MetadataABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721MetadataABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc721MetadataABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareIerc721MetadataApprove(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc721MetadataABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721MetadataABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc721MetadataABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function usePrepareIerc721MetadataSafeTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof ierc721MetadataABI,
      'safeTransferFrom'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721MetadataABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof ierc721MetadataABI,
    'safeTransferFrom'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function usePrepareIerc721MetadataSetApprovalForAll(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof ierc721MetadataABI,
      'setApprovalForAll'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721MetadataABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof ierc721MetadataABI,
    'setApprovalForAll'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721MetadataABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareIerc721MetadataTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc721MetadataABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721MetadataABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc721MetadataABI, 'transferFrom'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721MetadataABI}__.
 */
export function useIerc721MetadataEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof ierc721MetadataABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc721MetadataABI,
    ...config,
  } as UseContractEventConfig<typeof ierc721MetadataABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721MetadataABI}__ and `eventName` set to `"Approval"`.
 */
export function useIerc721MetadataApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc721MetadataABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc721MetadataABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof ierc721MetadataABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721MetadataABI}__ and `eventName` set to `"ApprovalForAll"`.
 */
export function useIerc721MetadataApprovalForAllEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc721MetadataABI, 'ApprovalForAll'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc721MetadataABI,
    eventName: 'ApprovalForAll',
    ...config,
  } as UseContractEventConfig<typeof ierc721MetadataABI, 'ApprovalForAll'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc721MetadataABI}__ and `eventName` set to `"Transfer"`.
 */
export function useIerc721MetadataTransferEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc721MetadataABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc721MetadataABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof ierc721MetadataABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721ReceiverABI}__.
 */
export function useIerc721ReceiverWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721ReceiverABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<
        typeof ierc721ReceiverABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof ierc721ReceiverABI, TFunctionName, TMode>({
    abi: ierc721ReceiverABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc721ReceiverABI}__ and `functionName` set to `"onERC721Received"`.
 */
export function useIerc721ReceiverOnErc721Received<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc721ReceiverABI,
          'onERC721Received'
        >['request']['abi'],
        'onERC721Received',
        TMode
      > & { functionName?: 'onERC721Received' }
    : UseContractWriteConfig<
        typeof ierc721ReceiverABI,
        'onERC721Received',
        TMode
      > & {
        abi?: never
        functionName?: 'onERC721Received'
      } = {} as any,
) {
  return useContractWrite<typeof ierc721ReceiverABI, 'onERC721Received', TMode>(
    {
      abi: ierc721ReceiverABI,
      functionName: 'onERC721Received',
      ...config,
    } as any,
  )
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721ReceiverABI}__.
 */
export function usePrepareIerc721ReceiverWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc721ReceiverABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721ReceiverABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc721ReceiverABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc721ReceiverABI}__ and `functionName` set to `"onERC721Received"`.
 */
export function usePrepareIerc721ReceiverOnErc721Received(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof ierc721ReceiverABI,
      'onERC721Received'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc721ReceiverABI,
    functionName: 'onERC721Received',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof ierc721ReceiverABI,
    'onERC721Received'
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link invoiceABI}__.
 */
export function useInvoiceRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof invoiceABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof invoiceABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: invoiceABI,
    ...config,
  } as UseContractReadConfig<typeof invoiceABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link invoiceABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useInvoiceBalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof invoiceABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof invoiceABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: invoiceABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<typeof invoiceABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link invoiceABI}__ and `functionName` set to `"getApproved"`.
 */
export function useInvoiceGetApproved<
  TFunctionName extends 'getApproved',
  TSelectData = ReadContractResult<typeof invoiceABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof invoiceABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: invoiceABI,
    functionName: 'getApproved',
    ...config,
  } as UseContractReadConfig<typeof invoiceABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link invoiceABI}__ and `functionName` set to `"isApprovedForAll"`.
 */
export function useInvoiceIsApprovedForAll<
  TFunctionName extends 'isApprovedForAll',
  TSelectData = ReadContractResult<typeof invoiceABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof invoiceABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: invoiceABI,
    functionName: 'isApprovedForAll',
    ...config,
  } as UseContractReadConfig<typeof invoiceABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link invoiceABI}__ and `functionName` set to `"name"`.
 */
export function useInvoiceName<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof invoiceABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof invoiceABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: invoiceABI,
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<typeof invoiceABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link invoiceABI}__ and `functionName` set to `"ownerOf"`.
 */
export function useInvoiceOwnerOf<
  TFunctionName extends 'ownerOf',
  TSelectData = ReadContractResult<typeof invoiceABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof invoiceABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: invoiceABI,
    functionName: 'ownerOf',
    ...config,
  } as UseContractReadConfig<typeof invoiceABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link invoiceABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useInvoiceSupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof invoiceABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof invoiceABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: invoiceABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<typeof invoiceABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link invoiceABI}__ and `functionName` set to `"symbol"`.
 */
export function useInvoiceSymbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof invoiceABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof invoiceABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: invoiceABI,
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<typeof invoiceABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link invoiceABI}__ and `functionName` set to `"tokenByIndex"`.
 */
export function useInvoiceTokenByIndex<
  TFunctionName extends 'tokenByIndex',
  TSelectData = ReadContractResult<typeof invoiceABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof invoiceABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: invoiceABI,
    functionName: 'tokenByIndex',
    ...config,
  } as UseContractReadConfig<typeof invoiceABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link invoiceABI}__ and `functionName` set to `"tokenOfOwnerByIndex"`.
 */
export function useInvoiceTokenOfOwnerByIndex<
  TFunctionName extends 'tokenOfOwnerByIndex',
  TSelectData = ReadContractResult<typeof invoiceABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof invoiceABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: invoiceABI,
    functionName: 'tokenOfOwnerByIndex',
    ...config,
  } as UseContractReadConfig<typeof invoiceABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link invoiceABI}__ and `functionName` set to `"tokenURI"`.
 */
export function useInvoiceTokenUri<
  TFunctionName extends 'tokenURI',
  TSelectData = ReadContractResult<typeof invoiceABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof invoiceABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: invoiceABI,
    functionName: 'tokenURI',
    ...config,
  } as UseContractReadConfig<typeof invoiceABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link invoiceABI}__ and `functionName` set to `"totalSupply"`.
 */
export function useInvoiceTotalSupply<
  TFunctionName extends 'totalSupply',
  TSelectData = ReadContractResult<typeof invoiceABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof invoiceABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: invoiceABI,
    functionName: 'totalSupply',
    ...config,
  } as UseContractReadConfig<typeof invoiceABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link invoiceABI}__.
 */
export function useInvoiceWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof invoiceABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof invoiceABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof invoiceABI, TFunctionName, TMode>({
    abi: invoiceABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link invoiceABI}__ and `functionName` set to `"approve"`.
 */
export function useInvoiceApprove<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof invoiceABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof invoiceABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof invoiceABI, 'approve', TMode>({
    abi: invoiceABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link invoiceABI}__ and `functionName` set to `"burn"`.
 */
export function useInvoiceBurn<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof invoiceABI, 'burn'>['request']['abi'],
        'burn',
        TMode
      > & { functionName?: 'burn' }
    : UseContractWriteConfig<typeof invoiceABI, 'burn', TMode> & {
        abi?: never
        functionName?: 'burn'
      } = {} as any,
) {
  return useContractWrite<typeof invoiceABI, 'burn', TMode>({
    abi: invoiceABI,
    functionName: 'burn',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link invoiceABI}__ and `functionName` set to `"newInvoice"`.
 */
export function useInvoiceNewInvoice<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof invoiceABI,
          'newInvoice'
        >['request']['abi'],
        'newInvoice',
        TMode
      > & { functionName?: 'newInvoice' }
    : UseContractWriteConfig<typeof invoiceABI, 'newInvoice', TMode> & {
        abi?: never
        functionName?: 'newInvoice'
      } = {} as any,
) {
  return useContractWrite<typeof invoiceABI, 'newInvoice', TMode>({
    abi: invoiceABI,
    functionName: 'newInvoice',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link invoiceABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function useInvoiceSafeTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof invoiceABI,
          'safeTransferFrom'
        >['request']['abi'],
        'safeTransferFrom',
        TMode
      > & { functionName?: 'safeTransferFrom' }
    : UseContractWriteConfig<typeof invoiceABI, 'safeTransferFrom', TMode> & {
        abi?: never
        functionName?: 'safeTransferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof invoiceABI, 'safeTransferFrom', TMode>({
    abi: invoiceABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link invoiceABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function useInvoiceSetApprovalForAll<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof invoiceABI,
          'setApprovalForAll'
        >['request']['abi'],
        'setApprovalForAll',
        TMode
      > & { functionName?: 'setApprovalForAll' }
    : UseContractWriteConfig<typeof invoiceABI, 'setApprovalForAll', TMode> & {
        abi?: never
        functionName?: 'setApprovalForAll'
      } = {} as any,
) {
  return useContractWrite<typeof invoiceABI, 'setApprovalForAll', TMode>({
    abi: invoiceABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link invoiceABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useInvoiceTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof invoiceABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<typeof invoiceABI, 'transferFrom', TMode> & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof invoiceABI, 'transferFrom', TMode>({
    abi: invoiceABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link invoiceABI}__.
 */
export function usePrepareInvoiceWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof invoiceABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: invoiceABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof invoiceABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link invoiceABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareInvoiceApprove(
  config: Omit<
    UsePrepareContractWriteConfig<typeof invoiceABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: invoiceABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof invoiceABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link invoiceABI}__ and `functionName` set to `"burn"`.
 */
export function usePrepareInvoiceBurn(
  config: Omit<
    UsePrepareContractWriteConfig<typeof invoiceABI, 'burn'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: invoiceABI,
    functionName: 'burn',
    ...config,
  } as UsePrepareContractWriteConfig<typeof invoiceABI, 'burn'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link invoiceABI}__ and `functionName` set to `"newInvoice"`.
 */
export function usePrepareInvoiceNewInvoice(
  config: Omit<
    UsePrepareContractWriteConfig<typeof invoiceABI, 'newInvoice'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: invoiceABI,
    functionName: 'newInvoice',
    ...config,
  } as UsePrepareContractWriteConfig<typeof invoiceABI, 'newInvoice'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link invoiceABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function usePrepareInvoiceSafeTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof invoiceABI, 'safeTransferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: invoiceABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof invoiceABI, 'safeTransferFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link invoiceABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function usePrepareInvoiceSetApprovalForAll(
  config: Omit<
    UsePrepareContractWriteConfig<typeof invoiceABI, 'setApprovalForAll'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: invoiceABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as UsePrepareContractWriteConfig<typeof invoiceABI, 'setApprovalForAll'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link invoiceABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareInvoiceTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof invoiceABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: invoiceABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof invoiceABI, 'transferFrom'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link invoiceABI}__.
 */
export function useInvoiceEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof invoiceABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: invoiceABI,
    ...config,
  } as UseContractEventConfig<typeof invoiceABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link invoiceABI}__ and `eventName` set to `"Approval"`.
 */
export function useInvoiceApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof invoiceABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: invoiceABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof invoiceABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link invoiceABI}__ and `eventName` set to `"ApprovalForAll"`.
 */
export function useInvoiceApprovalForAllEvent(
  config: Omit<
    UseContractEventConfig<typeof invoiceABI, 'ApprovalForAll'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: invoiceABI,
    eventName: 'ApprovalForAll',
    ...config,
  } as UseContractEventConfig<typeof invoiceABI, 'ApprovalForAll'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link invoiceABI}__ and `eventName` set to `"BatchMetadataUpdate"`.
 */
export function useInvoiceBatchMetadataUpdateEvent(
  config: Omit<
    UseContractEventConfig<typeof invoiceABI, 'BatchMetadataUpdate'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: invoiceABI,
    eventName: 'BatchMetadataUpdate',
    ...config,
  } as UseContractEventConfig<typeof invoiceABI, 'BatchMetadataUpdate'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link invoiceABI}__ and `eventName` set to `"MetadataUpdate"`.
 */
export function useInvoiceMetadataUpdateEvent(
  config: Omit<
    UseContractEventConfig<typeof invoiceABI, 'MetadataUpdate'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: invoiceABI,
    eventName: 'MetadataUpdate',
    ...config,
  } as UseContractEventConfig<typeof invoiceABI, 'MetadataUpdate'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link invoiceABI}__ and `eventName` set to `"Transfer"`.
 */
export function useInvoiceTransferEvent(
  config: Omit<
    UseContractEventConfig<typeof invoiceABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: invoiceABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof invoiceABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ownableABI}__.
 */
export function useOwnableRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof ownableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ownableABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: ownableABI,
    ...config,
  } as UseContractReadConfig<typeof ownableABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ownableABI}__ and `functionName` set to `"owner"`.
 */
export function useOwnableOwner<
  TFunctionName extends 'owner',
  TSelectData = ReadContractResult<typeof ownableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ownableABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ownableABI,
    functionName: 'owner',
    ...config,
  } as UseContractReadConfig<typeof ownableABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ownableABI}__.
 */
export function useOwnableWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof ownableABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof ownableABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof ownableABI, TFunctionName, TMode>({
    abi: ownableABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ownableABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function useOwnableRenounceOwnership<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ownableABI,
          'renounceOwnership'
        >['request']['abi'],
        'renounceOwnership',
        TMode
      > & { functionName?: 'renounceOwnership' }
    : UseContractWriteConfig<typeof ownableABI, 'renounceOwnership', TMode> & {
        abi?: never
        functionName?: 'renounceOwnership'
      } = {} as any,
) {
  return useContractWrite<typeof ownableABI, 'renounceOwnership', TMode>({
    abi: ownableABI,
    functionName: 'renounceOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ownableABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function useOwnableTransferOwnership<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ownableABI,
          'transferOwnership'
        >['request']['abi'],
        'transferOwnership',
        TMode
      > & { functionName?: 'transferOwnership' }
    : UseContractWriteConfig<typeof ownableABI, 'transferOwnership', TMode> & {
        abi?: never
        functionName?: 'transferOwnership'
      } = {} as any,
) {
  return useContractWrite<typeof ownableABI, 'transferOwnership', TMode>({
    abi: ownableABI,
    functionName: 'transferOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ownableABI}__.
 */
export function usePrepareOwnableWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ownableABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ownableABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof ownableABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ownableABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function usePrepareOwnableRenounceOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ownableABI, 'renounceOwnership'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ownableABI,
    functionName: 'renounceOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ownableABI, 'renounceOwnership'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ownableABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function usePrepareOwnableTransferOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ownableABI, 'transferOwnership'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ownableABI,
    functionName: 'transferOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ownableABI, 'transferOwnership'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ownableABI}__.
 */
export function useOwnableEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof ownableABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: ownableABI,
    ...config,
  } as UseContractEventConfig<typeof ownableABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ownableABI}__ and `eventName` set to `"OwnershipTransferred"`.
 */
export function useOwnableOwnershipTransferredEvent(
  config: Omit<
    UseContractEventConfig<typeof ownableABI, 'OwnershipTransferred'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ownableABI,
    eventName: 'OwnershipTransferred',
    ...config,
  } as UseContractEventConfig<typeof ownableABI, 'OwnershipTransferred'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link testABI}__.
 */
export function useTestRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof testABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof testABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({ abi: testABI, ...config } as UseContractReadConfig<
    typeof testABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link testABI}__ and `functionName` set to `"IS_TEST"`.
 */
export function useTestIsTest<
  TFunctionName extends 'IS_TEST',
  TSelectData = ReadContractResult<typeof testABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof testABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: testABI,
    functionName: 'IS_TEST',
    ...config,
  } as UseContractReadConfig<typeof testABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link testABI}__.
 */
export function useTestWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof testABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof testABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof testABI, TFunctionName, TMode>({
    abi: testABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link testABI}__ and `functionName` set to `"failed"`.
 */
export function useTestFailed<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof testABI, 'failed'>['request']['abi'],
        'failed',
        TMode
      > & { functionName?: 'failed' }
    : UseContractWriteConfig<typeof testABI, 'failed', TMode> & {
        abi?: never
        functionName?: 'failed'
      } = {} as any,
) {
  return useContractWrite<typeof testABI, 'failed', TMode>({
    abi: testABI,
    functionName: 'failed',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link testABI}__.
 */
export function usePrepareTestWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof testABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: testABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof testABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link testABI}__ and `functionName` set to `"failed"`.
 */
export function usePrepareTestFailed(
  config: Omit<
    UsePrepareContractWriteConfig<typeof testABI, 'failed'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: testABI,
    functionName: 'failed',
    ...config,
  } as UsePrepareContractWriteConfig<typeof testABI, 'failed'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__.
 */
export function useTestEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof testABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({ abi: testABI, ...config } as UseContractEventConfig<
    typeof testABI,
    TEventName
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log"`.
 */
export function useTestLogEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_address"`.
 */
export function useTestLogAddressEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_address'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_address',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_address'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_array"`.
 */
export function useTestLogArrayEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_array'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_array',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_array'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_bytes"`.
 */
export function useTestLogBytesEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_bytes'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_bytes',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_bytes'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_bytes32"`.
 */
export function useTestLogBytes32Event(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_bytes32'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_bytes32',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_bytes32'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_int"`.
 */
export function useTestLogIntEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_int'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_int',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_int'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_named_address"`.
 */
export function useTestLogNamedAddressEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_named_address'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_named_address',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_named_address'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_named_array"`.
 */
export function useTestLogNamedArrayEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_named_array'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_named_array',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_named_array'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_named_bytes"`.
 */
export function useTestLogNamedBytesEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_named_bytes'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_named_bytes',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_named_bytes'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_named_bytes32"`.
 */
export function useTestLogNamedBytes32Event(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_named_bytes32'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_named_bytes32',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_named_bytes32'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_named_decimal_int"`.
 */
export function useTestLogNamedDecimalIntEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_named_decimal_int'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_named_decimal_int',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_named_decimal_int'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_named_decimal_uint"`.
 */
export function useTestLogNamedDecimalUintEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_named_decimal_uint'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_named_decimal_uint',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_named_decimal_uint'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_named_int"`.
 */
export function useTestLogNamedIntEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_named_int'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_named_int',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_named_int'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_named_string"`.
 */
export function useTestLogNamedStringEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_named_string'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_named_string',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_named_string'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_named_uint"`.
 */
export function useTestLogNamedUintEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_named_uint'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_named_uint',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_named_uint'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_string"`.
 */
export function useTestLogStringEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_string'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_string',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_string'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_uint"`.
 */
export function useTestLogUintEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_uint'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_uint',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_uint'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"logs"`.
 */
export function useTestLogsEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'logs'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'logs',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'logs'>)
}
