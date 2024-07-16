let scoreList = new Set();

scoreList.add(30);
scoreList.add(31);
scoreList.add(29);
scoreList.add(30);
scoreList.add(32);

let count = scoreList.size;
console.log("要素数"+count);

for(let element of scoreList){
    console.log(element);
}