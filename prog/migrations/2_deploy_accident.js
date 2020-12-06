const Accident = artifacts.require("BlockchainAccident");

const accidentSetting = {
    name: "Maral"
}
module.exports = function(deployer) {
  deployer.deploy(Accident, accidentSetting.name);
};
