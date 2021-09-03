/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let res = 0
  for (let i = 0; i < 32 && n > 0; i++) {
    res |= (n & 1) << (31 - i)
    n = n >>> 1
  }
  return res >>> 0
};

let a = 00000010100101000001111010011100

let res = reverseBits(a)
console.log(res)