const crypto = require('crypto'); // for key generation (if needed)

async function generateKey() {
  // Generates a new AES-GCM key for encryption
  const key = await crypto.subtle.generateKey(
    { name: "AES-GCM", length: 256 }, // 256-bit key for AES-GCM
    true, // Extractable key for usage outside of the crypto API
    ["encrypt", "decrypt"]
  );
  return key;
}

async function encryptData(data, key) {
  const encodedData = new TextEncoder().encode(data);

  // Generate a random IV for each encryption operation
  const iv = crypto.getRandomValues(new Uint8Array(12));

  const encrypted = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv: iv },
    key,
    encodedData
  );

  // Combine the IV and the encrypted data for transmission (both are needed for decryption)
  const encryptedBuffer = new Uint8Array(encrypted);
  const combinedData = new Uint8Array(iv.length + encryptedBuffer.length);
  combinedData.set(iv);
  combinedData.set(encryptedBuffer, iv.length);

  return Buffer.from(combinedData).toString('base64'); // base64 encode the final result
}

async function decryptData(encryptedData, key) {
  // Decode the base64 string back into bytes
  const combinedData = Buffer.from(encryptedData, 'base64');
  const iv = combinedData.slice(0, 12); // Extract the IV (first 12 bytes)
  const encryptedBuffer = combinedData.slice(12); // The rest is the encrypted data

  const decrypted = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv: iv },
    key,
    encryptedBuffer
  );

  return new TextDecoder().decode(decrypted);
}

module.exports = { encryptData, decryptData, generateKey };
