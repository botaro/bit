let i=require("../lib/ini")
require("dotenv").config()
let p=require("../lib/pro")(process.env.akey,process.env.x86Pri)


let busd=async()=>await require("../tok/busd")

i.cl(busd() )
