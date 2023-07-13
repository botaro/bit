let i=require("../lib/ini")
let ust=require("../lib/ust")

let wet=i.weth[1]

let r=async()=>{
let pai=await i.fet.fetchPairData(ust,wet)
    let rou=new i.rou([pai],wet)
    let mid=rou.midPrice.toSignificant(6)
i.cl(mid*10**12)
}

r()
