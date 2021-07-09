function findTheDistanceValue (arr1, arr2, d) {
  arr2 = arr2.sort((a,b) => a - b)
  let res = 0
  for (let i = 0; i < arr1.length; i++) {
    let value = arr1[i]
    let index = findNearestValueIndex(value, arr2)
    let flag = true
    if (index < arr2.length) {
      if (arr2[index] - value <= d) {
        flag = false
      }
    }
    if (index - 1 >= 0 && index - 1 < arr2.length) {
      if (value - arr2[index - 1] <= d) {
        flag = false
      }
    }
    if (flag) {
      res++
    }
  }
  return res
}

function findNearestValueIndex (value, arr) {
  let left = 0
  let right = arr.length - 1
  while(left <= right) {
    let mid = left + ((right - left) >> 1)
    if (value === arr[mid]) {
      return mid
    } else if (arr[mid] > value) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return left
}

var arr1 = [4,5,8]
var arr2 = [10,9,1,8]
var d = 2

// arr1 = [1,4,2,3]
// arr2 = [-4,-3,6,10,20,30]
// d = 3

// arr1 = [-3,2,-5,7,1]
// arr2 = [4]
// d = 84

var res = findTheDistanceValue(arr1, arr2, d)
console.log(res)