// ALL THE WHIE, DO WHILE AND FOR LOOP ARE SAME 

// while (condition) {
    
// }

// do {
    
// } while (condition);

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

//#######       FOR OF LOOP        ###############

//USED FOR ARRAYS AND MAP 

const myarray = [1 , 2, 3,4 ,5]

for (const element of myarray) {
    // console.log(element)
}

const map = new Map() 

map.set(+91, "India")
map.set( 92 , 'australia')
map.set("911" , "USA")

// console.log(map)

for(const [key , value] of map){
    //console.log(key , value)
}

//WE USE FORIN LOOP FOR ITERATING OBJECTS 

// let Myobject = {
//     name : "Rajeev ",
//     age : 20 , 
//     State :"Haryana",
//     "village" : "khol" ,
//     college : "pce"
// }

// console.log(Myobject)

// for(const key in  Myobject){
//     // console.log(Myobject[key])
//     //console.log(`detAILS OF STUDENTS IS ${key} :-> ${Myobject[key]}`)
// }


//   ############     FOREACH LOOP     ##########
let MyArray = [
    Myobject1 = {
    name : "Rajeev ",
    age : 20 , 
    State :"Haryana",
    "village" : "khol" ,
    college : "pce"
},
    Myobject2 = {
    name : "Rohit ",
    age : 20 , 
    State :"Bihar",
    "village" : "kh" ,
    college : "pce"
},
    Myobject3 = {
    name : "Yash",
    age : 20 , 
    State :"Rajasthan",
    "village" : "Sanganer" ,
    college : "pce"
}
]

// MyArray.forEach(function (item) {
// console.log(item.name ,item.college , item.State)
// })

// function forprinting(item) {
//     console.log(item.name)
// }

// MyArray.forEach(forprinting);



const key = ["Greetings"]

// for(const i of key){
//     console.log(i)
// }
// console.log("\n");

// for(const i in key){
//     console.log(key[i])
// }

