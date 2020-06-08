// https://www.nowcoder.com/practice/d3d8e23870584782b3dd48f26cb39c8f?tpId=37&tqId=21253&rp=0&ru=/ta/huawei&qru=/ta/huawei/question-ranking


// function format(s) {
//   let num = parseInt(s, 16).toString(2).split('').reverse().join('')
//   let res = parseInt(num, 2).toString(16)
//   // return res
//   console.log(res)
// }

// format('a')

// =====

while(input = readline()) {
  let s = input.replace(/\s/g, '')

  // let s1 = 'DKSq8qykpgKIZxiRKmQ9QkZt909PffE6Gyfc57dBx7p20D42bWJRzKqGGCzzQ4p7Z32Dsx2Cf8G2841lPuAZNb'
  // let s2 = 'K0fHodOVFlbl220ov260TPOrmZ328d1E89OatcL88EXr622RdklXtXazO7wMoc6DEKU45eQ5VBUy2YFjgJX'
  // let output = '000080844444444444C42CA2A2626A661E1E1E1E11919959BD7D73F3FBGBGBG7J7KGKHKILJNKOKOKOMOPPPQRQRQRQVSWTXUXUYVZXZX5ZDZ3Z353DBDBB7BFFgFjFkFkgkilllmlomoopqpqprqrsttutxvxwyxyyzzzz'
  // let s = s1 + s2

  let evens = []
  let odds = []
  for (let i = 0; i < s.length; i++) {
      if (i % 2 === 0) {
          evens.push(s[i])
      } else {
          odds.push(s[i])
      }
  }
  
  evens.sort()
  odds.sort()
  let len = Math.max(evens.length, odds.length)
  let result = ''
  for (let i = 0; i < len; i++) {
    result += (format(evens[i]) || evens[i] || '') + (format(odds[i]) || odds[i] || '')
  }
  console.log(result)
}

// 观察用，0-9会有问题
// let a = '0123456789abcdefABCDEF'
// a.split('').forEach(s => {
//   console.log(`${s} === ${format(s)}`)
// })

// 错误版，s在0-9时有问题，因为在转为2进制时，不够4位。。会出错
// 6 => '110' 需要的情况应该是 '0110'
// function format(s) {
//   let num = parseInt(s, 16).toString(2).split('').reverse().join('')
//   let res = parseInt(num, 2).toString(16).toUpperCase()   // toString 之后字母是小写的
//   return res
// }

// 
function format(s) {
  if (s === undefined || !/[0-9a-fA-F]/.test(s)) return s   // 字符的正则对 空字符串/undefined 怎么匹配都是true。。
  let num = parseInt(s, 16).toString(2)
  num = leftPad(num, 4, '0')  // pad的作用是将 2 -> '10' 转为 '0010'，让后面split正确以4位处理
  num = num.split('').reverse().join('')
  let res = parseInt(num, 2).toString(16).toUpperCase()   // toString 之后字母是小写的
  return res
}

function leftPad(s, len, ch) {
  if (s.length >= len) return s
  let l = len - s.length
  let temp = new Array(l).fill(ch).join('')
  return temp + s
}


// // ==== 答案 ====

// const helper = {
//   'a': '5',
//   'b': 'D',
//   'c': '3',
//   'd': 'B',
//   'e': '7',
//   'f': 'F',
//   'A': '5',
//   'B': 'D',
//   'C': '3',
//   'D': 'B',
//   'E': '7',
//   'F': 'F',
//   '0': '0',
//   '1': '8',
//   '2': '4',
//   '3': 'C',
//   '4': '2',
//   '5': 'A',
//   '6': '6',
//   '7': 'E',
//   '8': '1',
//   '9': '9'
// }
// while(line=readline()) {
//     var result = '';
//     const j = [];
//     const o = [];
//     line.replace(/\s/g, '').split('').forEach((v, idx) => {
//         if (idx % 2 === 0) o.push(v);
//         else j.push(v)
//     })
//     j.sort();
//     o.sort();
//     for(let i  = 0; i < o.length; i += 1) {
//         result += (helper[o[i]] || o[i]) + ((j[i] && helper[j[i]] || j[i]) || '');
//     }
//     console.log(result);
// }