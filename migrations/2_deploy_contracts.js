var FileContract = artifacts.require("FileContract")
var Identity = artifacts.require("Identity")
module.exports = function(deployer) {
  deployer.deploy(FileContract)
  deployer.deploy(Identity)
};
