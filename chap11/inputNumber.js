const printFormattedNum=(num)=>{
    const formattedNum = typeof num === "number"? num.toLocaleString():"数値を入力してください";
        console.log(formattedNum);
};

printFormattedNum(1300);
printFormattedNum("1300");