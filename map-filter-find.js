const numbers = [2,3,4,5,6,7,8,9];
// const newArray = []
//  for (let i=0; i<numbers.length;i++){
//      const element = numbers[i];
//      const result = element * element;
//      newArray.push(result);
//  }

//  console.log(newArray);

// function squre(element){
//     return element * element;
// }

// const result = numbers.map(squre);
// console.log(result);

// const result1 = numbers.map(function(element){
//     console.log(element);
// })

// const result2 = numbers.map(function(element,index,array){
//     console.log(element,index,array);
// })

// const result3 = numbers.map(function(element){
//     return element * element;
// })

// console.log(result3);

// const squre = element => element * element;
// const squre = x => x * x;


const squre = numbers.map(x => x * x)
console.log(squre);

const bigger = numbers.filter(x => x > 5);
console.log(bigger);

const bigger2 = numbers.find(x => x > 5);
console.log(bigger2);