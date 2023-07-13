let i=require("../lib/ini")
let busd=require("../tok/busd")
let beth=require("../tok/beth")

let pai=i.pai.getAddress(busd,beth)
i.cl(pai)

// let r=async()=>{
// let pai=await i.pai.getAddress(ust,wet)
// i.cl(pai)

// }

// r()
