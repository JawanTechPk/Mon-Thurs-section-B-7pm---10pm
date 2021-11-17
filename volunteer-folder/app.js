// // boolean function(){
// // if(){

// //     retun false;
// // }
// //     return true;
// // }
// // Write a function that takes three arguments num1, num2
// // & operator & compute the desired operation. Return and
// // show the desired result in your browser.
// var num1 = +prompt("enter the first number");
// var num2 = +prompt("enter the second number");
// var resultant = 0;
// function computation(num1, num2) {
//   var operations = +prompt(
//     "enter the desired operation 1 for multiply 2 for divide 3 for add 4 for sub 5 for display of inputs"
//   );
//   switch (operations) {
//     case 1:
//       resultant = num1 * num2;
//       document.write("the result of multiplying two inputs are" + resultant);
//       break;
//     case 2:
//       resultant = num1 / num2;
//       document.write("the result of division two inputs are" + resultant);
//       break;
//     case 3:
//       resultant = num1 + num2;
//       document.write("the result of add two inputs are" + resultant);
//       break;
//     case 4:
//       resultant = num1 - num2;
//       document.write("the result of sub two inputs are" + resultant);
//       break;
//     default:
//       document.write(
//         "the first input is : " +
//           num1 +
//           "the second input given by the user is : " +
//           num2
//       );
//   }
// }
// computation(num1, num2);

// var num1=+prompt("enter 1 number");
// var num2=+prompt("enter 2 number");

// function counting(num1,num2){
//     if(num1<num2){
//     for(var i=num1;i<=num2;i++){
//         document.write(i);
//     }
// }
// else{
//     for (var i=num2 ; i<=num1;i++){
//         document.write(i+"<p></p>")
//     }
// }
// }

// counting(num1,num2);

// var str=prompt("Enter a word to search");
// var n=str.length
// function check(){
//     for(var i=0;i<str.length;i++){
//         var n=str.length
//         str[i]==str[n]
//         alert("true")

//     }
// }
// check();


// var str=prompt("Enter a word to search");

// var arr = str.split("")
// var rvrs = arr.reverse()
// var str2 = rvrs.join("")

// if(str == str2){
//     alert("It is a palindrome.")
// }


// var str = "madam";

var str = prompt("enter word")
var str2 = ""

for(var i=str.length-1;i>=0;i--){
    str2+=str[i];
    // str2= str2 + str[i];
}
console.log(str2)
if(str == str2){
    console.log('correct')
}
