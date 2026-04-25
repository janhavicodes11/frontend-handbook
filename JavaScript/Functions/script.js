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

