let jobs = new Date(2011,9,5);

console.log("ジョブズの命日:"+ jobs.toDateString());
console.log("ジョブズの命日:"+ jobs.toLocalDateString());

let month = jobs.getMonth();
jobs.setMonth(month+1);
console.log("1か月後:"+jobs.toLocalDateString());

let date =jobs.getDate();

jobs.setDate(date-6);
console.log("６日前:"+jobs.toLocalDateString());