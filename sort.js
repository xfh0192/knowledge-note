
// =========== 2020.03.19 ===========

// 冒泡排序
function bubbleSort(arr) {
    let tempArr = arr.slice();
    for (let i = 0; i < tempArr.length; i++) {
        let flag = false;
        for (let j = 0; j < tempArr.length - i - 1; j++) {
            if (tempArr[j] > tempArr[j + 1]) {
                [tempArr[j], tempArr[j + 1]] = [tempArr[j + 1], tempArr[j]]
                flag = true;
            }
        }
        if (!flag) break;
    }
}

// 选择排序
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i
        let j = i + 1
        for (; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
}

// 插入排序
function insertSort(arr) {
    let tempArr = arrr.slice();
    for (let i = 0; i < tempArr.length; i++) {
        let value = tempArr[i]
        let j = i - 1;
        for (; j >= 0; j--) {
            if (value < tempArr[j]) {
                tempArr[j + 1] = tempArr[j]
            } else break
        }
        tempArr[j + 1] = value
    }
}

// 归并排序

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let middleIndex = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, middleIndex)
    let rightArr = arr.slice(middleIndex)
    return mergeArr(mergeSort(leftArr), mergeSort(rightArr))
}

function mergeArr(leftArr, rightArr) {
    let temp = []
    let i = 0
    let j = 0
    while ( leftArr.length > i && rightArr.length > j) {
        if (leftArr[i] <= rightArr[j]) {
            temp.push(leftArr[i]);
            i++
        } else {
            temp.push(rightArr[j])
            j++
        }
    }

    return temp.concat(leftArr.slice(i)).concat(rightArr.slice(j))
}

// 快速排序

function quickSort(arr, left, right) {
    if (left < right) {
        let pivot = right
        let partitionIndex = partition(arr, pivot, left, right)
        quickSort(arr, left, partitionIndex - 1 < left ? left : partitionIndex - 1)
        quickSort(arr, partitionIndex + 1 > right ? right : partitionIndex + 1, right)
    }
}

function partition(arr, pivot, left, right) {
    let pivotValue = arr[pivot]
    let startIndex = left;  // 注意
    for (let i = left; i < right; i++) {    // 注意 i = left
        if (arr[i] < pivotValue) {
            [arr[i], arr[startIndex]] = [arr[startIndex], arr[i]]
            startIndex++
        }
    }
    [arr[startIndex], arr[pivot]] = [arr[pivot], arr[startIndex]]
    return startIndex
}

// =========== 2020.03.20 ===========

// 冒泡
function bubleSort(arr) {
    let temp = arr.slice();
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let flag = false;
        for (let j = 0; j < len - i - 1; j++) {
            if (temp[j] > temp[j+1]) {
                [temp[j], temp[j+1]] = [temp[j+1], temp[j]]
            } else {
                flag = true;
            }
        }
        if (!flag) break;
    }
    return temp;
}

// 插入
function insertSort(arr) {
    let tArr = arr.slice();
    let len = tArr.length;
    for (let i = 0; i < len; i++) {
        let value = tArr[i];
        let j = i - 1;
        for (; j >= 0; j--) {
            if (tArr[j] > value) {
                tArr[j+1] = tArr[j]
            } else break;
        }
        tArr[j + 1] = value;
    }
    return tArr;
}

// 归并排序
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let middleIndex = Math.floor(arr.length / 2);   // 记得除以2
    let leftArr = arr.slice(0, middleIndex)
    let rightArr = arr.slice(middleIndex);
    return mergeArr(mergeSort(leftArr), mergeSort(rightArr));   // 记得return
}

function mergeArr(leftArr, rightArr) {
    let i = 0;
    let j = 0;
    let temp = []
    while ( i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] <= rightArr[j]) {    // 小于等于
            temp.push(leftArr[i])
            i++
        } else {
            temp.push(rightArr[j])
            j++
        }
    }
    return temp.concat(leftArr.slice(i)).concat(rightArr.slice(j));
}

// 快速排序
function quickSort(arr, left, right) {
    if (left < right) {
        let pivot = right;
        let partitionIndex = partition(arr, pivot, left, right);
        quickSort(arr, left, partitionIndex - 1 < left ? left : partitionIndex - 1)     // 每次都从left开始，不是0
        quickSort(arr, partitionIndex + 1 > right ? right : partitionIndex + 1, right)
    }
}

function partition(arr, pivot, left, right) {
    let pivotValue = arr[pivot]
    let j = left;
    for (let i = left; i < right; i++) {
        if (arr[i] < pivotValue) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++
        }
    }
    // arr[j] = pivotValue      // 错了，注意。应该是交换值
    [arr[j], pivotValue] = [pivotValue, arr[j]]
    return j;
}

// ======== 2020.03.23 =========

// 
function bubleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let flag = false
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                flag = true
            }
        }
        if (!flag) break
    }
}

// 
function insertSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i]
        let j = i - 1
        for (;j >= 0; j--) {
            if (arr[j] > value) {
                arr[j + 1] = arr[j]
            } else break
        }
        arr[j + 1] = value
    }
}

// 
function mergeSort(arr, left, right) {
    let middleIndex = Math.floor(arr.length / 2)
    let left = arr.slice(0, middleIndex)
    let right = arr.slice(middleIndex)
    return mergeArr(mergeSort(left), mergeSort(right))
}

function mergeArr(left, right) {
    let i = 0
    let j = 0
    let temp = []
    while ( i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            temp.push(left[i])
            i++
        } else {
            temp.push(right[j])
            j++
        }
    }
    return temp.concat(left.slice(i)).concat(right.slice(j))
}

// 
function quickSort(arr, left, right) {
    if (left < right) {
        let pivot = right
        let pivotIndex = partition(arr, pivot, left, right)
        quickSort(arr, left, pivotIndex - 1 < left ? left : pivotIndex - 1)
        quickSort(arr, pivotIndex + 1 > right ? right : pivotIndex + 1, right)
    }
}

function partition(arr, pivot, left, right) {
    let pivotValue = arr[pivot]
    let startIndex = left
    for (let i = left; i < right; i++) {
        if (arr[i] < pivotValue) {
            [arr[i], arr[startIndex]] = [arr[startIndex], arr[i]]
            startIndex++
        }
    }
    [arr[startIndex], arr[pivot]] = [arr[pivot], arr[startIndex]]
    return startIndex
}

// ==== 20200331 ====

function bubleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let flag = false
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                flag = true
            }
        }
        if (!flag) break;
    }
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
    }
}

function insertSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i]
        let j = i - 1
        for (; j >= 0; j--) {
            if (arr[j] > value) {
                arr[j + 1] = arr[j]
            } else {
                break;
            }
        }
        arr[j + 1] = value
    }
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr
    let middleIndex = Math.floor(arr.length / 2)
    let left = arr.slice(0, middleIndex)
    let right = arr.slice(middleIndex)

    return mergeArr(mergeSort(left), mergeSort(right))
}

function mergeArr(leftArr, rightArr) {
    let i = 0
    let j = 0
    let temp = []
    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] <= rightArr[j]) {
            temp.push(leftArr[i])
            i++
        } else {
            temp.push(rightArr[j])
            j++
        }
    }
    return temp.concat(leftArr.slice(i)).concat(rightArr.slice(j))
}

function quickSort(arr, left, right) {
    
}