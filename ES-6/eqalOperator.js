// function demo(){
// let data = document.getElementById('auto').value;
// // console.log(data)
// // var result = data;
// // i 
//  let basic = [];
//  for(var i=0;i<data.length;i++){
//     // if(a <= 5){
//     //     // console.log(a)
//     //     return true;
//     // }
//     basic.push(i);
//     console.log(basic);
//  }
// }
const myArray = [1,2,3,4,5,6,7];
myArray.filter(item=>{
    if(item % 2 === 0){
    console.log(item);
    }
})
var a = myArray.map(item=>{
    return item * 2;  
})
console.log(a);