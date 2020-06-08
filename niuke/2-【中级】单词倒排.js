// https://www.nowcoder.com/practice/81544a4989df4109b33c2d65037c5836?tpId=37&tqId=21254&tPage=2&rp=&ru=/ta/huawei&qru=/ta/huawei/question-ranking

// 用上倒序，试下

while(s = readline()) {
  // s = 'I am a student'
  s = s.trim().replace(/[^a-zA-Z\s]/g, ' ')
  let res = []
  let temp = ''
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ' ') {
      temp += s[i]
    } else {
      // 遇到空格
      if (temp) {
        res.push(temp)
        temp = ''
      }
    }
  }
  // 如果最后temp还有字符，要加进res
  if (temp) {
    res.push(temp)
  }

  // 此时res中所有单词是倒序进入的，但是每个单词自身也是倒序的，需要再倒过来
  let result = []
  res.forEach(word => {
    result.push(wordReverse(word, 0, word.length - 1))
  })
  
  
  console.log(result.join(' '))
}

function wordReverse(word, left = 0, right) {
  let list = word.slice(left, right + 1).split('')
  let midIndex = left + Math.floor((right - left) / 2)

  for (let i = 0; i <= midIndex; i++) {
    [list[i], list[right - i]] = [list[right - i], list[i]];
  }

  // console.log(list.join(''))
  return list.join('')
}

// ==== 答案【有瑕疵，单词间有多个空格就不行了】

// var s1 = readline();
// s1 = s1.replace(/[^a-zA-Z\s]/g," ");
// var m = s1.split(" ");
// var s="";
// for(var i = (m.length-1);i>=0; i--){
//      s+=m[i];
//      s+=" ";
     
// }
// print(s.trim());