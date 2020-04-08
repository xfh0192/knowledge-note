/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // 暴力
    if (x === 0) return 0;
    let res = 1
    let i = 1
    while(res < x) {
        i++
        res = i*i
    }
    return res !== x ? i - 1 : i;
};

let a = 8
console.log(mySqrt(a))


// ==== 二分法 ====

var mySqrt = function(x) {
    if(x == 0 || x ==1){
        return x;
    }
    var left = 1;
    var right = x;
    while(left <= right){
       var middle = left + ((right-left)>>1);
       if(middle*middle == x){
           return middle;
       }else if(middle*middle > x){
           right = middle-1;
       }else{
           left = middle+1;
       }
    }
    return right;
};
