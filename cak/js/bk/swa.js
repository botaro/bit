let i=require("../lib/ini")
let h=require("../lib/hd")

let Ain=i.ut.parseUnits("0.002",18)
let par = {
tokenIn: h.bethAdr,
tokenOut: h.usdcAdr,
fee: '500',
recipient: signerAdr,
deadline: i.dat
Ain,
amountOutMinimum: 0,
sqrtPriceLimitX96: 0,
}

let r=async()=>{

let poolAdr = await facCon.getPool(bethAdr, busdAdr, '500')
cl('poolAdr', poolAdr)

await bethCon.connect(i.sig).approve(h.rouAdr, Ain.toString())
cl('approved!')


// bethBalance = await bethCon.balanceOf(signerAdr)
// usdcBalance = await usdcCon.balanceOf(signerAdr)
// cl('================= BEFORE SWAP')
// cl('bethBalance:', hardhat.ethers.utils.formatUnits(bethBalance.toString(), 18))
// cl('usdcBalance:', hardhat.ethers.utils.formatUnits(usdcBalance.toString(), 6))

// let tx = await rouCon.connect(signer)
// .exactInputSingle(
// par,
// { gasLimit: hardhat.ethers.utils.hexlify(1000000) }
// );

// await tx.wait()

// bethBalance = await bethCon.balanceOf(signerAdr)
// usdcBalance = await usdcCon.balanceOf(signerAdr)
// cl('================= AFTER SWAP')
// cl('bethBalance:', hardhat.ethers.utils.formatUnits(bethBalance.toString(), 18))
// cl('usdcBalance:', hardhat.ethers.utils.formatUnits(usdcBalance.toString(), 6))

}

//node scripts/01_swap.js

r()
