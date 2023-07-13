let cl=console.log
let sdk= require("@pancakeswap/sdk")
require("dotenv").config()
let pe=process.env
let h=require("./hd")

let fs = require('fs');
let eth = require("ethers").ethers
let ut=eth.utils
let dat=Math.floor(Date.now()/1000)+60*20
let { ChainId,Token, WETH, Fetcher,Pair, Route, Trade, TokenAmount, TradeType, Percent} = sdk
let { getAddress } = require("ethers/lib/utils")
let slip= new Percent("50", "10000")

let ain=ut.parseUnits("0.1",18)

let par = {
tokenIn: h.bnbAdr,
tokenOut: h.busdAdr,
fee: '500',
recipient: h.adr,
deadline: dat,
amountIn:ain,
amountOutMinimum: 0,
sqrtPriceLimitX96: 0,
}
   
let obj={cl:cl,sdk:sdk,
tok:Token,weth:WETH,fet:Fetcher,pai:Pair,
rou:Route,tra:Trade,traTyp:TradeType,tokAmo:TokenAmount,
eth:eth,ut:ut,per:Percent,
cid:ChainId,dat:dat,slip:slip,
par:par,Ain:ain
}


module.exports=obj
