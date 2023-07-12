let i=require("../lib/ini")
require("dotenv").config()
let p=require("../lib/pro")(process.env.akey,process.env.x86Pri)
let k=Object.keys(p.bethCon)
i.cl(k)
i.cl(p.bethCon.address)

let boo=p.pro._isProvider
i.cl(boo)
