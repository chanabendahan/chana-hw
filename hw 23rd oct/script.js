var fname = prompt("Please enter your first name");
var lname = prompt ("Please enter your Last Name");
var TZ = prompt("Please enter your Teudat Zehut");
const arr = [];

function personInfo (){
    const obj= {};
    obj.fname = fname;
    obj.lname = lname;
    obj.TZ= TZ;
    return obj;
}

arr.push(obj);

confirm("would you like to add another user?");

while (confirm){
    var fname = prompt("Please enter your first name");
var lname = prompt ("Please enter your Last Name");
var TZ = prompt("Please enter your Teudat Zehut");
const arr = [];

function personInfo (){
    const obj= {};
    obj.fname = fname;
    obj.lname = lname;
    obj.TZ= TZ;
}

arr.push(obj);

}

console.log( arr.fname.sort()) 
console.log(arr.lname.sort()) 
console.log (arr.TZ.sort())