const newArray = [];
const student = [
    {id:1, name:'Sakib'},
    {id:2, name:'Fakhrul'},
    {id:3, name:'Fahim'},
    {id:4, name:'Samsul'},
    {id:5, name:'Jakir'},
    {id:6, name:'Jamil'},
    {id:7, name:'Kasim'},
    {id:8, name:'Bakul'}

];

// for(let i = 0 ; i <student.length; i++){
//     const element = student[i];
//         newArray.push(element.name);
    
// }

// console.log(newArray);

const names = student.map(x => x.name);
console.log(names);

const ids = student.map(sId => sId.id);
console.log(ids);

const biggerIds = student.filter(sId => sId.id > 2);
console.log(biggerIds);

const bigger = student.find(sId => sId.id > 2);
console.log(bigger);