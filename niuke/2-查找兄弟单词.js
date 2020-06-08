// https://www.nowcoder.com/practice/03ba8aeeef73400ca7a37a5f3370fe68?tpId=37&tqId=21250&tPage=2&rp=&ru=/ta/huawei&qru=/ta/huawei/question-ranking

let input = input.split(' ')
while(input = readline()) {
  // let input = '3 abc bca cab abc 1'
  input = input.split(' ')
  let len = input.length
  let list = input.slice(1, len - 2)
  let target = input[len - 2]
  let k = input[len - 1]

  let result = []    // 兄弟单词
  for (let i = 0; i < list.length; i++) {
      if (list[i] !== target && list[i].length === target.length) {
          let item = list[i]
          if (item.split('').sort().join('') === target.split('').sort().join('')) {
              result.push(item)
          }
      }
  }

  result.sort()
  console.log(result.length)
  console.log(result[k - 1])
}