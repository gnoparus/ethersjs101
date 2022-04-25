require('dotenv').config()
const { ethers } = require('ethers');

async function main() {

    const rpcUrl = process.env.RPC_URL;
    const provider = new ethers.providers.JsonRpcProvider(rpcUrl);

    const account_address = process.env.ACC5_ADDRESS;
    const wwcoin_address = process.env.WWCOIN_ADDRESS;

    const ERC20_ABI = [
        "function name() view returns (string)",
        "function symbol() view returns (string)",
        "function totalSupply() view returns (uint256)",
        "function balanceOf(address) view returns (uint)",
    ]

    contract = new ethers.Contract(wwcoin_address, ERC20_ABI, provider)

    var name = await contract.name();
    console.log("name ", name);

    var symbol = await contract.symbol();
    console.log("symbol ", symbol);

    var totalSupply = await contract.totalSupply();
    console.log("totalSupply ", ethers.utils.formatEther(totalSupply));

    var balance = await contract.balanceOf(account_address);
    console.log("balance ", ethers.utils.formatEther(balance));


    console.log("hello")


}

main()