/**
 * @param {string} s
 * @return {number}
 */

// ==== 厉害

var calculate = function(s) {
    let sum = 0,
        stack = [],
        sign = 1,
        i = 0,
        n = s.length;
    
    while (i < n) {
      let c = s.charAt(i);
      if (c === ' ') {
        i++;
      }
      else if (c === '-') {
        sign = -1;
        i++;
      }
      else if (c === '+') {
        sign = 1;
        i++;
      }
      else if (c === '(') {
        stack.push( sum, sign );
        sum = 0;
        sign = 1;
        i++;
      }
      else if (c === ')') {
        sum = sum * stack.pop() + stack.pop();
        i++;
      }
      else {
        let temp = c;
        i++;
        while (i < n && isNumber( s.charAt(i) )) {
          temp += s.charAt(i);
          i++;
        }
        sum += Number( temp ) * sign;
      }
    }
    
    console.log( stack );
    
    return sum;
  };
  
  function isNumber(n) {
    n = Number( n );
    return typeof n === 'number' && !isNaN( n );
  }
  
// ====

var calculate = function(s) {
    let sum = 0
    let stack = []
    let sign = 1
    let i = 0
    let len = s.length

    while (i < len) {
        let ch = s.charAt(i)
        if (ch === ' ') {
            i++
        } 
        else if (ch === '+') {
            sign = 1
            i++
        } 
        else if (ch === '-') {
            sign = -1
            i++
        } 
        else if (ch === '(') {
            stack.push(sum, sign)
            sum = 0
            sign = 1
            i++
        }
        else if (ch === ')') {
            sum = sum * stack.pop() + stack.pop()
            i++
        }
        else {
            let temp = ch
            i++
            // 数字
            while(i < n && Number(ch)) {
                temp = temp + ch
                i++
            }
            sum = sum + Number(temp) * sign
        }
    }
    return sum;
};

function isNumber(num) {
    return Number.isInteger(num) && !Number.isNaN(num)
}