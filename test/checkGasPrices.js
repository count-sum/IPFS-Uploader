const Identity = artifacts.require('Identity')
const FileContract = artifacts.require('FileContract')
var solc = require('solc')

/**
 * @file check_gasPrices.js 
 * @summary used to check for gas prices of truffle 
 * run with 
 * @example truffle exec check_gasPrices
 */
module.exports = function(callback) {

    Identity.web3.eth.getGasPrice(function(error, result){ 
        console.log('StoreFront Deployment costs')
        var gasPrice = Number(result);
        console.log("Gas Price is " + gasPrice + " wei"); // "10000000000000"
        var IdentityContract = web3.eth.contract(Identity._json.abi);
        var contractData = IdentityContract.new.getData({data: Identity._json.bytecode});
        var gas = Number(web3.eth.estimateGas({data: contractData}))


        console.log("gas estimation = " + gas + " units");
        console.log("gas cost estimation = " + (gas * gasPrice) + " wei");
        console.log("gas cost estimation = " + Identity.web3.fromWei((gas * gasPrice), 'ether') + " ether \n");
    });

    FileContract.web3.eth.getGasPrice(function(error, result){ 
        console.log()
        console.log('FileContract Deployment cost.')
        var gasPrice = Number(result);
        console.log("Gas Price is " + gasPrice + " wei"); // "10000000000000"

        var FileContract = web3.eth.contract(FileContract._json.abi);
        var contractData = FileContract.new.getData({data: FileContract._json.bytecode});
        var gas = Number(web3.eth.estimateGas({data: contractData}))


        console.log("gas estimation = " + gas + " units");
        console.log("gas cost estimation = " + (gas * gasPrice) + " wei");
        console.log("gas cost estimation = " + FileContract.web3.fromWei((gas * gasPrice), 'ether') + " ether");

    });
};