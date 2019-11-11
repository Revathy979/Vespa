// import { start } from "repl";
// let i: Date = new Date();
// let e: any = i.setDate(i.getDate()+ 1)
// for( i = startDate;i<endDate;i = e){
//     console.log(i)
// }
// var itr = moment.twix(new Date('2012-01-15'),new Date('2012-01-20')).iterate("days");
// var range=[];
// while(itr.hasNext()){
//     range.push(itr.next().format("YYYY-M-D"))
// }
// console.log(range);
// let d: Date = new Date();
// let day: any = d.getDay();
// let diff: any = d.getDate() - day + (day == 0 ? -6 : 1);
// let startDate: Date = new Date(d.setDate(diff));
// let endDate: Date = new Date();
// let days: number = 3;
// endDate.setDate(endDate.getDate() + days);
// console.log(startDate)
// console.log(endDate)
// let dateMove:Date=new Date(startDate.setDate(startDate.getDate() - 1))
// let listDate = [];
// let stDate = dateMove;
// while (stDate < endDate) {
//     let stDate: Date = new Date(dateMove.setDate(dateMove.getDate() + 1))
//     console.log(stDate)
//     listDate.push(stDate)
// }
// console.log(listDate)
// startDate.toISOString().substring(0,10);
// endDate.setDate(endDate.getDate() +days);
// endDate.toISOString().substring(0,10)
// console.log(startDate)
// console.log(endDate)
var listDate = [];
var startDate = '2017-02-01';
var endDate = '2017-02-10';
var dateMove = new Date(startDate);
var strDate = startDate;
while (strDate < endDate) {
    var strDate = dateMove.toISOString().slice(0, 10);
    listDate.push(strDate);
    dateMove.setDate(dateMove.getDate() + 1);
}
console.log(listDate);
