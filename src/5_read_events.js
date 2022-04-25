require('dotenv').config()
const { ethers } = require('ethers');

async function main() {

    const rpcUrl = process.env.RPC_URL;
    const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
    const wwcoin_address = process.env.WWCOIN_ADDRESS;

    const ERC20_ABI = [
        "function balanceOf(address) view returns (uint)",
        "function transfer(address to , uint amount) returns (bool)",
        "event Transfer(address indexed from, address indexed to, uint amount)",
    ]
    const contract = new ethers.Contract(wwcoin_address, ERC20_ABI, provider)
    const latestBlock = await provider.getBlockNumber()
    const events = await contract.queryFilter("Transfer", 10564000)


    console.log(events)



    console.log("hello")


}

main()