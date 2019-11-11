// // Returns an array of dates between the two dates
// var getDates = function(startDate, endDate) {
//   var dates = [],
//       currentDate = startDate,
//       addDays = function(days) {
//         var date = new Date(this.valueOf());
//         date.setDate(date.getDate() + days);
//         return date;
//       };
//   while (currentDate <= endDate) {
//     dates.push(currentDate);
//     currentDate = addDays.call(currentDate, 1);
//   }
//   return dates;
// };
// // Usage
// var dates = getDates(new Date(2019,1,1), new Date(2019,1,10));                                                                                                           
// dates.forEach(function(date) {
//   console.log(date);
// });
// function (startDate, endDate, addFn, interval) {
//  addFn = addFn || Date.prototype.addDays;
//  interval = interval || 1;
//  var retVal = [];
//  var current = new Date(startDate);
//  while (current <= endDate) {
//   retVal.push(new Date(current));
//   current = addFn.call(current, interval);
//  }
//  return retVal;
// }
var interval = interval || 1;
console.log(interval);
var i = 1;
console.log(i);
