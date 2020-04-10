/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    if (!s.length) return 0
    let temp = ''
    let maxLen = 0
    for (let i = 0; i < s.length; i++) {
        if (temp.includes(s[i])) {
            temp = temp.slice(temp.indexOf(s[i])+1) + s[i]
        } else {
            temp = temp + s[i]

        }
        maxLen = Math.max(maxLen, temp.length)
    }
    return maxLen
}

console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('bbbbb'))
console.log(lengthOfLongestSubstring('pwwkew'))
console.log(lengthOfLongestSubstring('au'))
console.log(lengthOfLongestSubstring('dvdf'))
console.log(lengthOfLongestSubstring(' '))