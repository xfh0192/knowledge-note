// https://www.nowcoder.com/profile/931654529/codeBookDetail?submissionId=73300160

/**
 * 功能:输入一个正整数，按照从小到大的顺序输出它的所有质因子（重复的也要列举）（如180的质因子为2 2 3 3 5 ）
 * 最后一个数后面也要有空格
 */

while(n = parseInt(readline())) {
  fun(n)
}

function fun(num) {
  let res = '';
  for (let i = 2; i< Math.sqrt(num); i++) {
    while(num % i === 0) {
        res += i + ' ';
        num = num / i;
    }
  }
  if (num > 1) {
    res += num + ' ';
  }
  console.log(res);
}

// =====

function f(num) {
  let res = []
  for (let i = 0; i < Math.sqrt(num); i++) {
    while(num % i === 0) {
      res.push(i)
      num = num/i
    }
  }
  if (num > 1) {
    res.push(num)
  }
  return res
}