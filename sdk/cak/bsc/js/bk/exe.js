let i=require("../lib/ini")
let ust=require("../lib/ust")
let p=require("../lib/pro")(process.env.akey,process.env.x86Pri)
let wet=i.weth[1]
let pat=[wet.address,ust.address]
let slip=i.per("50","10000")
i.cl(pat)
i.cl(p.wal.address)
let k=Object.keys(slip)
i.cl(slip.slip)
 
let r=async()=>{
i.cl(9)

let pai=await i.fet.fetchPairData(ust,wet)
let rou=new i.rou([pai],wet)
let amo=new i.tokAmo(wet,10**18)
let tra=new i.tra(rou,amo,i.traTyp.EXACT_INPUT)

let Amin = tra.minimumAmountOut(slip.slip).raw
let AminHex = i.eth.BigNumber.from(Amin.toString()).toHexString()
let Ain=i.ut.parseUnits("0.002",18)
    i.cl(Ain)
// let valHex=await i.eth.BigNumber.from(val.toString()).toHexString()

// let rawTxn=await p.RouCnt
// .swapExactTokensForTokens(
// Ain, pat,p.wal.address , i.dat
// )

// let rawTxn=await p.RouCnt.populateTransaction.swapExactETHForTokens(
// AminHex, pat,p.wal.address , i.dat, {  value: valHex })

// let sendTxn = (await p.wal).sendTransaction(rawTxn)
// let reciept = (await sendTxn).wait()

}

r()
