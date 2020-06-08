// https://www.nowcoder.com/practice/d3d8e23870584782b3dd48f26cb39c8f?tpId=37&tqId=21253&rp=0&ru=/ta/huawei&qru=/ta/huawei/question-ranking


// 2-字符串合并处理

```
function format(s) {
  if (s === undefined || !/[0-9a-fA-F]/.test(s)) return s   // 字符的正则对 空字符串/undefined 怎么匹配都是true。。
  let num = parseInt(s, 16).toString(2)
  num = leftPad(num, 4, '0')
  num = num.split('').reverse().join('')
  let res = parseInt(num, 2).toString(16).toUpperCase()   // toString 之后字母是小写的
  return res
}

# 注意【巨坑！！！！】

/\w/.test() // true
/\w/.test(undefined) // true

/\d/.test() // false
/\d/.test(undefined) // false

```