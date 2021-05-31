const createClient = require('ipfs-http-client')
//connect to ipfs thru infura
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: '5001', protocol: 'https' })
async function test() {
	const ipfs = await IPFS.create()
	const MyContract = artifacts.require("Accident")
	const data = JSON.stringify(window.sessionStorage.getItem('MyDataList'))

  const ipfsHash = await ipfs.add(data)
  const instance = await Accident.deployed()

  await instance.setHash.sendTransaction(ipfsHash)

  let returnedHash = await instance.ipfsHash.call()

  console.log(ipfsHash)
  console.log(returnedHash)

  console.log(JSON.parse(await ipfs.cat(returnedHash)))

}

test()
