/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let left = 0
  let right = -1
  let set = new Set()
  let n = s.length
  let maxLen = 0
  for(; left < s.length; left++) {
      if (left > 0) {
        set.delete(s[left - 1])
      }
      while(right + 1 < n && !set.has(s[right + 1])) {
          set.add(s[right + 1])
          right++
      }
      maxLen = Math.max(maxLen, right - left + 1)
  }
  return maxLen
};

let a = "abcabcbb"
lengthOfLongestSubstring(a)