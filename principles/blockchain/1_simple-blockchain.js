var crypto = require('crypto');
const SHA256 = (input) => crypto.createHash('sha256').update(input).digest('base64');

class Block {
  constructor(index, timestamp, data, previousHash) {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
  }
}

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock() {
    return new Block(0, Date.now(), "Genesis block", "0");
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }

    return true;
  }
}

const bc = new Blockchain();
console.log(bc.isChainValid());
console.log(bc.getLatestBlock());

/*
The Block class has four properties:

index: a number that represents the position of the block in the chain
timestamp: a timestamp of when the block was created
data: the data that is being stored in the block (could be a transaction, for example)
previousHash: the hash of the previous block in the chain
hash: a hash of the block's data, calculated using the calculateHash method
The Blockchain class has an array of blocks called chain and has several methods:

createGenesisBlock: creates the first block in the chain (also known as the Genesis block)
getLatestBlock: returns the latest block in the chain
addBlock: adds a new block to the chain
isChainValid: checks the validity of the chain by ensuring that the hashes of each block are correct and that the previous hash of each block is the same as the hash of the previous block
*/
