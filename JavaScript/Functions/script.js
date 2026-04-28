// what is function 
// agar ham code likhe hai wo turant chal jata hai example
// console.log("hey")
// but we want button click karne pe wo code chale like ac not apne aap 

// now using function :
function dance(){
    console.log("hey")
    console.log("hey")
    console.log("hey")
    console.log("hey")

}
dance();

// ways to create function 
function abc(){

}
abc() // this is called declaration 

// methods to call a function 
function abs(){

}

// function expression method- yaha we store the function in a variable 
let fnc= function(){

}

// fat arrow method 
let abc= ()=>{


// we want to change value
function dance (v1){ // v1 here is parameter jaha functions main de rahe
    console.log(`${v1} lets dance`)
}
dance('horse');
dance('deer')// this is arguements- jaha real values de rahe

function sum(v1, v2){
    console.log(v1+v2)
}
sum(100, 50)







    

// Default, rest and spread parameters 
function sum (v1=90 , v2=100){ // when we define parameters here its called default 
    console.log(v1 + v2)
}
sum()




// REST PARAMETER- jab arguments zyada ho utne hi parameters banane padenge to avoid that we use rest
// example- function abcd(a,b,c,d etc){
// }
// abcd(20,10,29,92,56.76,87) since yaha 6 arugments and waha upar 6 parameters paas karna padega what if its more so to avoid that we write as 

function abcd(...val){
console.log(val)
}
abcd(20.120,90,65,34,87,100,23,25,27,98,10,11,12)
 // this ... is also used in spread but how to know whether it is spread when its used in arrays and objects













 // RETURN AND EARLY RETURN 
 // return matlab jaha se aaya hai wahi daal dungi 
 function abcd(){
    return 12;
 }






 abcd()







 // First class function
 // treated as value can be stored in variable +functions
 function abcd (val){
    val()
 }

 abcd(function(){
    console.log("hey")
 })




// Higher order functions 
 //wo function jo return kare function ya fir accept kare ek funcion apne parameter main

 function (val){ // its hof bbecause value acccept kar raha in parameter

 }
 abcd()
