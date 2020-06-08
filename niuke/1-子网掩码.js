// https://www.nowcoder.com/practice/de538edd6f7e4bc3a5689723a7435682?tpId=37&tqId=21241&rp=0&ru=/ta/huawei&qru=/ta/huawei/question-ranking

let arr = Array(7).fill(0);
while(input = readline()){
    let strs = input.split('~');
    let ip = strs[0];
    let ym = strs[1];
       
    checkIp(ip,ym);
}
   
function checkIp(ip,ym){
    if(checkYm(ym)){
        arr[5]++;
        return ;
    }
       
    let list = [];
        let num = parseInt(ip);
        if(isNaN(num)){
            arr[5]++;
            return ;
        }else{
            list.push(num);
        }
       
    if(list[0]<=126 && list[0]>=1){
       arr[0]++;
       if(list[0] === 10) arr[6]++;
    }else if(list[0]<=191 && list[0]>=128){
       arr[1]++;
       if(list[0] === 172 && (list[1]>= 16 && list[1]<=31)){
          arr[6]++;
       }
    }else if(list[0]<=223 && list[0]>=192){
       arr[2]++;
       if(list[0] === 192 && list[1] === 168){
          arr[6]++;
       }
    }else if(list[0]<=239 && list[0]>=224){
       arr[3]++;
    }else if(list[0]<=255 && list[0]>=240){
       arr[4]++;
    }
}
   
function checkYm(str){
       let res = str.split('.').reduce((pre,cur)=>pre+ ('00000000'+parseInt(cur).toString(2)).slice(-8),'');
          
       return res.indexOf('1') === -1 || res.indexOf('0') === -1  || res.indexOf('01') !== -1;
}
   
console.log(arr.join(' '));