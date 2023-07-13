let i=require("../lib/ini")
let h=require("../lib/hd")
let cid=i.cid.BSC
let dec=18
let busd=new i.tok(cid,h.busd,dec)

module.exports=busd
