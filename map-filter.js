// const number = [2,3,4,5,6,7,8];
// const output = [];
// for(let i =0; i<number.length; i++){
//   const element = number[i];
//   const result = element * element;
//   output.push(result);
// }
// console.log(output);

// const number = [2,3,4,5,6,7,8];
// const result = number.map(function(element){
//   return element * element;
// })
// console.log(result);

// const number = [2,3,4,5,6,7];
// number.map(function(element,index,array){
//   console.log(element,index,array);
// })

// const number = [2,3,4,5,6,7];
// const result = number.map(x=>x*x);
// console.log(result);

// const number = [2,3,4,5,6,7];
// const bigger = number.filter(x=> x>5);
// console.log(bigger);

const number = [2,3,4,5,6,7];
const bigger = number.find(x=> x>5);
console.log(bigger);