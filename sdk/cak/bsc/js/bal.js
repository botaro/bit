let i=require("../lib/ini")
let h=require("../lib/hd")
require("dotenv").config()
let p=require("../lib/pro")(process.env.akey,process.env.x86Pri)
let Ain=i.ut.parseUnits("0.002",18)
let k=Object.keys(p.bethCon)

let r=async()=>{
i.cl(9)
let uBal=await p.busdCon.balanceOf(h.adr)
let uFor=i.ut.formatUnits(uBal)
i.cl(uBal)
i.cl(uFor)
let nBal=await p.uniCon.balanceOf(h.adr)
let nFor=i.ut.formatUnits(nBal)
i.cl(nBal)
i.cl(nFor)


}

//node scripts/01_swap.js

r()
