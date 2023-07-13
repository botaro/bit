require("dotenv").config()
let i=require("../lib/ini")
let h=require("../lib/hd")
let ust=require("../lib/ust")
i.cl(ust.address)
let p=require("../lib/pro")(process.env.akey,process.env.x86Pri)
let wet=i.weth[1]
i.cl(wet.address)
let k=Object.keys(p.RouCnt)
i.cl(k)

let Ain = i.ut.parseUnits('0.001', 18)
let App= i.ut.parseUnits('0.02', 18)
let gasOpt={gasLimit: 10**6}
i.cl(i.dat)
//  'swapExactTokensForTokens(uint256,uint256,address[],address)',

let r=async()=>{
i.cl(9)
let tx1 = await p.wetCnt.connect(p.sig)
.approve(h.RouAdr, Ain)
await tx1.wait()
i.cl("approve")

let tx2 = await p.RouCnt.connect(p.sig)
.swapExactTokensForTokens(
Ain,0,[wet.address,ust.address],h.adr
)
await tx2.wait()

}

r()
