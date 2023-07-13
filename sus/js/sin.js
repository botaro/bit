let i=require("../lib/ini")
let h=require("../lib/hd")
require("dotenv").config()
let p=require("../lib/pro")(process.env.akey,process.env.x86Pri)
let k=Object.keys(p.rouCon)
i.cl(i.Ain)
i.cl(i.Ain.toString() )
i.cl(h.bnbAdr)
i.cl(h.busdAdr)
const gasP= i.ut.parseUnits('10', 'gwei');
const gas = {
  gasPrice: gasP,
  gasLimit: 300000
}
let mnt= i.ut.parseEther('0.01').toHexString()
let par = {
tokenIn: h.busdAdr,
tokenOut: h.bnbAdr,
fee: '2500',
recipient: h.adr,
deadline: h.dat,
amountIn:i.Ain,
amountOutMinimum: 0,
sqrtPriceLimitX96: 0,
}

let r=async()=>{
i.cl(9)

await p.busdCon.connect(p.sig).approve(h.rouAdr, i.Ain.toString())
i.cl('approved!')

// let tx = await p.rouCon.connect(p.sig)
// .exactInputSingle(
// par,{ gasLimit: i.ut.hexlify(10**6) }
// )
// await tx.wait()
// i.cl("tx")

}

r()
