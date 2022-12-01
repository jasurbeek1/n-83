//? Regural function array function

//! function declaration
// function showThis(){
//     console.log(this);
// }

// showThis()

//! array function
// const showThis2 = () => {
//     console.log(this);
// }
// showThis2()
//? this in regul function vs arrow function in objects

// const obj = {
//     name:`object`,
//     arr:[function(){
//         console.log(this);
//     },
//     () => {
//         console.log(this);
//     }],
//     showThis: function() {
//         console.log(this);
//     },

//     showThis2:() =>{
//         console.log(this);
//     },
//     showThis3(){
//         console.log(this);
//     }
// }
// obj.arr[0]()
// obj.arr[1]()
// obj.showThis()
// obj.showThis2()
// obj.showThis3()


