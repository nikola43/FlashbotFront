export const TokenGeneratorAbi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: '_soul',
        type: 'address',
      },
    ],
    name: 'BanishSoul',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint8',
        name: 'version',
        type: 'uint8',
      },
    ],
    name: 'Initialized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: '_profiler',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: '_soul',
        type: 'address',
      },
    ],
    name: 'RemoveProfile',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: '_soul',
        type: 'address',
      },
    ],
    name: 'RescueSoul',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: '_profiler',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: '_soul',
        type: 'address',
      },
    ],
    name: 'SetProfile',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: '_soul',
        type: 'address',
      },
    ],
    name: 'SummonSoul',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
    ],
    name: 'TokenCreated',
    type: 'event',
  },
  {
    stateMutability: 'payable',
    type: 'fallback',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_soulHolder',
        type: 'address',
      },
    ],
    name: 'banishSoul',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_bytes32',
        type: 'bytes32',
      },
    ],
    name: 'bytes32ToString',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'paymentTokenAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'tokenOwner',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'tokenName',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'tokenSymbol',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'supply',
        type: 'uint256',
      },
    ],
    name: 'createNewToken',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_soulHolder',
        type: 'address',
      },
    ],
    name: 'getSoul',
    outputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'fingerprint',
            type: 'bytes32',
          },
        ],
        internalType: 'struct Soul',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_soulHolder',
        type: 'address',
      },
    ],
    name: 'getSoulFirgerprint',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_soul',
        type: 'address',
      },
    ],
    name: 'hasSoul',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'tykheLuckyOracleAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'floraOracleAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'midasGoldKingAddress',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'midasGoldKing',
    outputs: [
      {
        internalType: 'contract IMidasGoldKing',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_soulHolder',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'fingerprint',
            type: 'bytes32',
          },
        ],
        internalType: 'struct Soul',
        name: '_soulData',
        type: 'tuple',
      },
    ],
    name: 'rescueSoul',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_soulHolder',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'fingerprint',
            type: 'bytes32',
          },
        ],
        internalType: 'struct Soul',
        name: '_soulData',
        type: 'tuple',
      },
    ],
    name: 'summonSoul',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'ticker',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
];
