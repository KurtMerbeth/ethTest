const small_Test_Contract = artifacts.require("small_Test_Contract");

module.exports = function(deployer) {
  deployer.deploy(small_Test_Contract);
};
