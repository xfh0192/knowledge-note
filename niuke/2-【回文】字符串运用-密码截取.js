// https://www.nowcoder.com/practice/3cd4621963e8454594f00199f4536bb1?tpId=37&tqId=21255&rp=0&ru=/ta/huawei&qru=/ta/huawei/question-ranking

// 即找出最长回文字符子串

/**
 * 【注意】这种写法不行，因为每次求 dp[i][..] 的时候，需要依赖于 dp[i + 1][..]，但是这个时候 dp[i + 1][..] 还没有算
 * 因此从尾部开始遍历比较简便
 */

// 【错误的，不要用】
// let s = 'ddababc'

// let dp = []
// for (let i = 0; i < s.length; i++) {
//   dp[i] = []
//   // dp[i][i] = true
// }

// let res = []
// for (let j = 1; j < s.length; j++) {
//   for (let i = 0; i < j; i++) {
//     if (i === j) {
//       // 一个字符，肯定是回文
//       dp[i][j] = true
//     } else if (j - i === 1 && s[i] === s[j]) {
//       // 两个字符，而且相等，肯定是回文
//       dp[i][j] = true
//     } else if (s[i] === s[j] && dp[i + 1][j - 1]) {
//       dp[i][j] = true
//     }
//     if (dp[i][j] && i <= j) {
//       res.push(s.slice(i, j + 1))
//     }
//   }
// }

// console.log(res)


// ==== 答案

// ==== leetcode 5

  // java
  // public String longestPalindrome(String s) {
  //   // 特判
  //   int len = s.length();
  //   if (len < 2) {
  //       return s;
  //   }

  //   int maxLen = 1;
  //   int begin = 0;

  //   // dp[i][j] 表示 s[i, j] 是否是回文串
  //   boolean[][] dp = new boolean[len][len];
  //   char[] charArray = s.toCharArray();

  //   for (int i = 0; i < len; i++) {
  //       dp[i][i] = true;
  //   }
  //   for (int j = 1; j < len; j++) {
  //       for (int i = 0; i < j; i++) {
  //           if (charArray[i] != charArray[j]) {
  //               dp[i][j] = false;
  //           } else {
  //               if (j - i < 3) {
  //                   dp[i][j] = true;
  //               } else {
  //                   dp[i][j] = dp[i + 1][j - 1];
  //               }
  //           }

  //           // 只要 dp[i][j] == true 成立，就表示子串 s[i..j] 是回文，此时记录回文长度和起始位置
  //           if (dp[i][j] && j - i + 1 > maxLen) {
  //               maxLen = j - i + 1;
  //               begin = i;
  //           }
  //       }
  //   }
  // }

// ====

// 最长回文字串

// 正向遍历
var longestPalindrome = function(s) {
  let len = s.length;
  // let result;
  let result = [];
  let i,j,L;
  let dp=Array(len).fill(0).map(x=>Array(len).fill(0));
  //console.log(dp);
  if(len<=1){
      return s
  }
  // 只有一个字符的情况是回文
  for(i = 0;i<len;i++){
      dp[i][i] = 1
      result = s[i]
  }

  // L是i和j之间的间隔数（因为间隔数从小到大渐增，所以大的间隔数总能包含小的间隔数）
  // i     j
  // abcdcba.length = L   所以 L = j-i+1; => j = i+L-1;
  for ( L = 2; L <= len; L++) {
      // 从0开始
      for ( i = 0; i <= len - L; i++) {
              j = i + L - 1;
          if(L == 2 && s[i] == s[j]) {
              dp[i][j] = 1;
              result = s.slice(i, i + L);
          }else if(s[i] == s[j] && dp[i + 1][j - 1] == 1) {
              dp[i][j] = 1
              result = s.slice(i, i + L);
              // result.push(s.slice(i, i + L))
          }

      }
  }
  console.log(result);
  return result;
}

// 反向遍历
var longestPalindrome = function(s) {
  // babad
  // tag : dp
  if (!s || s.length === 0) return "";
  let res = s[0];

  const dp = [];

  // 倒着遍历简化操作， 这么做的原因是dp[i][..]依赖于dp[i + 1][..]
  for (let i = s.length - 1; i >= 0; i--) {
    dp[i] = [];
    for (let j = i; j < s.length; j++) {
      if (j - i === 0) dp[i][j] = true;
      // specail case 1
      else if (j - i === 1 && s[i] === s[j]) dp[i][j] = true;
      // specail case 2
      else if (s[i] === s[j] && dp[i + 1][j - 1]) {
        // state transition
        dp[i][j] = true;
      }

      if (dp[i][j] && j - i + 1 > res.length) {
        // update res
        res = s.slice(i, j + 1);
      }
    }
  }
  console.log(res);
  
  return res;
};

// 中心扩展法
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

longestPalindrome('ddabbayuioc')
// longestPalindrome('ABBA')
