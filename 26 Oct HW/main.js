const userArr = [
    {fname:"chana", username:"chanab", password:"yellow"},
    {fname:"yaakov", username:"yaakovb", password:"green"},
    {fname:"sara", username:"sarab", password:"pink"}

]
const div= document.querySelector("#container");
const submit = document.querySelector("#submit");
var message = "Incorrect password or username";
var password= document.getElementById("password").value
var username= document.getElementById("username").value

submit.addEventListener("click", doesItMatch);


 function doesItMatch(){

    if (document.username.value[0] == userArr.username[0] && (document.password.value[0] == userArr.password[0){
     div.innerHTML=`<h1>Welcome ${fname [0]} </h1>`;


    }else if
         (userArr.username[1] == userArr.password[1]){
            div.innerHTML=` <h1>Welcome ${fname [1]} </h1>`;
   }else if (username[2] == password[2]){
                div.innerHTML=` <h1>Welcome ${fname [2]} </h1>`;
  }else{
    alert (message)}}
