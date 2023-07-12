let rouAbi = require('../abi/panRou')

let adr="0x8636Cb15c6Ff70E3b2150535A51ea17C0f69a747"
let dat=Math.floor(Date.now()/1000)+60*20

let facAbi = require('../abi/panFac')
let facAdr = '0x0BFbCF9fa4f9C56B0F40a671Ad40E0805A091865'
let rouAdr = '0x13f4EA83D0bd40E75C8222255bc855a974568Dd4'

let busdAdr="0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"
let bnbAdr="0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
let bethAdr="0x250632378E573c6Be1AC2f97Fcdf00515d0Aa91B"
let uniAdr="0xBf5140A22578168FD562DCcF235E5D43A02ce9B1"

let ercAbi = require('../abi/erc')

module.exports={
    rouAdr:rouAdr,adr:adr,rouAbi:rouAbi,facAdr:facAdr,facAbi:facAbi,
    bethAdr:bethAdr,busdAdr:busdAdr,bnbAdr:bnbAdr,uniAdr:uniAdr,
    ercAbi:ercAbi
}
