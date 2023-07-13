let i=require("../lib/ini")
let ust=require("../lib/ust")

let wet=i.weth[1]
let k=Object.keys(i.pai)

let pai=i.pai.getAddress(ust,wet)

module.exports=pai
