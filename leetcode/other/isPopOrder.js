// http://www.conardli.top/docs/dataStructure/%E6%A0%88%E5%92%8C%E9%98%9F%E5%88%97/%E6%A0%88%E7%9A%84%E5%8E%8B%E5%85%A5%E5%BC%B9%E5%87%BA%E5%BA%8F%E5%88%97.html#%E4%BB%A3%E7%A0%81


/**
 * 
 * 输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否可能为该栈的弹出顺序。
 * 假设压入栈的所有数字均不相等。例如序列1,2,3,4,5是某栈的压入顺序，
 * 序列4,5,3,2,1是该压栈序列对应的一个弹出序列，但4,3,5,1,2就不可能是该压栈序列的弹出序列。
 * （注意：这两个序列的长度是相等的）
 * 
 */

/**
 * 
 * 思路：
 * 
 * 1.借助一个辅助栈来模拟压入、弹出的过程。

2.设置一个索引idx，记录popV（出栈序列）栈顶的位置

3.将pushV（压入顺序）中的数据依次入栈。

4.当辅助栈栈顶元素和压popV栈顶元素相同时，辅助栈出栈。每次出栈索引idx+1。

5.出栈有可能在任意一次入栈后进行，当辅助栈栈顶元素和压popV栈顶元素相同时，继续让pushV入辅助栈。

6.当所有数据入栈完成，如果出栈顺序正确，那么辅助栈应该为空。
 */

function IsPopOrder(pushV, popV) {
  if (!pushV || !popV || pushV.length == 0 || popV.length == 0) {
    return;
  }
  var stack = [];
  var idx = 0;
  for (var i = 0; i < pushV.length; i++) {
    stack.push(pushV[i]);
    while (stack.length && stack[stack.length - 1] == popV[idx]) {
      stack.pop();
      idx++;
    }
  }
  return stack.length == 0;
}

var a = [1,2,3,4,5]
var b = [1,2,3,5,4]
console.log(IsPopOrder(a, b))