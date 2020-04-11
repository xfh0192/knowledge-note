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
    for (let i = 0; i < list.length; i++) {
        if (temp.includes(nums[i])) continue
        temp.push(nums[i])
        backtrack(list, temp, nums)
        temp.pop()
    }
}

// ====
var permute = function(nums) {
    let n = nums.length;
    let res = [];
    let tmpPath = [];
    let backtrack = (tmpPath) => {
        if(tmpPath.length == n){
            res.push(tmpPath);
            return;
        }
        for(let i = 0;i < n;i++){
            if(!tmpPath.includes(nums[i])){
                tmpPath.push(nums[i]);
                backtrack(tmpPath.slice());
                tmpPath.pop();
            }
        }
    }
    backtrack(tmpPath);
    return res;
};

// ====
var permute = function(nums) {
    let list = []
    let temp = []
    backtrack(list, temp, nums)
    return list
}

function backtrack(list, temp, nums) {
    if (temp.length === nums.length) {
        return list.push([...temp])
    }
    for (let i = 0; i < nums.length; i++) {
        if (temp.includes(nums[i])) continue
        temp.push(nums[i])
        backtrack(list, temp, nums)
        temp.pop()
    }
}