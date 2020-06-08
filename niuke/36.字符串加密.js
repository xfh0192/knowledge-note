// https://www.nowcoder.com/practice/e4af1fe682b54459b2a211df91a91cf3?tpId=37&&tqId=21259&rp=1&ru=/activity/oj&qru=/ta/huawei/question-ranking 

while(key = readline()) {
    let word = readline()

    // let key = 'nihao'
    // let word = 'ni'

    let len = key.length

    let str1 = 'abcdefghijklmnopqrstuvwxyz'
    let str2 = []
    let strList = []
    for (let i = 0; i < str1.length; i++) {
        str2[i] = str1[i].toUpperCase()
    }
    let str = str2.join('') + str1
    
    let keys = []
    for (let i = 0; i < key.length; i++) {
        keys[i] = key[i].toLowerCase()
    }
    keys = keys.join('')
    keys = (keys + str1).split('')

    let key1 = [...new Set(keys)]
    let key2 = [...new Set(keys)]
    for (let i = 0; i < key1.length; i++) {
      key1[i] = key1[i].toUpperCase()
    }
    key1 = key1.concat(key2)
    
    // ABCDEabcde
    
    let res = ''
    for (let i = 0; i < word.length; i++) {
        let ch = word[i]
        if (str.indexOf(ch) > -1) {
            res += key1[str.indexOf(ch)]
        }
    }
    console.log(res)

}