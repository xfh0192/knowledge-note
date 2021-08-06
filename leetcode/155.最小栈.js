/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = []
  this._minStack = [Infinity]
};

/** 
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function(val) {
  this.stack.push(val)
  this._minStack.push(Math.min(val, this._minStack[this._minStack.length - 1]))
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  let val = this.stack.pop()
  this._minStack.pop()
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1]
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this._minStack[this._minStack.length - 1]
};

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/