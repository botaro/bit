let i=require("../lib/ini")
let h=require("../lib/hd")
require("dotenv").config()
let p=require("../lib/pro")(process.env.akey,process.env.x86Pri)
let k=Object.keys(p.rouCon)
i.cl(i.Ain)
i.cl(i.Ain.toString() )
i.cl(h.bnbAdr)
i.cl(h.busdAdr)
let ain=i.ut.parseUnits("10",18)

let r=async()=>{
i.cl(9)

await p.busdCon.connect(p.sig).approve(h.rouAdr, ain.toString())
i.cl('approved!')

let tx = await p.rouCon.connect(p.sig).swapExactTokensForTokens(
ain,0,
[h.busdAdr,h.bnbAdr],
h.adr,h.dat,
{ gasLimit: 10**6 }
)
await tx.wait()
i.cl("tx")

}

r()
