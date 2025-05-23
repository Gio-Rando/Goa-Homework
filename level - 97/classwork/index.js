const names = ["Liam", "Emma", "Noah", "Olivia", "Ava", "William", "Sophia", "James", "Isabella", "Benjamin"];

names.forEach((curValue, index) => {
    if(index % 2 === 0) {
        console.log(`${curValue} is on even index`);
    } else {
        console.log(`${curValue} is on odd index`);
    }
})

for(i of names){
    if(i % 2 === 0) {
        console.log(`${i} is on even index`);
    } else {
        console.log(`${i} is on odd index`);
    }
}

for(let i = 0;i<names.length;i++){
    if(i % 2 === 0) {
        console.log(`${names[i]} is on even index`);
    } else {
        console.log(`${names[i]} is on odd index`);
    }
}

numbers = [1,6,3,7,9,33,8,2566,6,5,335]

const mapFunc = (curValue, index, curArray) => {
    if(index % 2 == 0){
        return Math.floor(curValue / 2)
    }
    else{
        return curValue * 2
    }
}

const map = (array, func) => {
    for(let i = 0; i < array.length; i++) {
        console.log(func(array[i], i, array));
    }
}

map(numbers, mapFunc)