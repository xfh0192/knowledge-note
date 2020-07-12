/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  if (!s) return 0
  
  let map = {
    'I': 1,
    'IV': 4,
    'V': 5,
    'IX': 9,
    'X': 10,
    'XL': 40,
    'L': 50,
    'XC': 90,
    'C': 100,
    'CD': 400,
    'D': 500,
    'CM': 900,
    'M': 1000,
  }
  let sum = 0
  for (let i = 0; i < s.length; i++) {
    let plusChar = `${s[i]}${s[i+1]}`
    if (map[plusChar]) {
      sum += map[plusChar]
      i++
      continue
    }
    sum += map[s[i]]
  }
  return sum
};

let a = romanToInt("IV")
console.log(a)
