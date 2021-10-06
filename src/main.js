const {Blockchain,Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
//keyprivate
const myKey = ec.keyFromPrivate('5c702f595c09f5bd98bc0d58cd7608af504d38faacec2b0114b254f5e59ac40c');
const myWalletAddress = myKey.getPublic('hex');

let monaCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
monaCoin.addTransaction(tx1);


console.log('\n Starting the miner...');
monaCoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of xavier is', monaCoin.getBalanceOfAddress(myWalletAddress));

monaCoin.chain[1].transactions[0].amount = 1;

console.log('Is chain valid?', monaCoin.isChainValid());