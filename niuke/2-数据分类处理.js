// https://www.nowcoder.com/practice/9a763ed59c7243bd8ab706b2da52b7fd?tpId=37&tqId=21248&tPage=2&rp=&ru=/ta/huawei&qru=/ta/huawei/question-ranking


// 这个解法自测是通过的。。。牛客上面就不行，有毒

let I
let R
while(I = readline()) {
    R = readline()
  
    // let I = '15 123 456 786 453 46 7 5 3 665 453456 745 456 786 453 123'
    // let R = '5 6 3 6 3 0'

    // let I = '24 7907 610 4359 55 812 3002 10706 2470 8332 8573 3840 8105 9213 10159 11882 6517 7357 6398 4586 215 3420 4927 7159 9414'
    // let R = '10 85 122 46 55 110 47 77 119 50 58'

    I = I.split(' ').slice(1)
    R = R.split(' ').slice(1).sort((a,b) => a - b)
    R = [...new Set(R)]
    
    let result = []
    for (let i = 0; i < R.length; i++) {
        let ch = R[i]
        let temp = []
        for (let j = 0; j < I.length; j++) {
            if (I[j].indexOf(ch) !== -1) {
                temp.push(j)
                temp.push(I[j])
            }
        }
        
        if (temp.length > 0) {
            temp.unshift(ch, temp.length/2)
        }
        result = result.concat(temp)
    }
    
    let len = result.length
    result.unshift(len)
    console.log(result.join(' '))
}