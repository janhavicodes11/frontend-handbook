// problems with var 
//let a=10
//let a=20 // thos shows an error because we cannot redeclare a variable with let keyword that will save us from errors
// whereas in var you can redecale the variable and it will not show any error but it will override the previous value of a and assign the new value to a

//var a =12  window main add hogya
//let a=12 // window main add nahi hua 





//Scope(aapka dayra kaha tak hai means aapka variable kaha tak access ho sakta hai)(types-globals, block, function)
//var a=10 //this is global variable khole main declare kiya hai  and within no curly braces



//block scope
//{
    //var b=20 ye block hai because within curly braces+ var  wont respect  block scope it only respect function scope so var kahi bhi ye use ho sakta hai
    //let a=20 // ye respect karta hai block scope ki because ye khud hai ek block hai so yaani isse block main we can use this let 12 not anywhere else

//}


// functiional scoped-
//function abcs (){
    //var c=30 // this is function scoped variable yaani ye pure function main access ho sakta hai but function ke bahar access nahi ho sakta hai
//}




// Reassignment and redeclaration :- 
//var a=10
//a=20 // this is reassignment because we are changing the value of a from 10 to 20
//var a=30 // this is redeclaration because we are declaring the variable a again and assigning it a new value of 30





// Temporal Dead Zone (TDZ) :- utna area jitne mein js ko pata to hai ki variable exist karta hai par wo aapko value nahi de sakta
//console.log(a)








// this area between line 44 till 53 is tdz zone 
//let a= 12;

//Hosting impact per type -
//console.log(a)
//var a=10;




//Data types :-
// Primitive- string, number, boolean, null, undefined, symbol, bigInt 
// primitive- values jinhe copy karne par real value milti hai
//Reference- object, array, function- aise saare data types inko copy karne main real value nahi milti instead we get its parents value 


//var a = 12;
//var b = a; 
//console.log(a);
//console.log(b);

//let a= [1,2,3,4]
//let b = a;

//single quote= ''
//double quotes= '' ''
//backticks= ``

// null yaani aapne jaan bughkar value nahi di 
// undefined yaani aapne variable banaya but usse value nahi di  so jo value bydefault mile 
//let a; // this is undefined because we have not assigned any value to a so by default it will be undefines 
//console.log(a);

// symbol- uniue immnutable value 
//let u1= Symbol('janhavi');

//BigInt- this is used to store large integers that are beyond the range of the number data type

//let a= 9007199254740991n;


// Reference data types- changes are done in the reference value not in the real value
//array 
//let a=[1,2,3,4]
//let b=a; 

//object 
//let a= {
   // name: 'janhavi',
//}
//let b=a;


//Dynamic type - Js main static typing nahi hai  that means aap data ko change kar saktey ho kyuki yaha par dynamic data types hai 
let a= 12;
a=true ;
 console.log(a);



 //since yaha ham state nahi kar rahe ki int hai bollean hai etc we can put any values

 // type coercsion concept jismain aapka ek type automatically convert hojayega 
 // "5"+1 will give 51 as yaha + will act as concetination


// OPERATORS:- 
 // Aritthematic operators :
 //+ - * / % ** ++ --
 // /= it retuens quotiens 
 // %= returns reminder 
  
 //let a= 2;
 //let b=3;
 //console.log(a**b); // returns 8 


 // Comparsion operators :
// =, ==, ===, !=, !==, >, <, >=, <=

// in js = is giving value to a variable
// 12== '12' // this will return true because it is only checking the value and not the type, its not strict compariosion 
// 12=== '12' // this will return false because it is checking both value and type and here the type is different so it will return false
// 12!=13 //this will return true because the value is different

// 12!=="12" // this will return true because the value is same but the type is different so it will return true
// 12!="12"// return true

// assignment operators :
// = assign value to a variable
// +=, -=, *=, /=, %=, **=

//let a=10;
//a+=3; // it mean 10 main add 3 kar do so a will become 13

//let b=15;
//b-=5; // it means 15 main se 5 minus kar do so b will become 10
//b*=2; // it means 10 ko 2 se multiply kar do so b will become 20
//b/=2; // it means 20 ko 2 se divide kar do so b will become 10
//b%=3;
// it means 10 ko 3 se divide kar do and return the reminder so b will become 1



// Logical operators :
// &&, ||, !
 // AND Operator- && if both conditions are true then it will return true otherwise it will return false
 // OR Operator- || if any one of the condition is true then it will return true otherwise it will return false
// NOT Operator- ! it will return the opposite of the condition if the condition is true then it will return false and if the condition is false then it will return true


// Urany operator :


// IMp- if we write as +"Janhavi" then wo NAN main convert hoga


// Unary operator: 
// + - typeof ++ --
 

// Ternary operator :
//?: 
// Exp- 12>13 ? console.log("true"): console.log("false") // this will return false because 12 is not greater than 13 so it will execute the second part of the ternary operator and print false


// Instanceof operator :
// it is used to check whether an object is an instance of a particular class or not
// like main apne parents ki beti ho ya nahi 
// Example : let b={}
 b instanceof Object // this will return true because b is an instance of Object classdhhdhhd

Imp: instanceof works only on reference data types not on primitive data types because primitive data types are not objects and they do not have a prototype property so they cannot be instances of any class
