/**
 * @param {string} path
 * @return {string}
 */
// var simplifyPath = function(path) {
//     let resStack = []
//     let stack = [];
//     let temp = '';
//     for (let i = 0; i < path.length; i++) {
//         let s = path[i];
//         if (s !== '/') {
//             temp += s
//             if (i === path.length - 1) {
//                 stack.push(temp)
//             }
//         } else if (temp){
//             stack.push(temp)
//             temp = ''
//         }
//     }
//     for(let i = 0; i < stack.length; i++) {
//         let item = stack[i]
//         if (item === '..') {
//             resStack.pop()
//         } else if (item !== '.') {
//             resStack.push(item)
//         }
//     }
//     return '/' + resStack.join('/');
// };

var simplifyPath = function(path) {
    let arr = path.split('/');
    let stack = []
    for (let i = 0; i < arr.length; i++) {
        let s = arr[i]
        if (s === '..') {
            stack.pop()
        } else if (s && s !== '.') {
            stack.push(s)
        }
    }
    return '/' + stack.join('/')
}

// let path = "/a/../../b/../c//.//"    // /c
// let path = '/a//b////c/d//././/..'  // /a/b/c
let path = '/...'   // /...
console.log(simplifyPath(path)) 

// nice
var simplifyPath = function(path) {
    const arr = path.split('/');
    const arr2 = [];
    arr.forEach(i=>{
        if(i.length>0){
            switch(i){
                case '.':
                  break;
                case '..':
                  arr2.pop();
                  break;
                default:
                  arr2.push(i);
            }
        }
    });
    return `/${arr2.join('/')}`;
};

// 从尾开始的算法，厉害了
var simplifyPath = function(path) {
    let array = path.split("\/")
    let result = [];
    let flag = 0;   // 记录有多少个'..'，就跳过多少层目录的push   不得了
    while(array.length > 0){
        const x = array.pop();
        if (x == "."|| x == "") continue;
        if (x == ".." && array.length > 0){
            flag ++;
            continue;
        } 
        if (flag>0&&array.length>0){
          flag--;
          continue;
        }
        result.push(x);
    }
    result.reverse();
    if (result.length == 0) return "/";
    return "/" + result.join("/");
  };