// https://www.nowcoder.com/practice/5af18ba2eb45443aa91a11e848aa6723?tpId=37&tqId=21237&rp=0&ru=/ta/huawei&qru=/ta/huawei/question-ranking

while(len = readline()) {
  let arr = []
  // arr = [
  //   'cap',
  //   'to',
  //   'cat',
  //   'card',
  //   'two',
  //   'too',
  //   'up',
  //   'boat',
  //   'boot',
  // ]
  for (let i = 0; i < len; i++) {
      arr.push(readline())
  }
  
  quickSort(arr, 0, arr.length - 1)
  
  for (let i = 0; i < arr.length; i++) {
      console.log(arr[i])
  }
}

function quickSort(arr, left, right) {
  if (left < right) {
      let pIndex = right
      let partIndex = sort(arr, pIndex, left, right)
      quickSort(arr, left, partIndex - 1 > left ? partIndex - 1: left)
      quickSort(arr, partIndex + 1 > right ? right : partIndex + 1 , right)
  }
}
                        
function sort(arr, pIndex, left, right) {
  let temp = arr[pIndex]
  let startIndex = left
  for (let i = left; i < right; i++) {
      //if (arr[i] < temp) {
      if (!needChange(arr[i], temp)) {
          [arr[i], arr[startIndex]] = [arr[startIndex], arr[i]];
          startIndex++
      }
  }
  [arr[pIndex], arr[startIndex]] = [arr[startIndex], arr[pIndex]];
  return startIndex
}

function needChange(first, second) {
  let i = 0
  let j = 0
  while(i < first.length && j < second.length) {
      let ch1 = first.charCodeAt(i)
      let ch2 = second.charCodeAt(j)
      if (ch1 > ch2) {
          return true
      } else if (ch1 < ch2) {
          return false
      }
      i++
      j++
  }
  return !!first[i]
}