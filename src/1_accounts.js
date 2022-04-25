require('dotenv').config()
const { ethers } = require('ethers');

async function main() {

    const rpcUrl = process.env.RPC_URL;
    const provider = new ethers.providers.JsonRpcProvider(rpcUrl);

    const address = process.env.ACC5_ADDRESS;

    var balance = await provider.getBalance(address);

    console.log("balance ", ethers.utils.formatEther(balance));






    console.log("hello")


}

main()