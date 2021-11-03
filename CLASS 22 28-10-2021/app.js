

// console.log('Hello World');

// var i;
// for( i = 0; i <= 4 ;i++){
//     console.log('Hello World',i);
// }



// var citytocheck = "Great Falls";
// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];

// for(var i =0; i < 4;i++){
//     if(citytocheck == cleanestCities[i]){
//         console.log('One of the cleanest City',i);
//     }
// }

// var citytocheck = "Great Falls";
// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];

// for(var i =0; i <= 4;i++){
//     if(citytocheck == cleanestCities[i]){
//         console.log('One of the cleanest City',i);
       
//     }else{
//         console.log('Its not on the list',i);
//     }
// }


// var citytocheck = "Tucson";
// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];

// for(var i =0; i <= 4;i++){
//     if(citytocheck == cleanestCities[i]){
//         console.log('One of the cleanest City',i);
//        break;
//     }else{
//         console.log('Its not on the list',i);
//     }
// }




// var matchFound = false
// var citytocheck = "Tucson";
// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];

// for(var i =0; i <= 4;i++){
//     if(citytocheck == cleanestCities[i]){
//         console.log('One of the cleanest City',i);
//         matchFound = true
//     }
// }

// if(matchFound === false){
//     console.log('Its not on the list')
// }


// var matchFound = false
// var citytocheck = "Tucson";
// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
// // console.log(typeof cleanestCities.length)

// for(var i =0; i < cleanestCities.length;i++){
//     if(citytocheck == cleanestCities[i]){
//         console.log('One of the cleanest City',i);
//         matchFound = true
//     }
// }
// if(matchFound === false){
//     console.log('Its not on the list')
// }



// var citytocheck = "Lahore";
// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu","Karachi",
// "Hderabad","Islabamad","Lahore","Peshawar"];
// // console.log(typeof cleanestCities.length)

// for(var i =0; i < cleanestCities.length;i++){
//     // console.log(cleanestCities[i])
//     if(citytocheck == cleanestCities[i]){
//         console.log('One of the cleanest City',i); 
//     }
// }



// for(var i = 0;i < 4 ;i++){
//     for(var j = 0;j < 3;j++){
//         console.log("this is i :" ,i ,"this is j : ",j)
//     }
// }



// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// var FullName = []
// for(var i = 0;i < firstNames.length ;i++){
//     for(var j = 0;j < lastNames.length;j++){
//         // console.log(firstNames[i]+lastNames[j]);
//         FullName.push(firstNames[i]+lastNames[j])
//     }
// }


// console.log(FullName)



// var userName = 'khan';

// console.log(userName.toUpperCase());

// var userName = 'KHAN';

// console.log(userName.toLowerCase());

// var userName = 'khan';

// console.log(userName);


// var citytocheck = prompt('Enter City Name');
// citytocheck = citytocheck.toLowerCase();

// var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu","karachi",
// "hderabad","islabamad","lahore","peshawar"];
// // console.log(typeof cleanestCities.length)

// for(var i =0; i < cleanestCities.length;i++){
//     // console.log(cleanestCities[i])
//     if(citytocheck == cleanestCities[i]){
//         console.log('One of the cleanest City',i); 
//     }
// }


// var cityName = prompt('Enter City name');

// var firstLetter = cityName.slice(0,1);
// var remainingLetter = cityName.slice(1);
// firstLetter = firstLetter.toUpperCase()
// console.log(firstLetter+remainingLetter)


// var month = prompt("Enter month name");

// var charNum = month.length;

// var monAbbr;

// if(charNum > 3){
//     monAbbr = month.slice(0,3);
// }else{
//     monAbbr = month;
// }

// console.log(monAbbr)


var str = prompt("Enter string");

var charNum = str.length;

for(var i = 0; i < charNum; i++){
    if(str.slice(i, i+2) === "  "){
        alert("double spaces found at ===> " + i )
        break;
    }
}
