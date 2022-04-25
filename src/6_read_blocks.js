require('dotenv').config()
const { ethers } = require('ethers');

async function main() {

    const rpcUrl = process.env.RPC_URL;
    const provider = new ethers.providers.JsonRpcProvider(rpcUrl);

    const blockNumber = await provider.getBlockNumber()
    console.log("blockNumber ", blockNumber)

    const block = await provider.getBlock(blockNumber)
    console.log("block ", block)

    const { transactions } = await provider.getBlockWithTransactions(blockNumber)
    console.log("transactions[0] ", transactions[0])



    console.log("hello")
}

main()