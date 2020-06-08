// 前序遍历

function preorderTraversal(root, res = []) {
	if (root) {
		res.push(root.val)
		preorderTraversal(root.left, res)
		preorderTraversal(root.right, res)
	}
	return res
}

function preorderTraversal(root) {
	let res = []
	let stack = []
	let cur = root
	while (cur || stack.length) {
		while (cur) {
			stack.push(cur)
			res.push(cur.val)
			cur = cur.left
		}
		cur = stack.pop().right
	}
}

// 中序遍历

function inorderTraversal(root, res = []) {
	if (root) {
		midorderTraversal(root.left, res)
		res.push(root.val)
		midorderTraversal(root.right, res)
	}
	return res
}

function inorderTraversal(root) {
	let stack = []
	let res = []
	let cur = root
	while (cur || stack.length) {
		while (cur) {
			stack.push(cur)
			cur = cur.left
		}
		cur = stack.pop()
		res.push(cur.val)
		cur = cur.right
	}
}

// 后序遍历
function postorderTraversal(root, res) {
	if (root) {
		postorderTraversal(root.left, res)
		postorderTraversal(root.right, res)
		res.push(root.val)
	}
	return res
}

function postorderTraversal(root) {
	let stack = []
	let res = []
	let cur = root
	while (cur || stack.length) {
		while (cur) {
			stack.push(cur)
			res.push(cur.val)
			cur = cur.right
		}
		cur = stack.pop().left
	}
	res = res.reverse()
	return res
}
