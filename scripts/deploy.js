const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const domainContractFactory = await hre.ethers.getContractFactory("Twitter");
  const domainContract = await domainContractFactory.deploy();
  await domainContract.deployed();
  console.log({ randomPerson });
  console.log("Contract deployed to:", domainContract.address);
  console.log("Contract deployed by:", owner.address);

  let url = "https://ethindia-sethu_kgm.revise.link/c/tezos/2";
  const txn = await domainContract.register(url, "sethu_kgm");
  await txn.wait();
  console.log(txn);
  const e = await domainContract.register(url, "sethu_kgm");
  await e.wait();
  console.log(e);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
