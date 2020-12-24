var Accident = artifacts.require("./Accident.sol");

module.exports = function(deployer) {
  deployer.deploy(Accident);
};
