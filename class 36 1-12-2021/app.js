// var obj = {
//     institute : "BMJ",
//     location : "Siut",
//     students : ["Ahmed", "Sufyan", 45],
//     abc : {
//         name: "Musadiq",
//         age: 15
//     }
// }

// // obj.location = "Siut"

// // obj.institute = "JAWAN PAKISTAN"

// console.log(obj.students[3])

var accounts = []

function signUp(){
    var mail = document.getElementById("email")
    var pass = document.getElementById("password")
    if(mail.value != "" && pass.value != ""){
        var credentials = {
            email : mail.value,
            password : pass.value
        }
        accounts.push(credentials)
        console.log(accounts)
    }
}


function login(){
    var flag = true;
    var loginEmail = document.getElementById("loginEmail").value
    var loginPass = document.getElementById("loginPassword").value
    for(var i = 0; i < accounts.length; i++){
        if(loginEmail == accounts[i].email){
            flag = false;
            if(loginPass == accounts[i].password){
                alert("Login Successful")
            }
            else{
                alert("Incorrect Password")
            }
        }
    }
    if(flag){
        alert("Email doesnt exist");
    }
}