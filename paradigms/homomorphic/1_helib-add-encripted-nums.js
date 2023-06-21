/*
Homomorphic encryption is a type of encryption that allows mathematical operations to be performed on data in its encrypted form, without the need to decrypt it first. It is a relatively new area of research and is still in the early stages of development.
*/
const HElib = require('helib');

// Generate a public and private key pair
const keyPair = HElib.generateKeyPair();

// Encrypt two numbers using the public key
const encryptedNum1 = HElib.encrypt(keyPair.publicKey, 5);
const encryptedNum2 = HElib.encrypt(keyPair.publicKey, 7);

// Add the encrypted numbers together
const encryptedSum = HElib.add(encryptedNum1, encryptedNum2);

// Decrypt the result using the private key
const sum = HElib.decrypt(keyPair.privateKey, encryptedSum);

console.log(sum); // Output: 12
