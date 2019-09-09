let Web3 = require('web3');//0x0CdfE1a70597aAd9072185ABb8496D41d745AAa3
let EthereumTx = require('ethereumjs-tx').Transaction;
let web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/fe4581d2650846769e514c8182c717f9'));
module.exports = {EthereumTx,web3};