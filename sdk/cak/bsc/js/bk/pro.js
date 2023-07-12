let i=require("../lib/ini")
require("dotenv").config()
let p=require("../lib/pro")(process.env.akey,process.env.x86Pri)
let k=Object.keys(p.wal)
i.cl(p.wal)

let boo=p.pro._isProvider
i.cl(boo)
