let i=require("../lib/ini")
let ust=require("../lib/ust")
// require("dotenv").config()
// let p=require("../lib/pro")(process.env.akey,process.env.x86Pri)

let wet=i.weth[1]

let r=async()=>{
let pai=await i.fet.fetchPairData(ust,wet)
    let rou=new i.rou([pai],wet)
    let amo=new i.tokAmo(wet,10**18)
        let tra=new i.tra(rou,amo,i.traTyp.EXACT_INPUT)

let mid=rou.midPrice.toSignificant(6)
i.cl(mid*10**12)
let exe=tra.executionPrice.toSignificant(6)
i.cl(exe*10**12)
let nex=tra.nextMidPrice.toSignificant(6)
i.cl(nex*10**12)

}

r()
