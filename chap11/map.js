const nameArr=["主田","崎岡","後藤"];

const newNameArr=nameArr.map((name)=>{
    if(name==="主田"){;
    return name;
}else{
    return '${name}さん';
}
});

console.log(newNameArr)