let h=require("./hd")
let i=require("./ini")

let crPro=(key,pri)=>{
// let a=key
// let b=pri
// let obj={a:a,b:b}

let pro= new i.eth.providers.AlchemyProvider('mainnet',key)
let wal=new i.eth.Wallet(pri,pro)
let RouCnt=new i.eth.Contract(h.RouAdr,i.RouAbi,pro)
let obj={pro:pro,wal:wal,RouCnt:RouCnt}

return obj

}

module.exports=crPro
