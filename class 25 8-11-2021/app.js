
// var rightNow = new Date();
// console.log(rightNow)

// var str = rightNow.toString()
// console.log(str)

// var rightNow = new Date();
// var day = rightNow.getDay()
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// console.log(day)


// var rightNow = new Date();
// var month = rightNow.getMonth()
// console.log(month)

// var rightNow = new Date();
// var date = rightNow.getDate()
// console.log(date)


// var rightNow = new Date();
// var hour = rightNow.getHours()
// console.log(hour)


// var rightNow = new Date();
// var miliSec = rightNow.getTime()

// var numDays = miliSec/(1000*60*60*24);
// var numDays =  Math.round(numDays)
// console.log(numDays)


// var rightNow = new Date();
// var hour = rightNow.getHours()
// var min = rightNow.getMinutes()
// var sec = rightNow.getSeconds()

// console.log(hour + " : " + min + " : " + sec)


var today = new Date();
var futureDay = new Date("january 25, 2045");


var msToday = today.getTime()
var msFutureDay = futureDay.getTime()

var remainingTime = msFutureDay - msToday;

var remainingTime = Math.round(remainingTime / (1000 *60*60*24))
console.log(remainingTime)

// var today = new Date();

// console.log(today);

// today.setFullYear(2000)

// today.setMonth(5)

// console.log(today)






 