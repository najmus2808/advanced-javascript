const num3 = 20;
function sum(num1,num2){
    const add = num1 + num2;
    console.log(add);
    console.log(num3);

    if(add>10){
        console.log("yes add is greater!");
        const num4 = 25;
        console.log(num4);

        var num5 = 30;
    }
        console.log(num5);
        console.log(num4); // this is not acceptable.

    return add;

}

const result = sum(5,7);
console.log(result);
console.log(num3);
console.log(add); //not acceptable because of local add is local scope.
