A Simple NFT contract based on the ERC721 standard.

### Dependencies
- Truffle
- OpenZeppelin

### Install Dependencies
`npm install`

### Compile Contract
`truffle compile`


### Deploy Contract (Rinkeby testnet)

- Add a `.env` file with the following variable:
```
INFURA_ID=<your infura rinkeby project id>
MNEMONIC=<your metamask memonic phrase>
ETHERSCAN_API_KEY=<your etherscan project id>
```

- deploy contract 
`truffle migrate --network rinkeby`  (The deployment migration will also mint 3 puppies to the contract owner)

### Verify contract (Rinkeby testnet)
`truffle run verify CutePuppies --network rinkeby`