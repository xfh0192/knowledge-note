/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let res = ''
  if (!strs.length) {
    return res
  }
  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i]
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== char) {
        return res
      }
    }
    res += char
  }
  return res
};

let strs = ["flower","flow","flight"]
// "fl"

longestCommonPrefix(strs)