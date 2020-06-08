// https://www.nowcoder.com/practice/05182d328eb848dda7fdd5e029a56da9?tpId=37&tqId=21246&tPage=2&rp=&ru=%2Fta%2Fhuawei&qru=%2Fta%2Fhuawei%2Fquestion-ranking

while(input = readline()) {
  let s = input
  // let s = 'abcdd'
  let map = {}
  for (let i = 0; i < s.length; i++) {
      let ch = s.charAt(i)
      map[ch] = map[ch] ? map[ch] + 1 : 1
  }
  
  let min = map[s[0]]
  Object.keys(map).forEach(key => {
      min = Math.min(min, map[key])
  })
  
  let res = ''
  for (let i = 0; i < s.length; i++) {
      if (map[s[i]] !== min) {
          res += s[i]
      }
  }
  
  console.log(res)
}