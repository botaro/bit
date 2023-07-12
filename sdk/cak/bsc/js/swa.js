let i=require("../lib/ini")
let h=require("../lib/hd")
require("dotenv").config()
let p=require("../lib/pro")(process.env.akey,process.env.x86Pri)
let k=Object.keys(p.busdCon)
i.cl(i.Ain)
i.cl(i.Ain.toString() )
i.cl(i.par)

let r=async()=>{
i.cl(9)

// await p.busdCon.connect(p.sig).approve(h.rouAdr, i.Ain.toString())
// i.cl('approved!')

// let tx = await p.rouCon.connect(p.sig)
// .exactInputSingle(i.par,{ gasLimit: i.ut.hexlify(10**6) }
// )
// await tx.wait()
// i.cl('tx!')

}

//node scripts/01_swap.js

r()
