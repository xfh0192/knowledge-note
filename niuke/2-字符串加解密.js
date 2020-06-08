// https://www.nowcoder.com/practice/2aa32b378a024755a3f251e75cbf233a?tpId=37&tqId=21252&tPage=2&rp=&ru=%2Fta%2Fhuawei&qru=%2Fta%2Fhuawei%2Fquestion-ranking 

while(input1 = readline()) {
  let input2 = readline()
  
  // let input1 = 'TJm5Jpgv9gokaSPV4xa77ZeT7W08RI7G7DIp77k9Hx8zM9VfrK47qL05VaC6uf8P1p0EMu259D1Oj0P4lFi36MM'
  // let input2 = 'ylV2Zv83sVqf1LF0P6soqMYF1aAv0i61iy0oScauz4Wv6HGo30C9v1xFus8e9JZ0VG6JF1680h2Zk3OV26ZYjg5YQHT09ig'

  console.log(encode(input1))
  console.log(decode(input2))
}

// 加密
function encode(s) {
  let res = ''
  for (let i = 0; i < s.length; i++) {
      let ch = s[i]
      let temp = ''
      if (ch === '9') {
          temp = '0'
      } else if (ch === 'z') {
          temp = 'A'
      } else if (ch === 'Z') {
          temp = 'a'
      } else if (/\d/.test(ch)) {
          temp = (Number(ch) + 1).toString()
      } else if (/[A-Y]/.test(ch)) {
          temp = String.fromCharCode(ch.charCodeAt(0) + 1).toLowerCase()
      } else if (/[a-y]/.test(ch)) {
          temp = String.fromCharCode(ch.charCodeAt(0) + 1).toUpperCase()
      }
      res += temp
  }
  return res
}

// 解密
function decode(s) {
  let res = ''
  for (let i = 0; i < s.length; i++) {
      let ch = s[i]
      let temp = ''
      if (ch === '0') {
          temp = '9'
      } else if (ch === 'a') {
          temp = 'Z'
      } else if (ch === 'A') {
          temp = 'z'
      } else if (/\d/.test(ch)) {
          temp = (Number(ch) - 1).toString()
      } else if (/[B-Z]/.test(ch)) {
          temp = String.fromCharCode(ch.charCodeAt(0) - 1).toLowerCase()
      } else if (/[b-z]/.test(ch)) {
          temp = String.fromCharCode(ch.charCodeAt(0) - 1).toUpperCase()
      }
      res += temp
  }
  return res
}