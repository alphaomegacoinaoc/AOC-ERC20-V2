const { deployProxy, upgradeProxy } = require('@openzeppelin/truffle-upgrades');

// upgradable contracts
const AOC_ERC20 = artifacts.require("AOC_ERC20");

module.exports = async function(deployer, network, accounts) {

  if(network === "mainnet") {
    await deployProxy(AOC_ERC20, { deployer, kind: "uups" });
  }
};
