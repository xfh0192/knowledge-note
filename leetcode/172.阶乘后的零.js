/**
 * @param {number} n
 * @return {number}
 */
// var trailingZeroes = function (n) {
//   let r = 0;
//   while (n > 1) {
//     n = parseInt(n / 5);
//     r += n;
//   }
//   return r;
// };

var trailingZeroes = function (n) {
  let count = 0
  while(n > 1) {
    n = parseInt(n / 5)
    count += n
  }
  return count
}

let a = 51

trailingZeroes(a)