// let startDate: Date = new Date();
// // let endDate:Date = new Date();
// // let days:number = 7;
// // endDate.setDate(endDate.getDate() +days);
// // console.log("startDate:"+startDate)
// // console.log("endDate:"+endDate)
// // // var result = getDay(new Date(9,12,2019), 0, {weekStartsOn: 1})
// // // console.log(result)
// // console.log(startDate.getDate() )
// let d: Date = new Date(startDate.setDate(0))
// console.log(d)
// // endDate = startDate 
var date = new Date();
var cDate = date.getDate();
var dateToAppend = new Date(cDate.valueOf());
console.log(dateToAppend);
var res = [];
for (var i = 0; i <= 6; i++) {
    dateToAppend.setDate(date.getDate() + i);
    res.push(dateToAppend);
}
console.log(res);
// let startDate:Date = new Date();
// let currentDate = startDate.getDate();
// let dates = [];
// let dateToAppend: Date = new Date(startDate);
// for (let i = 0; i <= 6; i++) {
//   dateToAppend.setDate(currentDate + i);
//   dates.push(dateToAppend);
// }
// console.log(dates);
// let res = new Date();
// res.setDate(date.getDate()+6);
// console.log(res);
