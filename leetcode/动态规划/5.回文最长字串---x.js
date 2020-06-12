/**
 * @param {string} s
 * @return {string}
 */

// 1. 动态规划

var longestPalindrome = function(s) {
  if (s.length < 2) return s
  let table = []
  let maxLen = 0
  let maxStr = ''
  
  // 建表，x=当前字符串开始位置，y=当前字符串结束位置
  for (let i = 0; i < s.length; i++) {
    table[i] = []
    // 长度为1的字符，一定是回文
    table[i][i] = true
    maxLen = 1
    maxStr = s[i]
  }

  for (let l = 2; l <= s.length; l++) {
    // 注意这里的条件
    for (let i = 0; i <= s.length - l; i++) {
      let j = l + i - 1
      // 长度为2，且两个字符相同，一定是回文
      // 此轮遍历完成，将完成长度1、2的填表，后面就不会碰到空值了
      if (l == 2 && s[i] === s[j]) {
        table[i][j] = true
        maxStr = s.substring(i, j + 1)
        maxLen = Math.max(maxLen, j - i + 1)
      } else if (s[i] === s[j] && table[i + 1][j - 1]) {
        // 当前字符相同 && i+1到j-1（即左右减少1的字符）为回文
        // 此时也是回文
        table[i][j] = true
        maxStr = s.substring(i, j + 1)
        maxLen = Math.max(maxLen, j - i + 1)
      }
    }
  }

  // return [maxLen, maxStr]
  return maxStr
};

let s = 'babad'
// s = 'cbbbd'
s = 'ac'

console.log(longestPalindrome(s))

// 2. 单纯搜索

var longestPalindrome = function(s) {
  let tempStr = s[0] || "";
  for (let i = 0; i < s.length; i++) {
      for (let j = 1; j <= 2; j++) { 
          let lIndex = i, rIndex = i + j;
          while(lIndex >= 0 && rIndex < s.length && s[lIndex] === s[rIndex]) {
              lIndex--, rIndex++; 
          };
          let length = rIndex - lIndex - 1;
          if (length > tempStr.length) {
              tempStr = s.substr(lIndex + 1, length);
          }
      }
  }
  return tempStr;
};

// 3. 中心扩展

var longestPalindrome = function(s) {
  if(!s || s.length < 2){
      return s;
  }
  let start = 0,end = 0;
  let n = s.length;
  // 中心扩展法
  let centerExpend = (left,right) => {
      while(left >= 0 && right < n && s[left] == s[right]){
          left--;
          right++;
      }
      return right - left - 1;
  }
  for(let i = 0;i < n;i++){
      let len1 = centerExpend(i,i);
      let len2 = centerExpend(i,i+1);
      // 两种组合取最大回文串的长度
      let maxLen = Math.max(len1,len2);
      if(maxLen > end - start){
          // 更新最大回文串的首尾字符索引
          start = i - ((maxLen - 1) >> 1);
          end = i + (maxLen >> 1);
      }
  }

  let result = s.substring(start,end+1);
  console.log(result)
  return result
};