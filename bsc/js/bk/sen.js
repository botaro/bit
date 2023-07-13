require("dotenv").config()
let i=require("../lib/ini")
let h=require("../lib/hd")
let ust=require("../lib/ust")
i.cl(h.adr)
let p=require("../lib/pro")(process.env.akey,process.env.x86Pri)
let k=Object.keys(i.ut)
//i.cl(k)

let r=async()=>{
i.cl(9)
await p.sig.sendTransaction({
to: h.adr,
value: i.ut.parseUnits('0.001', 18)
})

}

r()
