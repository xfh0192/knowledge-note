// https://www.nowcoder.com/practice/5190a1db6f4f4ddb92fd9c365c944584?tpId=37&tqId=21249&tPage=2&rp=&ru=%2Fta%2Fhuawei&qru=%2Fta%2Fhuawei%2Fquestion-ranking

let s
while(s = readline()) {
  s = s.split('')
  let map = {}
  let res = ''
  for (let i = 0; i < s.length; i++) {
      let ch = s[i]
      if (/[a-zA-Z]/.test(ch)) {
          // 英文字符
          let temp = ch.toLowerCase()
          if (map[temp]) {
              map[temp].push(ch)
          } else {
              map[temp] = [ch]
          }
          s[i] = undefined
      }
  }
  
  let letters = []
  Object.keys(map).sort().forEach(key => {
      letters = letters.concat(map[key])
  })
  
  for (let i = 0; i < s.length; i++) {
      let ch = s[i]
      if (!ch) {
          s[i] = letters.shift()
      }
  }
  
  console.log(s.join(''))
}