// var userName = "KHAN"

// userName =userName.toLowerCase()

// console.log(userName.toLowerCase());


// var cities = ['karachi','lahore','islamabad','peshawar'];

// var userCity = prompt('Which City do you live?');

// userCity =userCity.toLowerCase()

// for(var i = 0;i<cities.length;i++ ){

//     if(userCity == cities[i]){
//         alert('We found your city '+cities[i])
//     }

// }


// var userName = "umair";

// var firstLetter = userName.slice(0,1);

// firstLetter = firstLetter.toUpperCase();

// var RemainLetter = userName.slice(1);
// var updateName = firstLetter+RemainLetter

// console.log(updateName);


// var userName = "uMaIr";

// var userName = prompt('Your Name');

// var firstLetter = userName.slice(0,1).toUpperCase();

// // firstLetter = firstLetter.toUpperCase();

// var RemainLetter = userName.slice(1).toLowerCase();
// var updateName = firstLetter+RemainLetter

// console.log(updateName);



// var months = ['jan','feb','mar','apr','may','jun','jul',
// 'aug','sep','oct','nov','dec'];

// var userMonth= prompt('Enter your month');
// var updateMont = userMonth.slice(0,3).toLowerCase()

// for(var i = 0;i<months.length;i++){

//     if(updateMont==months[i]){

//         alert('Month found'+i)

//     }
// }



// var text = "changed the political alignment and social structure of the globe. The United Nations (UN) was World War II established to foster international co-operation and prevent future conflicts, and the victorious great powers—China, France, the Soviet Union, the United Kingdom, and the United States—became World War II the permanent members of its Security Council";
// // console.log(text.slice(156+12))

// for(var i = 0;i<text.length;i++){
//     if(text.slice(i,i+ 12) == "World War II"){
//         text = text.slice(0,i) + "the Second World War"+text.slice(i+12);
// // console.log('Found',i)
//     }
// }

// console.log(text)


// var text = "changed the political alignment and social structure of the globe. The United Nations (UN) was World War II established to foster international co-operation and prevent future conflicts, and the victorious great powers—China, France, the Soviet Union, the United Kingdom, and the United States—became World War II the permanent members of its Security Council";
// // console.log(text.slice(156+12))

// var userWord = prompt('Enter Word');

// for(var i = 0;i<text.length;i++){
//     if(text.slice(i,i+ userWord.length) == userWord){
//         text = text.slice(0,i) + "the Second World War"+text.slice(i+userWord.length);
// // console.log('Found',i)
//     }
// }

// console.log(text)



// var text = "changed the political alignment and social structure of the globe. The United Nations (UN) was World War II established to foster international co-operation and prevent future conflicts, and the victorious great powers—China, France, the Soviet Union, the United Kingdom, and the United States—became World War II the permanent members of its Security Council";
// // console.log(text.slice(156+12))

// var userWord = prompt('Enter Word');
// var replace = prompt('Enter Replace Word');

// for(var i = 0;i<text.length;i++){
//     if(text.slice(i,i+ userWord.length) == userWord){
//         text = text.slice(0,i) + replace +text.slice(i+userWord.length);
// // console.log('Found',i)
//     }
// }

// console.log(text)



// var text = "changed the political alignment and social structure of the globe. The United Nations (UN) was World War II established to foster international co-operation and prevent future conflicts, and the victorious great powers—China, France, the Soviet Union, the United Kingdom, and the United States—became World War II the permanent members of its Security Council";



// var ind = text.indexOf("World War II")

// if(ind != -1){
//             text = text.slice(0,ind) + "the Second world war" +text.slice(ind+12);
// }

// console.log(text);



// var text = "changed the political alignment and social structure of the globe. The United Nations (UN) was World War II established to foster international co-operation and prevent future conflicts, and the victorious great powers—China, France, the Soviet Union, the United Kingdom, and the United States—became World War II the permanent members of its Security Council";



// var ind = text.lastIndexOf("World War II")


// console.log(ind);




// var text = "changed the political alignment and social structure of the globe. The United Nations (UN) was World War II established to foster international co-operation and prevent future conflicts, and the victorious great powers—China, France, the Soviet Union, the United Kingdom, and the United States—became World War II the permanent members of its Security Council";



// // var findWord = text.slice(5,6)


// // console.log(findWord);

// var findWord = text.charAt(text.length-1)


// console.log(findWord);



// var text = "changed the political alignment and social structure of the globe. The United Nations (UN) was World War II established to foster international co-operation and prevent future conflicts, and the victorious great powers—China, France, the Soviet Union, the United Kingdom, and the United States—became World War II the permanent members of its Security Council";



// var updateText = text.replace("World War II","the Second world war");

// console.log(updateText)


// var text = "changed the political alignment and social structure of the globe. The United Nations (UN) was World War II established to foster international co-operation and prevent future conflicts, and the victorious great powers—China, France, the Soviet Union, the United Kingdom, and the United States—became World War II the permanent members of its Security Council";



// var updateText = text.replace(/World War II/g,"the Second world war");

// console.log(updateText)