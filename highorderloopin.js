// key.forEach( (i , index , array) => {
//     console.log(i , index , array)
// })

const nums = [1 ,2 ,3 , 4, 6 ,7] 
// const value = nums.forEach((i) => {
//     if(i < 3){ 
//     console.log(i)}
// })

//FILTER                  

// const value = nums.filter( (i) => {
//     if(i == 3){
//         console.log("Hello duniya")
//     }
//     return  i > 2 && i < 5
// })
// console.log(value)


// ##############             REDUCE :->   FOR ADDING ALL ELEMTS OF A ARRAY OR SPECIFIC TYPE FROM OBJECTS  ###############

// const value = nums.reduce((Accumulator , currentvalue) => (Accumulator + currentvalue) , 0)

// console.log(value)


// let Shoppingcart = [
//     {
//         ItemName : "PS5" ,
//         ItemPrice : 54000 ,
//         ItemQuantity : 3
//     },
//     {
//         ItemName : "XBox" ,
//         ItemPrice : 50000 ,
//         ItemQuantity : 1
//     },
//     {
//         ItemName : "RAM" ,
//         ItemPrice : 570000,
//         ItemQuantity : 2
//     },
// ]

// const TotalQantity = Shoppingcart.reduce( (acc , currvalue) => (acc + currvalue.ItemQuantity) , 0)


// const TotalAmount = Shoppingcart.reduce( (acc , currvalue) => (acc + currvalue.ItemPrice) , 0)

// console.log(`Total items in cart are ${TotalQantity} and the total price for them is ${TotalAmount + 99} with included delivery charge on every item`)



// ############# MAP ################

// MAP IS USED FOR APPLYING SOME OPERATIONS ON THE FUL;L ARRAY 

// NUMBER = [1,2,3,4,5,6,7,8,9] 

// value = NUMBER.map((i) => i + 10)
// // console.log(value)
// value = NUMBER
// .map((i) => i + 10)
// .map(function (i) {return i * 10})
// .filter(function (i) {return i == 150})


// console.log(value)

// console.log(typeof(value)) 