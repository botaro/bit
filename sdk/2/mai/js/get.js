let i=require("../lib/ini")
let h=require("../lib/hd")
let ust=require("../lib/ust")

let r=async()=>{
let eth=await require("../lib/ethUst")
    //i.cl(eth)
    let pai=await i.fet.fetchPairData(ust,i.weth[1])
    //i.cl(pai)
let rou=new i.rou([pai],i.weth[1])
    let mid=rou.midPrice.toSignificant(6)
    i.cl(mid*10**12)
}

r()
