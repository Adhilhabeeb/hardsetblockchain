const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");


module.exports = buildModule("applemodule", (m) => {
 
  const applecontract = m.contract("apple", []);

  return { applecontract };
}); 