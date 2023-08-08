export const TokenAbi = [
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
         "internalType": "address",
         "name": "_routerAddress",
         "type": "address"
       }
     ],
     "stateMutability": "nonpayable",
     "type": "constructor"
   },
   {
     "anonymous": false,
     "inputs": [
       {
         "indexed": true,
         "internalType": "address",
         "name": "owner",
         "type": "address"
       },
       {
         "indexed": true,
         "internalType": "address",
         "name": "spender",
         "type": "address"
       },
       {
         "indexed": false,
         "internalType": "uint256",
         "name": "value",
         "type": "uint256"
       }
     ],
     "name": "Approval",
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
         "name": "from",
         "type": "address"
       },
       {
         "indexed": true,
         "internalType": "address",
         "name": "to",
         "type": "address"
       },
       {
         "indexed": false,
         "internalType": "uint256",
         "name": "value",
         "type": "uint256"
       }
     ],
     "name": "Transfer",
     "type": "event"
   },
   {
     "inputs": [],
     "name": "TAX_DIVISOR",
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
     "name": "_feesRates",
     "outputs": [
       {
         "internalType": "uint16",
         "name": "buyFee",
         "type": "uint16"
       },
       {
         "internalType": "uint16",
         "name": "sellFee",
         "type": "uint16"
       },
       {
         "internalType": "uint16",
         "name": "transferFee",
         "type": "uint16"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "address",
         "name": "",
         "type": "address"
       }
     ],
     "name": "_holderLastTransferTimestamp",
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
         "name": "",
         "type": "address"
       }
     ],
     "name": "_isExcludedFromFee",
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
     "inputs": [
       {
         "internalType": "address",
         "name": "owner",
         "type": "address"
       },
       {
         "internalType": "address",
         "name": "spender",
         "type": "address"
       }
     ],
     "name": "allowance",
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
         "name": "spender",
         "type": "address"
       },
       {
         "internalType": "uint256",
         "name": "amount",
         "type": "uint256"
       }
     ],
     "name": "approve",
     "outputs": [
       {
         "internalType": "bool",
         "name": "",
         "type": "bool"
       }
     ],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "uint256",
         "name": "tokenAmount",
         "type": "uint256"
       }
     ],
     "name": "autoLiquidity",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "autoLiquidityPercent",
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
         "name": "",
         "type": "address"
       }
     ],
     "name": "automatedMarketMakerPairs",
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
     "inputs": [
       {
         "internalType": "address",
         "name": "account",
         "type": "address"
       }
     ],
     "name": "balanceOf",
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
         "internalType": "uint256",
         "name": "amount",
         "type": "uint256"
       }
     ],
     "name": "burn",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "address",
         "name": "account",
         "type": "address"
       },
       {
         "internalType": "uint256",
         "name": "amount",
         "type": "uint256"
       }
     ],
     "name": "burnFrom",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "buyBackPercent",
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
     "name": "buyBackThreshold",
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
     "inputs": [],
     "name": "decimals",
     "outputs": [
       {
         "internalType": "uint8",
         "name": "",
         "type": "uint8"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "address",
         "name": "spender",
         "type": "address"
       },
       {
         "internalType": "uint256",
         "name": "subtractedValue",
         "type": "uint256"
       }
     ],
     "name": "decreaseAllowance",
     "outputs": [
       {
         "internalType": "bool",
         "name": "",
         "type": "bool"
       }
     ],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "address",
         "name": "account",
         "type": "address"
       },
       {
         "internalType": "bool",
         "name": "val",
         "type": "bool"
       }
     ],
     "name": "excludeFromFee",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "gasLimitActive",
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
     "name": "inSwap",
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
     "inputs": [
       {
         "internalType": "address",
         "name": "spender",
         "type": "address"
       },
       {
         "internalType": "uint256",
         "name": "addedValue",
         "type": "uint256"
       }
     ],
     "name": "increaseAllowance",
     "outputs": [
       {
         "internalType": "bool",
         "name": "",
         "type": "bool"
       }
     ],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "initialDelayTime",
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
         "name": "account",
         "type": "address"
       }
     ],
     "name": "isExcludedFromFee",
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
     "name": "lpPair",
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
     "name": "maxBuyLimit",
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
     "name": "maxGasPriceLimit",
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
     "name": "maxTransactionAmount",
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
     "name": "maxWalletAmount",
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
     "name": "name",
     "outputs": [
       {
         "internalType": "string",
         "name": "",
         "type": "string"
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
         "internalType": "uint16",
         "name": "newPercent",
         "type": "uint16"
       }
     ],
     "name": "setAutoLiquidityPercent",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "uint16",
         "name": "newPercent",
         "type": "uint16"
       }
     ],
     "name": "setBuyBackPercent",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "uint256",
         "name": "newThreshold",
         "type": "uint256"
       }
     ],
     "name": "setBuyBackThreshold",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "address",
         "name": "pair",
         "type": "address"
       }
     ],
     "name": "setLpPair",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "uint256",
         "name": "percent",
         "type": "uint256"
       }
     ],
     "name": "setMaxTransactionAmount",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "uint256",
         "name": "percent",
         "type": "uint256"
       }
     ],
     "name": "setMaxWalletAmount",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "uint256",
         "name": "value",
         "type": "uint256"
       }
     ],
     "name": "setSwapThreshold",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "uint16",
         "name": "buyFee",
         "type": "uint16"
       },
       {
         "internalType": "uint16",
         "name": "sellFee",
         "type": "uint16"
       },
       {
         "internalType": "uint16",
         "name": "transferFee",
         "type": "uint16"
       }
     ],
     "name": "setTaxes",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "address",
         "name": "newAddress",
         "type": "address"
       }
     ],
     "name": "setW1Address",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "uint16",
         "name": "newPercent",
         "type": "uint16"
       }
     ],
     "name": "setW1AddressPercent",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [
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
     "name": "swapThreshold",
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
     "name": "symbol",
     "outputs": [
       {
         "internalType": "string",
         "name": "",
         "type": "string"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "timeDelayBetweenTx",
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
     "name": "totalDelayTime",
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
     "name": "totalSupply",
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
         "name": "to",
         "type": "address"
       },
       {
         "internalType": "uint256",
         "name": "amount",
         "type": "uint256"
       }
     ],
     "name": "transfer",
     "outputs": [
       {
         "internalType": "bool",
         "name": "",
         "type": "bool"
       }
     ],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "transferDelayEnabled",
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
     "inputs": [
       {
         "internalType": "address",
         "name": "from",
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
     "name": "transferFrom",
     "outputs": [
       {
         "internalType": "bool",
         "name": "",
         "type": "bool"
       }
     ],
     "stateMutability": "nonpayable",
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
     "inputs": [
       {
         "internalType": "bool",
         "name": "newVal",
         "type": "bool"
       }
     ],
     "name": "updateGasLimitActive",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "uint256",
         "name": "percent",
         "type": "uint256"
       }
     ],
     "name": "updateMaxBuyLimit",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "uint256",
         "name": "newValue",
         "type": "uint256"
       }
     ],
     "name": "updateMaxGasPriceLimit",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "bool",
         "name": "newVal",
         "type": "bool"
       }
     ],
     "name": "updateTransferDelayEnabled",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "w1Address",
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
     "name": "w1AddressPercent",
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
     "stateMutability": "payable",
     "type": "receive"
   }
 ];