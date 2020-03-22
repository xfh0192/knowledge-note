// ====
var isValid = function(s) {
    let leftSqua = ['(', '[', '{']
    let rightSqua = [')', ']', '}']
    let stack = []
    for(let i = 0; i <= s.length; i++) {
        if (leftSqua.indexOf(s[i]) > -1) {
            stack.push(s[i])
        } else {
            let rightIndex = rightSqua.indexOf(s[i])
            let leftS = leftSqua[rightIndex]
            if (leftS === stack[stack.length - 1]) {
                stack.pop()
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
};


// ==== 

var isValid = function(s) {
    if (s.length % 2 > 0) return false;
    else {
        let map = {
            '(': ')',
            '[': ']',
            '{': '}',
        }
        let stack = []
        for(let i = 0; i <= s.length; i++) {
            if (s[i] in map) {
                stack.push(s[i])
            } else {
                let p = stack.pop();
                if (map[p] !== s[i]) return false
            }
        }
        return stack.length === 0;
    }
};

let a = '(]';
console.log(isValid(a))