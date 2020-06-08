while(h = readline()) {

  let sum = 0
  let n = 5
  let tempH = h
  for (let i = 0; i < n; i++) {
      sum += tempH * 2
      tempH = tempH / 2
  }
  console.log(sum - h)
  console.log(tempH)
}