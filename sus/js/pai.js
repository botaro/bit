let i=require("../lib/ini")
let bnb=require("../tok/bnb")
let busd=require("../tok/busd")

let pai=i.pai.getAddress(bnb,busd)
i.cl(pai)

// let r=async()=>{
// let pai=await i.pai.getAddress(ust,wet)
// i.cl(pai)

// }

// r()
