/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// 暴力，时间复杂度不达标 O(m+n)
var findMedianSortedArrays = function(nums1, nums2) {
    let temp = [...nums1, ...nums2].sort((a,b) => a - b)
    let midIndex = Math.floor(temp.length - 1 / 2)
    if (temp.length & 1) {
        return temp[midIndex]
    } else {
        return (temp[midIndex] + temp[midIndex + 1]) / 2
    }
};

// ==== official answer

// 官方答案，二分
var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];
    
    const length1 = nums1.length;
    const length2 = nums2.length;
    let min = 0;
    let max = length1;
    let half = Math.floor((length1 + length2 + 1) / 2);
    while (max >= min) {
        const i = Math.floor((max + min) / 2);
        const j = half - i;
        if (i > min && nums1[i - 1] > nums2[j]) {
            max = i - 1;
        } else if (i < max && nums1[i] < nums2[j - 1]) {
            min = i + 1;
        } else {
            let left,right;
            if (i === 0) left = nums2[j - 1];
            else if (j === 0) left = nums1[i - 1];
            else left = Math.max(nums1[i - 1], nums2[j - 1]);
            
            if (i === length1) right = nums2[j];
            else if (j === length2) right = nums1[i];
            else right = Math.min(nums1[i], nums2[j]);
            
            return (length1 + length2) % 2 ? left : (left + right) / 2;
        }
    }
    return 0;
};

// =====

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // 默认nums1较短
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1)
    }
    let len1 = nums1.length
    let len2 = nums2.length
    let totalLen = len1 + len2
    let mid1 = 0
    let mid2 = 0
    let low = 0
    let high = len1
    while (low <= high) {
        mid1 = low + ((high - low) >>> 1)
        // 中位数是中间大小的数，此题为正序数组，因此位置为中间位置的数
        mid2 = ((totalLen + 1) >>> 1) - mid1
        if (mid1 > low && nums1[mid1 - 1] > nums2[mid2]) {
            high = mid1 - 1
        } else if (mid1 < high && nums1[mid1] < nums2[mid2 - 1]) {
            low = mid1 + 1
        } else {
            break
        }
    }
  
    let midLeft = 0
    let midRight = 0
    // 找左中位数
    if (mid1 === 0) {
        midLeft = nums2[mid2 - 1]
    } else if (mid2 === 0) {
        midLeft = nums1[mid1 - 1]
    } else {
        midLeft = Math.max(nums1[mid1 - 1], nums2[mid2 - 1])
    }
    // 总长度是奇数，中位数只有一个
    if (totalLen & 1 === 1) {
        return midLeft
    }
    // 否则，继续找右中位数
    if (mid1 === len1) {
        midRight = nums2[mid2]
    } else if (mid2 === len2) {
        midRight = nums1[mid1]
    } else {
        midRight = Math.min(nums1[mid1], nums2[mid2])
    }
    return (midLeft + midRight) / 2
  };
  
  // let i1 = [1,2]
  // let i2 = [3,4]
  let i1 = [1,3]
  let i2 = [2]
  let a = findMedianSortedArrays(i1, i2)
  console.log(a);

// -----

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // 保证num1是比较短的数组
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }
    const length1 = nums1.length;
    const length2 = nums2.length;
    let min = 0;
    let max = length1;
    let half = Math.floor((length1 + length2 + 1) / 2);
    while (max >= min) {
        const i = Math.floor((max + min) / 2);
        const j = half - i;
        if (i > min && nums1[i - 1] > nums2[j]) {
            max = i - 1;
        } else if (i < max && nums1[i] < nums2[j - 1]) {
            min = i + 1;
        } else {
            let left,right;
            if (i === 0) left = nums2[j - 1];
            else if (j === 0) left = nums1[i - 1];
            else left = Math.max(nums1[i - 1], nums2[j - 1]);
            
            if (i === length1) right = nums2[j];
            else if (j === length2) right = nums1[i];
            else right = Math.min(nums1[i], nums2[j]);
            
            return (length1 + length2) % 2 ? left : (left + right) / 2;
        }
    }
    return 0;
  };
  
  
  // let i1 = [1,2]
  // let i2 = [3,4]
  let i1 = [1,3]
  let i2 = [2]
  let a = findMedianSortedArrays(i1, i2)
  console.log(a);