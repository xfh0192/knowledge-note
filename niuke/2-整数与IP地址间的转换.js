// https://www.nowcoder.com/practice/66ca0e28f90c42a196afd78cc9c496ea?tpId=37&tqId=21256&rp=0&ru=/ta/huawei&qru=/ta/huawei/question-ranking

while(s1 = readline()) {
  let s2 = readline()
  
  // s1
  // let s1 = '10.0.3.193'
  s1 = s1.split('.')
  let temp1 = ''
  let res1 = 0
  for (let i = 0; i < s1.length; i++) {
    temp1 += leftPad(Number(s1[i]).toString(2), 8, '0')
  }
  for (let j = 0; j < temp1.length; j++) {
    res1 += temp1[j] * Math.pow(2, temp1.length - j - 1)
  }
  console.log(parseInt(res1, 10).toString())

  // s2
  // let s2 = '167969729'
  s2 = Number(s2).toString(2)
  s2 = leftPad(s2, 32, '0')
  
  let cuts = [
      s2.substring(0, 8),
      s2.substring(8, 16),
      s2.substring(16, 24),
      s2.substring(24, 32),
  ]
  
  let res2 = []
  for (let i = 0; i < cuts.length; i++) {
      let temp = 0
      let cut = cuts[i]
      for (let j = 0; j < cut.length; j++) {
          temp += cut[j] * Math.pow(2, cut.length - j - 1)
      }
      res2.push(temp)
  }
  console.log(res2.join('.'))
}

function leftPad(s, len, ch) {
  let leftStr = new Array(len).fill(ch).join('')
  let res = (leftStr + s).substr(-len)
  return res
}