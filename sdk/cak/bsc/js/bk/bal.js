require("dotenv").config()
let i=require("../lib/ini")
let h=require("../lib/hd")
let ust=require("../lib/ust")
i.cl(ust)
let p=require("../lib/pro")(process.env.akey,process.env.x86Pri)
//let sig=wal.connect(pro)
let k=Object.keys(p.RouCnt)

let r=async()=>{
i.cl(9)
let ethBal=await p.pro.getBalance(h.adr)
i.cl(ethBal)
    let bal=i.ut.formatEther(ethBal)
    i.cl(bal)
let wetBal=await p.wetCnt.balanceOf(h.adr)
let wbal=i.ut.formatEther(wetBal)
i.cl(wbal)
let ustBal=await p.ustCnt.balanceOf(h.adr)
let ubal=i.ut.formatEther(ustBal)
i.cl(ubal)

}

r()
