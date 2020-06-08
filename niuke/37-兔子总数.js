// https://www.nowcoder.com/practice/1221ec77125d4370833fd3ad5ba72395?tpId=37&tqId=21260&rp=1&ru=/activity/oj&qru=/ta/huawei/question-ranking

// #include <iostream>
// using namespace std;
// int main()
// {
//     int month;
//     while(cin >> month)
//     {
//         int shu3 = 0;//成熟了的可以生兔子的兔子数量，即成熟度是3及以上的
//         int shu1 = 1;//新生的成熟度为1的兔子数量
//         int shu2 = 0;//差一个月就成熟的成熟度为2的兔子数量
         
//         //这里一定是--month
//         //因为初始三个值已经是第一个月的数了，所以循环少一个月
//         while(--month)
//         {
//             shu3 += shu2;//之前熟了的兔子加上两个月熟的兔子就是所有熟兔子
//             shu2 = shu1;//两个月的成熟度的兔子都是新生兔子变的
//             shu1 = shu3;//新生兔子都是成熟了的兔子生的
//         }
//         cout << shu1 + shu2 + shu3 << endl;
//     }
//     return 0;
// }

// ===

// 根据上面思路写的

while(n = readline()) {
  let num1 = 1
  let num2 = 0
  let num3 = 0
  let i = 1
  while(i < n) {
      num3 += num2
      num2 = num1
      num1 = num3
      i++
  }
  console.log(num1 + num2 + num3)
}