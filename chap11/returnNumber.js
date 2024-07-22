const checkSumOver100=(num1,num2)=>{
    return num1+num2 >100 ?"100を超えています！":"許容範囲内です";
};

console.log(checkSumOver100(50,40));
console.log(checkSumOver100(50,70));