let i=require("../lib/ini")
let h=require("../lib/hd")
require("dotenv").config()
let p=require("../lib/pro")(process.env.akey,process.env.x86Pri)

let r=async()=>{
i.cl(9)
let uBal=await p.busdCon.balanceOf(h.adr)
let uFor=i.ut.formatUnits(uBal)
i.cl(uBal)
i.cl("busd: "+uFor)

}

r()
