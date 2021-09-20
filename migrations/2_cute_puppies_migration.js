const CutePuppies = artifacts.require("CutePuppies");

let tokenUri0 = "https://gateway.pinata.cloud/ipfs/QmSjdZUnrFd8fUjfdEaWZDq5AeWkuu3WPy9SShNVDmvNMt/0-PUG.json"
let tokenUri1 = "https://gateway.pinata.cloud/ipfs/QmSjdZUnrFd8fUjfdEaWZDq5AeWkuu3WPy9SShNVDmvNMt/1-SHIBA_INU.json"
let tokenUri2 = "https://gateway.pinata.cloud/ipfs/QmSjdZUnrFd8fUjfdEaWZDq5AeWkuu3WPy9SShNVDmvNMt/2-ST_BERNARD.json"

module.exports =  async function (deployer) {

  // deploy NFT contract
  await deployer.deploy(CutePuppies);
  let puppies = await CutePuppies.deployed()

  // mint puppies
  await puppies.createCollectible(tokenUri0)
  await puppies.createCollectible(tokenUri1)
  await puppies.createCollectible(tokenUri2)
};
