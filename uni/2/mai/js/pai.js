let i=require("../lib/ini")
let ust=require("../lib/ust")

let wet=i.weth[1]
i.cl(wet)
let k=Object.keys(i.pai)
i.cl(k)

let r=async()=>{
let pai=await i.pai.getAddress(ust,wet)
i.cl(pai)

}

r()
