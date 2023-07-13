let i=require("../lib/ini")
require("dotenv").config()
let p=require("../lib/pro")(process.env.akey,process.env.x86Pri)

i.cl(9)
let k=Object.keys(p.rouCon)
i.cl(k)
