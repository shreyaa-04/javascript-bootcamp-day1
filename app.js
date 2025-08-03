let a=[3,4,-5,-6,7];
//for(let i=0;i<=10;i++){
  //a.push(i*3);
//}
let sum =0;
//for(let i=1;i<=10;i++){
  //if(a[i]%5===0){
  //sum+=a[i];

  //}
//} 
//console.log("sum of all numbers:",sum);
// for(i=0;i<a.length;i++){
//   if(a[i]>0){
//     sum+=a[i];
//   }
// }
// console.log("sum of all numbers:",sum);
// let arr =[3,4,-5,-6,7];
// let positiveSum=arr.filter(x=>x>0).reduce((a,x)=>a+x);
// console.log(positiveSum);
const users =[
  {name:"Shreya",age:20},
  {name:"Nalini",age:21},
  {name:"Advita",age:22},
];
const totalAge = users.reduce((sum, user) => sum + user.age, 0);
const averageAge = totalAge / users.length;

console.log("Average Age:", averageAge);