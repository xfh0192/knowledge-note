/**
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
 * 
 * 输入: [1,2,3]
  输出:
  [
    [1,2,3],
    [1,3,2],
    [2,1,3],
    [2,3,1],
    [3,1,2],
    [3,2,1]
  ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// ==== 答案 ====
var permute = function(nums) {
    let list = []
    backtrack(list, [], nums)
    return list
};

function backtrack(list, temp, nums) {
    // 终止条件
    if (temp.length == nums.length) {
        return list.push([...temp])
    }
    for (let i = 0; i < nums.length; i++) {
        if (temp.includes(nums[i])) continue
        temp.push(nums[i])
        backtrack(list, temp, nums)
        temp.pop()
    }
}

let nums = [1,2,3]
let res = permute(nums)
console.log(res)

// // ====
// var permute = function(nums) {
//     let n = nums.length;
//     let res = [];
//     let tmpPath = [];
//     let backtrack = (tmpPath) => {
//         if(tmpPath.length == n){
//             res.push(tmpPath);
//             return;
//         }
//         for(let i = 0;i < n;i++){
//             if(!tmpPath.includes(nums[i])){
//                 tmpPath.push(nums[i]);
//                 backtrack(tmpPath.slice());
//                 tmpPath.pop();
//             }
//         }
//     }
//     backtrack(tmpPath);
//     return res;
// };

// // ====
// var permute = function(nums) {
//     let list = []
//     let temp = []
//     backtrack(list, temp, nums)
//     return list
// }

// function backtrack(list, temp, nums) {
//     if (temp.length === nums.length) {
//         return list.push([...temp])
//     }
//     for (let i = 0; i < nums.length; i++) {
//         if (temp.includes(nums[i])) continue
//         temp.push(nums[i])
//         backtrack(list, temp, nums)
//         temp.pop()
//     }
// }