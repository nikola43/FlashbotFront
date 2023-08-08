export const TokenGeneratorAbi = [
   {
      "anonymous": false,
      "inputs": [
         {
            "indexed": false,
            "internalType": "uint8",
            "name": "version",
            "type": "uint8"
         }
      ],
      "name": "Initialized",
      "type": "event"
   },
   {
      "anonymous": false,
      "inputs": [
         {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
         },
         {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
         }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
   },
   {
      "anonymous": false,
      "inputs": [
         {
            "indexed": true,
            "internalType": "address",
            "name": "account",
            "type": "address"
         },
         {
            "indexed": false,
            "internalType": "address",
            "name": "_token",
            "type": "address"
         }
      ],
      "name": "TokenCreated",
      "type": "event"
   },
   {
      "inputs": [],
      "name": "availableChainlinkNet",
      "outputs": [
         {
            "internalType": "bool",
            "name": "",
            "type": "bool"
         }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "burnPct",
      "outputs": [
         {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
         }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "chainId",
      "outputs": [
         {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
         }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "address",
            "name": "tokenOwner",
            "type": "address"
         },
         {
            "internalType": "string",
            "name": "tokenName",
            "type": "string"
         },
         {
            "internalType": "string",
            "name": "tokenSymbol",
            "type": "string"
         },
         {
            "internalType": "uint256",
            "name": "supply",
            "type": "uint256"
         },
         {
            "internalType": "bool",
            "name": "autoSwap",
            "type": "bool"
         }
      ],
      "name": "createNewTokenWithNative",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "address",
            "name": "paymentTokenAddress",
            "type": "address"
         },
         {
            "internalType": "address",
            "name": "tokenOwner",
            "type": "address"
         },
         {
            "internalType": "string",
            "name": "tokenName",
            "type": "string"
         },
         {
            "internalType": "string",
            "name": "tokenSymbol",
            "type": "string"
         },
         {
            "internalType": "uint256",
            "name": "supply",
            "type": "uint256"
         }
      ],
      "name": "createNewTokenWithTokens",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "creationTokenPrice",
      "outputs": [
         {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
         }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "discountPct",
      "outputs": [
         {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
         }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "address",
            "name": "add1",
            "type": "address"
         },
         {
            "internalType": "address",
            "name": "add2",
            "type": "address"
         },
         {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
         }
      ],
      "name": "estimatedTokensForTokens",
      "outputs": [
         {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
         }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "freeCreationNumber",
      "outputs": [
         {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
         }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "address",
            "name": "tokenAddress",
            "type": "address"
         }
      ],
      "name": "getMinimunTokenAmount",
      "outputs": [
         {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
         }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "getNativeNetworkCurrencyPriceInUsd",
      "outputs": [
         {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
         }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "getNativeTokenAddress",
      "outputs": [
         {
            "internalType": "address",
            "name": "",
            "type": "address"
         }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "getRequiredEthAmount",
      "outputs": [
         {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
         }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "getStableCoinAddress",
      "outputs": [
         {
            "internalType": "address",
            "name": "",
            "type": "address"
         }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "address",
            "name": "account",
            "type": "address"
         }
      ],
      "name": "getUserCreatedTokens",
      "outputs": [
         {
            "internalType": "address[]",
            "name": "",
            "type": "address[]"
         }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "address",
            "name": "_tykheFortuneDistributorAddress",
            "type": "address"
         },
         {
            "internalType": "bool",
            "name": "_availableChainlinkNet",
            "type": "bool"
         },
         {
            "internalType": "address",
            "name": "_routerAddress",
            "type": "address"
         },
         {
            "internalType": "address",
            "name": "_nativeTokenOracle",
            "type": "address"
         },
         {
            "internalType": "address",
            "name": "_stableCoinAddress",
            "type": "address"
         }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "midasToken",
      "outputs": [
         {
            "internalType": "address",
            "name": "",
            "type": "address"
         }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "nativeTokenAddress",
      "outputs": [
         {
            "internalType": "address",
            "name": "",
            "type": "address"
         }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "owner",
      "outputs": [
         {
            "internalType": "address",
            "name": "",
            "type": "address"
         }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "routerAddress",
      "outputs": [
         {
            "internalType": "address",
            "name": "",
            "type": "address"
         }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "uint256",
            "name": "_burnPct",
            "type": "uint256"
         }
      ],
      "name": "setBurnPct",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "uint256",
            "name": "_discountPct",
            "type": "uint256"
         }
      ],
      "name": "setDiscountPct",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "uint256",
            "name": "_freeCreationNumber",
            "type": "uint256"
         }
      ],
      "name": "setFreeCreationNumber",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "address",
            "name": "_routerAddress",
            "type": "address"
         }
      ],
      "name": "setRouterAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "address",
            "name": "token",
            "type": "address"
         }
      ],
      "name": "setStableCoinAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "address",
            "name": "_midasToken",
            "type": "address"
         }
      ],
      "name": "setTokenAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "stableCoinAddress",
      "outputs": [
         {
            "internalType": "address",
            "name": "",
            "type": "address"
         }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "address",
            "name": "token",
            "type": "address"
         },
         {
            "internalType": "address",
            "name": "to",
            "type": "address"
         },
         {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
         }
      ],
      "name": "swapNativeForTokens",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "tokensCounter",
      "outputs": [
         {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
         }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
         }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "tykheFortuneDistributorAddress",
      "outputs": [
         {
            "internalType": "address",
            "name": "",
            "type": "address"
         }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "stateMutability": "payable",
      "type": "receive"
   }
]