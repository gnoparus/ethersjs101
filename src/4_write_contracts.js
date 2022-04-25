require('dotenv').config()
const { ethers } = require('ethers');

async function main() {

    const rpcUrl = process.env.RPC_URL;
    const provider = new ethers.providers.JsonRpcProvider(rpcUrl);

    const from_account_address = process.env.ACC5_ADDRESS;
    const from_account_privatekey = process.env.ACC5_PRIVATEKEY;
    const to_account_address = process.env.ACC6_ADDRESS;
    const wwcoin_address = process.env.WWCOIN_ADDRESS;

    const wallet = new ethers.Wallet(from_account_privatekey, provider);

    const ERC20_ABI = [
        "function balanceOf(address) view returns (uint)",
        "function transfer(address to , uint amount) returns (bool)",
    ]
    const contract = new ethers.Contract(wwcoin_address, ERC20_ABI, provider)


    const connected_contract = contract.connect(wallet)

    tx = await connected_contract.transfer(
        to_account_address,
        ethers.utils.parseEther("0.0014"),
    )

    await tx.wait()
    console.log("tx ", tx)

    console.log("hello")


}

main()