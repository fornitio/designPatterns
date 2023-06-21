const crypto = require('crypto');

// Generate a random key and initialization vector
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

// Encrypt a message using the AES-256-CBC algorithm
function encrypt(message) {
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  let encrypted = cipher.update(message, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

// Decrypt an encrypted message using the AES-256-CBC algorithm
function decrypt(encryptedMessage) {
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
  let decrypted = decipher.update(encryptedMessage, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

// Encrypt a message and then decrypt it to ensure the encryption and decryption are working correctly
const message = 'encryption and decryption are working correctly.';
const encryptedMessage = encrypt(message);
console.log(decrypt(encryptedMessage)); // "encryption and decryption are working correctly."

// Add two encrypted numbers together using homomorphic encryption
function add(x, y) {
  // Convert the numbers to hexadecimal strings
  const xHex = x.toString(16);
  const yHex = y.toString(16);

  // Pad the hex strings with leading zeros so they have the same length
  const paddedXHex = xHex.padStart(32, '0');
  const paddedYHex = yHex.padStart(32, '0');

  // Encrypt the padded hex strings
  const encryptedX = encrypt(paddedXHex);
  const encryptedY = encrypt(paddedYHex);

  // Concatenate the encrypted hex strings and decrypt the result
  const encryptedSum = encSum(encryptedX, encryptedY);
  const decryptedSum = decrypt(encryptedSum);

  // Convert the decrypted hex string back to a number and return it
  return parseInt(decryptedSum, 16);
}

console.log(add(5, 7));
