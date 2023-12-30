const BigInteger = require('big-integer');

const m = 2023;
const b = 541; // Tomando el resultado anterior

const x = BigInteger(b).modInv(m);

console.log(x.toString());




