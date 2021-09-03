/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  let map1 = {}
  let map2 = {}
  for (let i = 0; i < s.length; i++) {
    let ch1 = s[i]
    let ch2 = t[i]
    if ((map1[ch1] && map1[ch1] !== ch2) || (map2[ch2] && map2[ch2] !== ch1)) {
      return false
    }
    map1[ch1] = ch2
    map2[ch2] = ch1
  }
  return true
};

let a = "foo"
let b = "bar"
let res = isIsomorphic(a, b)
console.log(res)