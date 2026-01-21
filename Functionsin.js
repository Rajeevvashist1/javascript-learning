// TYPES FOR DEFINING FUNCTIONS 

// console.log(MyFunction.username)   // cant use before initializing or acessing 
// const MyFunction = function() {
//     username : 'Rajeev'
// }

//2nd way  

//we can use username or any part of the function 2 before accesing but an't in 1 st way  
// console.log(MyFunction2())
// function MyFunction2(){
//     username =  'Rajeev'
//     return username 
// }


// FOR MANY ARGUMENTS MORE THAN PARAMETERS 

// function myfunction(...num){ '// this is called REST it look likes aS SPREAD BUT WORKS DIFFRENT
//     return num;
// }

// console.log(myfunction(100,200,300,400,500,600,700,'rajeev' , true))


// WE GET ARRAY OF THOSE VALUE YOU GAVE A S ARUGMENTS THEN WE CAN APLY FUNCTIOND]S ON THAT


// const myfunction = function(anyobject){
//     return anyobject.userid;
// }

// const myfunction2 = function(anyarray){
//     if(!anyarray[2]) return -1
//     return anyarray[2]
// }

// let my_obj1 = {
//     username : 'Rajeev',
//     userid : 1234
// }

// my_array = [ 1]

// console.log(myfunction(my_obj1))
// console.log(myfunction2(my_array))


// console.log(myfunction({
//     username : 'Rajeev',
//     userid : 1234566789
// }))

// console.log(myfunction2([1,2,3,4,5]));


//        THIS  key word works deiffrently for objects and functions  
// function MyNewFunction(){
//     console.log(this)
// }

// MyNewFunction()


// +++++++++++++++++++++++++++++++++++++++++++++++++  ARROW FUNCTIONS ++++++++++++++++++++++++++++++++++++++++++++

//Arrow functions are used because they are short code and simple and use for small program 

// method to define arrow function :->>

// const newFunction = () => {}   //just remove the function keyword from the function declration and add an arrow (=>)

// Addtwo = (num1 , num2) => num1 + num2 // if we are declaring the function in one line then we dont need to write the {} and the return keyword 
// //Addtwo = (num1 , num2) => (num1 + num2)

// Addtwoagain = (num1 , num2 ) => {
//     return num1 + num2
// }


// console.log(Addtwo(3 , 97))
// console.log(Addtwoagain(3 , 97))

