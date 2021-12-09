const Accident = artifacts.require("Accident");

module.exports = function(deployer) {
  deployer.deploy(Accident);
};
