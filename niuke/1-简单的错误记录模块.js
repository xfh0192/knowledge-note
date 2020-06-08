// https://www.nowcoder.com/practice/2baa6aba39214d6ea91a2e03dff3fbeb?tpId=37&tqId=21242&tPage=1&rp=&ru=/ta/huawei&qru=/ta/huawei/question-ranking

let list = []
// let input = 'E:\\V1R2\\product\\fpgadrive.c 1325'.split(' ')
while(input = readline()) {
    input = input.split(' ')
    let path = input[0]
    let num = input[1]
    
    let fileName = path.substr(path.lastIndexOf('\\') + 1)
    fileName = fileName.substr(-16)
    
    let str = `${fileName} ${num}`
    list.push(str)
}

let resArr = []
let countArr = []

for (let i = 0; i < list.length; i++) {
    let item = list[i]
    if (resArr.indexOf(item) > -1) {
        countArr[resArr.indexOf(item)] += 1
    } else {
        resArr.push(item)
        countArr.push(1)
    }
}

let len = 0
if (resArr.length > 8) {
    len = resArr.length - 8
}
for (let i = len; i < resArr.length; i++) {
    console.log(`${resArr[i]} ${countArr[i]}`)
}
