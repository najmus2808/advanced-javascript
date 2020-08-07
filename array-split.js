const num = [1,2,3,4,5,6,7,8];
const part = num.slice(2,5);
console.log(part);
console.log(num);

const num1 = [1,2,3,4,5,6,7,8];
const part2 = num1.splice(2,6);
console.log(part2);
console.log(num1);

const num3 = [1,2,3,4,5,6,7,8];
const part3 = num3.splice(2,6,77,88,99);
console.log(part3);
console.log(num3);

const nums4 = [1,2,3,4,5,6,7,8];
const together = nums4.join(" ");
console.log(together);
