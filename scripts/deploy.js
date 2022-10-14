const { ethers } = require("hardhat");


async function main()
{
  const metadataURL = "ipfs://Qmbygo38DWF1V8GttM1zy89KzyZTPU2FLUzQtiDvB7q6i5/";

  const nftpfsContract = await ethers.getContractFactory("NFTpfs");
  const nftpfsContractDeployed = await nftpfsContract.deploy(metadataURL);

  await nftpfsContractDeployed.deployed();

  console.log("NFTPFS contract address", nftpfsContractDeployed.address);
}

main()
.then(() => process.exit(0))
.catch((error) =>
{
  console.log(error);
  process.exit(1);
});