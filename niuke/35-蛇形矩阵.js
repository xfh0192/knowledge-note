// https://www.nowcoder.com/practice/649b210ef44446e3b1cd1be6fa4cab5e?tpId=37&&tqId=21258&rp=1&ru=/activity/oj&qru=/ta/huawei/question-ranking

  let n = 4
  let sum = 0
  let res = []
  for (let i = 1; i <= n; i++) {
      sum += i
      res[i - 1] = new Array(i).fill('')
  }
  
  let num = 1
  for (let i = 0; i < n; i++) {
      for (let j = 0; j <= i; j++) {
          res[i - j][j] = num
          num++
      }
  }
  for (let i = 0; i < n; i++) {
      console.log(res[i].join(' '))
  }