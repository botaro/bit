
let i=require("../lib/ini")
let ust=require("../lib/ust")
let wet=i.weth[1]
let k=Object.keys(i.traTyp)

let r=async()=>{
let pai=await i.fet.fetchPairData(ust,wet)
let rou=new i.rou([pai],wet)
let amo=new i.tokAmo(wet,10**12)
let tra=new i.tra(rou,amo,i.traTyp.EXACT_INPUT)
let slip=new i.per("50",10**5)
// let Amin=tra.minimumAmountOut(slip).raw
// let AminHex= i.eth.BigNumber.from(Amin.toString()).toHexString()
// let pat=[wet.address,ust]
//let val=tra.inputAmount.raw

// let valHex = await i.eth.BigNumber.from(val.toString()).toHexString()
// let rawTxn = await i.RouCnt.populateTransaction.swapExactETHForTokens(AminHex, pat, i.adr, i.dat,
// {value: valHex})
// let sndTxn = (await wal).sendTransaction(rawTxn)
// let rec= (await sndTxn).wait()

// let mid=rou.midPrice.toSignificant(6)
// i.cl(mid*10**12)
// let exe=tra.executionPrice.toSignificant(6)
// i.cl(exe*10**12)
// let nex=tra.nextMidPrice.toSignificant(6)
// i.cl(nex*10**12)

}

r()
