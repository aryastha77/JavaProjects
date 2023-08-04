let changeTitle= document.getElementById("title");
let nameField= document.getElementById("nameField");
let emailField= document.getElementById("emailField");
let passField= document.getElementById("passField");
let compassField= document.getElementById("compassField");
let signupBtn= document.getElementById("signupBtn");
let signinBtn= document.getElementById("signinBtn");
let input = document.querySelector(".input-field");
let submitBtn = document.querySelector(".submit");

nameField.addEventListener("keyup", (e)=>{
    if(e.keyCode === 13){
        alert(e.target.value)
    }
})

emailField.addEventListener("keyup", (e)=>{
    if(e.keyCode === 13){
        alert(e.target.value)
    }
})

passField.addEventListener("keyup", (e)=>{
    if(e.keyCode === 13){
        alert("Password Entered")
    }
})

submitBtn.onclick = function () {
    console.log("passField value:", passField.value);
    console.log("compassField value:", compassField.value);
    
    if (passField.value === compassField.value){
        alert("Password Matched");
    }else{
        alert("Password not matched");
    }
};

signinBtn.onclick = function(){
    nameField.style.maxHeight="0";
    changeTitle.innerHTML="Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
}

signupBtn.onclick = function(){
    nameField.style.maxHeight="65px";
    changeTitle.innerHTML="Sign Up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
}

if (passField.value.match[/[A-Z]/]){
    console.log ("Matched")
}
// submitBtn.onclick = function () {
//         if (passField.value === compassField.value){
//             alert("Password Matched")
//         }else{
//             alert("Password not matched")
//         }
// };

// if (passField == compassField){
//     compassField.addEventListener("keyup", (e)=>{
//         if(e.keyCode === 13){
//             alert("Password Matched")
//         }
//     })
// }
