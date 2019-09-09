const { EthereumTx, web3 } = require("./web3");

let sendSignedTransaction = function signTransactions(
  data,
  fromAddress,
  privateKey,
  contractAddress
) {
  return new Promise((resolve, reject) => {
      
    web3.eth.getTransactionCount(fromAddress, "pending", function(err, nonce) {
      web3.eth.getGasPrice().then(gasPrice => {
        console.log(gasPrice,'gasprice');
        const txParams = {
          from: fromAddress,
          to: contractAddress,
          nonce: web3.utils.toHex(nonce),
          gasLimit:70000000000,
          data: data,
        };
        web3.eth.estimateGas(txParams).then(estimateGas => {
          console.log(estimateGas);
          txParams.gas = estimateGas;
          gasPrice = web3.utils.toHex(gasPrice);

          let tx = new EthereumTx(txParams, {
            chain: "ropsten",
            hardfork: "petersburg"
          });
          // console.log(tx)
          tx.sign(privateKey);
          let raw = "0x" + tx.serialize().toString("hex");
          //console.log(raw)
          web3.eth.sendSignedTransaction(raw, function(err, transactionHash) {
            if (!err) {
              resolve(transactionHash);
            } else {
              reject(err.message);
            }
          });
        });
      });
    });
  });
};
module.exports = sendSignedTransaction;
