let a=require("./abi")
let h=require("./hd")
let i=require("./ini")

let crPro=(key,pri)=>{

let url="https://bsc-dataseed1.binance.org/"
//let url= "https://data-seed-prebsc-1-s1.binance.org:8545/" // json RPC url
let pro= new i.eth.providers.JsonRpcProvider(url)
let wal=new i.eth.Wallet(pri,pro)
let rouCon=new i.eth.Contract(h.rouAdr,a.rouAbi,pro)
let sig=wal.connect(pro)
let bethCon=new i.eth.Contract(h.bethAdr,a.ercAbi,pro)
let busdCon=new i.eth.Contract(h.busdAdr,a.ercAbi,pro)
let bnbCon=new i.eth.Contract(h.bnbAdr,a.ercAbi,pro)
let uniCon=new i.eth.Contract(h.uniAdr,a.ercAbi,pro)

let obj={pro:pro,wal:wal,sig:sig,rouCon:rouCon,
bethCon:bethCon,busdCon:busdCon,bnbCon:bnbCon,
uniCon:uniCon

}

return obj

}

module.exports=crPro
