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

    tx = await wallet.sendTransaction({
        to: to_account_address,
        value: ethers.utils.parseEther("0.0013"),
    })

    await tx.wait()
    console.log("tx ", tx)

    console.log("hello")


}

main()