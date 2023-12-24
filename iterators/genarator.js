function* makeRangeIterator(start=0, end = Infinity, step = 1){
     let iterationCount = 0;
     for (let i = start; i < end; i +=step){
        iterationCount++;
        yield i;

     }
     return iterationCount;
}

const one = makeRangeIterator(1, 10,1)

for (let val of one){
    console.log(val)
}