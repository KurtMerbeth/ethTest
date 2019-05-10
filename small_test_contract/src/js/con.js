import Web3 from 'web3.min';

let web3;
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // we check if metamask is running
  web3 = new Web3(window.web3.currentProvider);
} else {
  // set up provider through infura
  const provider = new Web3.providers.HttpProvider(
    // pass url of remote node
    'http://localhost:7545'
  );
  web3 = new Web3(provider);

}
const address = '0x2A074210B39d75Bd0d8e49bC393762b1aB687C4f';


const fs = require('fs');
const abi = JSON.parse(fs.readFileSync('./build/contracts/small_Test_Contract.json', 'utf8'));

export default new web3.eth.Contract(abi, address);
