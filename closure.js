function stopWatch(){
    let count = 0;
    console.log('count = '+ count);
    return function(){
        count++;
        console.log('count = '+ count);
        return count;
    }
}

const clock1 = stopWatch();
console.log(clock1);
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopWatch();
console.log(clock2());
console.log(clock1());
console.log(clock2());

