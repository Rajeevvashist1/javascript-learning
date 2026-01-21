// //  Literals                                                     // Cunstructors
// //  not single ton                                               //Singleton  object.create()  typs . etc/...


// const mysym = Symbol('key 1')
// let cyrususer = { 
//     UserName : 'Rajeev' ,
//     UserEmail : 'Rajeev@gmail.com' ,
//     Id : 1234,
//     mysym : 'mykey1',
//     IsLoggedIn : false,

//         cyrustwo : {
//             LAstLogin : '25-11-2006',
//         }
// }
// cyrususer.GameName = "King"
// // console.log(cyrususer['UserName'])
// console.log(cyrususer.cyrustwo.LAstLogin);
// console.log(cyrususer.Id.toLocaleString())

// cyrususer.UserEmail = "Vashist@gmail.com"

// console.log(cyrususer.UserEmail)

// // Object.freeze(cyrususer)

// cyrususer.UserEmail = 'rajeevvashist@gamil.com'  // this doesn't changew because before it we have freezed the object 

// console.log(cyrususer.UserEmail)

// cyrususer.Head_position = function(n){
//     if (n >= 0) {
//         console.log(`the head is up by ${n} angles of ${this.Id}`)
//     }
//     else console.log(`the head is done by ${n} angles of ${this.Id}`)
// }

// cyrususer.Head_position(3) ;


// cyrususer.myfunctiontwo = function(n) {
//     console.log(n);
// }

// cyrususer.myfunctiontwo(mysym);

// console.log(cyrususer['mysym'])
// console.log(typeof (cyrususer['mysym']))



// obj1 = { 
//     name : 'Rajeev',
//     reg_no : 123,
//     roll_no : 'PCEA24CS151'
// }
// obj2 = {                                                              
//     name2 : 'Vashist',
//     reg_no2 : 125,
//     roll_no2 : 'PCEA24CS162'
// }

// obj3 = Object.assign({},  obj1 , obj2 )                  //IF WE ARE ASSIGNING TWO OR MORE OBJECTS TO NEW ONE THEN SAME KEY VALUE WILL OVERWRITE THEM AND BECOME ONE 
// console.log(obj3);

// obj3 = {...obj1 , ...obj2}
// console.log(obj3);





//++++++++++++++++++++++      OBJECT DESTRUCTURING   ++++++++++++++++++++++++++




// JSON :-> JSON is simply an object or aarray without name it is used to store or use data

// {
//     'name' : 'Rajeev',
//     'LastLogin' : 'today'
// etc...
// }

// [
//     {}
//     []
//     {}
//     {}
// ]

// let myobj1 = {
//     username : 'rajeev'
// }

// // const {username} = myobj1;

// // console.log(username)
// const {username : name} = myobj1;

// console.log(name)

// let newObject = { 
//     // thiskeyword : console.log(this)
// }
// console.log(newObject.this)
