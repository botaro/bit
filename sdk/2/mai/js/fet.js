let i=require("../lib/ini")
let h=require("../lib/hd")
let cid=5
let dec=18
let busd=new i.tok(cid,h.busd,dec,"BUSD","busd")
i.cl(busd)

let k=Object.keys(i.sdk)
i.cl(k)
