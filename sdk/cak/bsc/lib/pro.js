let h=require("./hd")
let i=require("./ini")

let crPro=(key,pri)=>{

let url="https://bsc-dataseed1.binance.org/"
//let url= "https://data-seed-prebsc-1-s1.binance.org:8545/" // json RPC url
let pro= new i.eth.providers.JsonRpcProvider(url)
let wal=new i.eth.Wallet(pri,pro)
let rouCon=new i.eth.Contract(h.rouAdr,h.rouAbi,pro)
let sig=wal.connect(pro)
let bethCon=new i.eth.Contract(h.bethAdr,h.ercAbi,pro)
let busdCon=new i.eth.Contract(h.busdAdr,h.ercAbi,pro)
let bnbCon=new i.eth.Contract(h.bnbAdr,h.ercAbi,pro)
let uniCon=new i.eth.Contract(h.uniAdr,h.ercAbi,pro)

let obj={pro:pro,wal:wal,sig:sig,rouCon:rouCon,
bethCon:bethCon,busdCon:busdCon,bnbCon:bnbCon,
uniCon:uniCon

}

return obj

}

module.exports=crPro
