let cl=console.log
let h=require("./hd")
let fs = require('fs');
let sdk= require("@uniswap/sdk")
let eth = require("ethers").ethers
let RouAbi=require("../abi/rou")
let dat=Math.floor(Date.now()/1000)+60*20
let { ChainId,Token, WETH, Fetcher,Pair, Route, Trade, TokenAmount, TradeType, Percent} = sdk
let { getAddress } = require("ethers/lib/utils");

let obj={cl:cl,sdk:sdk,
tok:Token,weth:WETH,fet:Fetcher,pai:Pair,
rou:Route,tra:Trade,traTyp:TradeType,tokAmo:TokenAmount,
eth:eth,per:Percent,RouAbi:RouAbi,
cid:ChainId,dat:dat
}


module.exports=obj
