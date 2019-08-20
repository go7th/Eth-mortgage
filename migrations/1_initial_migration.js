// const Migrations = artifacts.require("Migrations");
// const Unitroller = artifacts.require("Unitroller");
// const Comptroller = artifacts.require("Comptroller");
// const WhitePaperInterestRateModel = artifacts.require("WhitePaperInterestRateModel");
const CEther = artifacts.require("CEther");
// const CErc20 = artifacts.require("CErc20");
// const Hello = artifacts.require("Hello");
// const CETH = artifacts.require("CETH");
// const CErc20 = artifacts.require("CErc20");

module.exports = function(deployer) {
  // deployer.deploy(Unitroller);
  // deployer.deploy(Comptroller);
  // deployer.deploy(WhitePaperInterestRateModel,"50000000000000000","120000000000000000");
  // 200000000000000000000000000
  deployer.deploy(CEther,"0x8144E53390fe2cdac7869d1Ec90bc24ACA1C9CE6","0x36a7C8451576d77897715dd88fe9cDd903310157","200000000000000000000000000","CETH","CETH","18",{from:"0xe527b500b5d9E2EC3Bd24953bfC2630e1dAb106d"});
  // deployer.deploy(CEther,"0x8144E53390fe2cdac7869d1Ec90bc24ACA1C9CE6","0x36a7C8451576d77897715dd88fe9cDd903310157","200000000000000000000000000","CETH","CETH","18",{gas: 4700000,from:"0xe527b500b5d9E2EC3Bd24953bfC2630e1dAb106d"});
  // deployer.deploy(CErc20,"","0x7c1aa96c810646ddadf96295d906816f5e8a9464e8740895fadf7424bf785ed4","0x1b73e081fe2b89c8c823f31bb5c4e8e0ae233b656f913a953685ade311cf7aeb","200000000000000000000000000","CETH","CETH","18");
  // deployer.deploy(Hello);
  // Hello.deployed().then(instance =>{ contract = instance; })
  //
  // console.log(contract.sayHi.call());
  // console.log(contract.echo.call('123'));
  // contract.echo("hahah").then(r=>{a = r; })
  // deployer.deploy(CETH);
  // deployer.deploy(CErc20);
};
