const {EthereumTx,web3} = require('./helper/web3');
const sendSignedTransaction = require('./helper/signTransaction');
const abi = require('./helper/abi');

exports.sendbronze = function(req,res){
    const contractAddress = req.body.contractaddress;
    contractInstance = new web3.eth.Contract(abi, contractAddress);
	let ownerAddress = req.body.owner;
	let ownerPrivateKey = Buffer.from(req.body.ownerprivatekey,'hex');
    let spenderAddress = req.body.spender;
    let toAddress = req.body.to;
    let tokens = req.body.tokens;
	let spenderprivateKey = Buffer.from(req.body.spenderprivatekey,'hex');
    let data = contractInstance.methods.transferBronze(toAddress, tokens).encodeABI();
    sendSignedTransaction(data,ownerAddress,ownerPrivateKey,contractAddress).then(result => {
        res.send(result)
        console.log(result)
    })
    .catch(err => {
        console.log(err);
      });
}
exports.sendsilver = function(req,res){
    const contractAddress = req.body.contractaddress;
    contractInstance = new web3.eth.Contract(abi, contractAddress);
	let ownerAddress = req.body.owner;
	let ownerPrivateKey = Buffer.from(req.body.ownerprivatekey,'hex');
    let spenderAddress = req.body.spender;
    let toAddress = req.body.to;
    let tokens = req.body.tokens;
	let spenderprivateKey = Buffer.from(req.body.spenderprivatekey,'hex');
    let data = contractInstance.methods.transferSilver(toAddress, tokens).encodeABI();
    sendSignedTransaction(data,ownerAddress,ownerPrivateKey,contractAddress).then(result => {
        res.send(result)
        console.log(result)
    })
    .catch(err => {
        console.log(err);
      });
}
exports.approvebronze = function(req,res){
    const contractAddress = req.body.contractaddress;
    contractInstance = new web3.eth.Contract(abi, contractAddress);
	let ownerAddress = req.body.owner;
	let ownerPrivateKey = Buffer.from(req.body.ownerprivatekey,'hex');
    let spenderAddress = req.body.spender;
    let toAddress = req.body.to;
    let tokens = req.body.tokens;
	let spenderprivateKey = Buffer.from(req.body.spenderprivatekey,'hex');
try {
    let data = contractInstance.methods.approveBronze(spenderAddress, tokens).encodeABI();
    sendSignedTransaction(data,ownerAddress,ownerPrivateKey,contractAddress).then(result => {
        res.send(result)
        console.log(result)
    }).catch(err => {
        console.log(err);
      });
} catch(err) {
    console.log(err)
    res.send(err)
}    
}
exports.approvesilver = function(req,res){
    const contractAddress = req.body.contractaddress;
    contractInstance = new web3.eth.Contract(abi, contractAddress);
	let ownerAddress = req.body.owner;
	let ownerPrivateKey = Buffer.from(req.body.ownerprivatekey,'hex');
    let spenderAddress = req.body.spender;
    let toAddress = req.body.to;
    let tokens = req.body.tokens;
	let spenderprivateKey = Buffer.from(req.body.spenderprivatekey,'hex');
try {
    let data = contractInstance.methods.approveSilver(spenderAddress, tokens).encodeABI();
    sendSignedTransaction(data,ownerAddress,ownerPrivateKey,contractAddress).then(result => {
        res.send(result)
        console.log(result)
    }).catch(err => {
        console.log(err);
      });
} catch(err) {
    console.log(err)
    res.send(err)
}    
}

exports.approveandcallbronze = function (req,res) {
	const contractAddress = req.body.contractaddress;
    contractInstance = new web3.eth.Contract(abi, contractAddress);
	let ownerAddress = req.body.owner;
	let ownerPrivateKey = Buffer.from(req.body.ownerprivatekey,'hex');
    let spenderAddress = req.body.spender;
    let tokens = req.body.tokens;
	let spenderprivateKey = Buffer.from(req.body.spenderprivatekey,'hex');
try {
    let data = contractInstance.methods.approveAndCallBronze(spenderAddress,tokens).encodeABI();
    sendSignedTransaction(data,ownerAddress,ownerPrivateKey,contractAddress).then(result => {
        res.send(result)
        console.log(result)
    }).catch(err => {
        console.log(err);
      });
} catch(err) {
    console.log(err)
    res.send(err)
}    
}
exports.approveandcallsilver = function (req,res) {
	const contractAddress = req.body.contractaddress;
    contractInstance = new web3.eth.Contract(abi, contractAddress);
	let ownerAddress = req.body.owner;
	let ownerPrivateKey = Buffer.from(req.body.ownerprivatekey,'hex');
    let spenderAddress = req.body.spender;
    let tokens = req.body.tokens;
	let spenderprivateKey = Buffer.from(req.body.spenderprivatekey,'hex');
try {
    let data = contractInstance.methods.approveAndCallSilver(spenderAddress, tokens).encodeABI();
    sendSignedTransaction(data,ownerAddress,ownerPrivateKey,contractAddress).then(result => {
        res.send(result)
        console.log(result)
    }).catch(err => {
        console.log(err);
      });
} catch(err) {
    console.log(err)
    res.send(err)
}    
}




exports.transferfrombronze = function(req,res){
    let decimals;
    const contractAddress = req.body.contractaddress;
    contractInstance = new web3.eth.Contract(abi, contractAddress);
	let ownerAddress = req.body.owner;
	let ownerPrivateKey = Buffer.from(req.body.ownerprivatekey,'hex');
    let spenderAddress = req.body.spender;
    let toAddress = req.body.to;
    let tokens = req.body.tokens;
	let spenderPrivateKey = Buffer.from(req.body.spenderprivatekey,'hex');
try {
    let data = contractInstance.methods.transferFromBronze(ownerAddress,toAddress, tokens).encodeABI();
    sendSignedTransaction(data,spenderAddress,spenderPrivateKey,contractAddress).then(result => {
        res.send(result)
        console.log(result)
    }).catch(err => {
        console.log(err);
      });
} catch(err) {
    console.log(err)
    res.send(err)
}    
}
exports.transferfromsilver = function(req,res){
    let decimals;
    const contractAddress = req.body.contractaddress;
    contractInstance = new web3.eth.Contract(abi, contractAddress);
	let ownerAddress = req.body.owner;
	let ownerPrivateKey = Buffer.from(req.body.ownerprivatekey,'hex');
    let spenderAddress = req.body.spender;
    let toAddress = req.body.to;
    let tokens = req.body.tokens;
	let spenderPrivateKey = Buffer.from(req.body.spenderprivatekey,'hex');
try {
    let data = contractInstance.methods.transferFromSilver(ownerAddress,toAddress, tokens).encodeABI();
    sendSignedTransaction(data,spenderAddress,spenderPrivateKey,contractAddress).then(result => {
        res.send(result)
        console.log(result)
    }).catch(err => {
        console.log(err);
      });
} catch(err) {
    console.log(err)
    res.send(err)
}    
}
exports.allowancebronze = function(req,res){
    const contractAddress = req.body.contractaddress;
    contractInstance = new web3.eth.Contract(abi, contractAddress);
    let ownerAddress = req.body.owner;
    let spenderAddress = req.body.spender;
    let tokens = req.body.tokens;
    let data = contractInstance.methods.allowanceBronze(ownerAddress,spenderAddress).call().then(balance => {
    res.send("You've " + balance + " tokens left to send behalf of token owner address");
    console.log(balance)
    })  
}
exports.allowancesilver = function(req,res){
    const contractAddress = req.body.contractaddress;
    contractInstance = new web3.eth.Contract(abi, contractAddress);
    let ownerAddress = req.body.owner;
    let spenderAddress = req.body.spender;
    let tokens = req.body.tokens;
    let data = contractInstance.methods.allowanceSilver(ownerAddress,spenderAddress).call().then(balance => {
    res.send("You've " + balance + " tokens left to send behalf of token owner address");
    console.log(balance)
    })  
}

exports.getbalancebronze = function(req,res){
    const contractAddress = req.body.contractaddress;
    contractInstance = new web3.eth.Contract(abi, contractAddress);
    let ownerAddress = req.body.owner;
    let data = contractInstance.methods.getBalanceBronze(ownerAddress).call().then(balance => {
        res.send(balance.toString())
        console.log(balance.toString())
    });
}
exports.getbalancesilver = function(req,res){
    const contractAddress = req.body.contractaddress;
    contractInstance = new web3.eth.Contract(abi, contractAddress);
    let ownerAddress = req.body.owner;
    let data = contractInstance.methods.getBalanceSilver(ownerAddress).call().then(balance => {
        res.send(balance.toString())
        console.log(balance.toString())
    });
}
exports.getbalancegold = function(req,res){
    const contractAddress = req.body.contractaddress;
    contractInstance = new web3.eth.Contract(abi, contractAddress);
    let ownerAddress = req.body.owner;
    let data = contractInstance.methods.getBalanceGold(ownerAddress).call().then(balance => {
        res.send(balance.toString())
        console.log(balance.toString())
    });
}

exports.buybronze = function (req,res){
	const contractAddress = req.body.contractaddress;
	let ownerAddress = req.body.owner;
	let ownerPrivateKey = Buffer.from(req.body.ownerprivatekey,'hex');
	let fromAddress = req.body.from;
    let toAddress = req.body.to;
	let tokens = req.body.tokens;
	contractInstance = new web3.eth.Contract(abi,contractAddress);
	try {		
		let data = contractInstance.methods.buyBronze(fromAddress,toAddress,tokens).encodeABI();
		sendSignedTransaction(data,ownerAddress,ownerPrivateKey,contractInstance).then(result => { 
		 res.send(result)
			console.log(result)
		})
		.catch(err => {
			console.log(err);
		  });
	}
	catch(err) {
        console.log(err);
      }
}

exports.buysilver = function (req,res){
	const contractAddress = req.body.contractaddress;
	let ownerAddress = req.body.owner;
	let ownerPrivateKey = Buffer.from(req.body.ownerprivatekey,'hex');
	let fromAddress = req.body.from;
    let toAddress = req.body.to;
	let tokens = req.body.tokens;
	contractInstance = new web3.eth.Contract(abi,contractAddress);
	try {		
		let data = contractInstance.methods.buySilver(fromAddress,toAddress,tokens).encodeABI();
		sendSignedTransaction(data,ownerAddress,ownerPrivateKey,contractInstance).then(result => { 
		 res.send(result)
			console.log(result)
		})
		.catch(err => {
			console.log(err);
		  });
	}
	catch(err) {
        console.log(err);
      }
}

