

// setInterval( function(){ alert('Hello')},5000)


// function myFunc(){ 
//     alert('Hello')
// }


// setInterval( myFunc,5000);



// function myFunc(){ 
//     alert('Hello')
// }


// var funId = setInterval( myFunc,5000);

// console.log(funId,'funId');



// setTimeout(function(){alert('Hello BMJ')},5000);





 //   Stopwatch


 var mili = 0;
 var sec = 0;
 var min = 0;
 var min_heading = document.getElementById("min_Heading")
 var sec_heading = document.getElementById("sec_Heading")
 var miliSec_heading = document.getElementById("miliSec_Heading")
 var interval;

 function timeout(){
     mili++
     miliSec_heading.innerHTML = mili;
     if(mili >= 100){
         sec++
         sec_heading.innerHTML = sec;
         mili = 0
     }else if(sec >= 60){
        min++
        min_heading.innerHTML = min;
        sec = 0
    }
 }
 function start(){
     interval = setInterval(timeout , 10)
     interval;
     var startBtn = document.getElementById("startBtn")
     startBtn.className = "disable"
 }
 function pause(){
     clearInterval(interval)
     var startBtn = document.getElementById("startBtn")
     startBtn.className = "visible"
 }
 function reset(){
     min = 0;
     sec = 0;
     mili = 0;
     min_heading.innerHTML = 0;
     sec_heading.innerHTML = 0;
     miliSec_heading.innerHTML = 0;
     pause()
 }