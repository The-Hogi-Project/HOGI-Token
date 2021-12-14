const Contract = artifacts.require("ERC20");

module.exports = function (deployer) {
  deployer.deploy(Contract, "Hogi", "HOGI", 1, 1000000000);
};
