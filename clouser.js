// Example 1

// function outer() {
//     let course = "MERN";
//     function inner() {
//         console.log(course);

//     }
//    return inner();
// }
// const myFunction = outer();
// myFunction();


// Example 2

// function greet(){
//     let name = "Ali"

//     function sayHello(){
//         console.log(name);
        
//     }
//    return sayHello;
// }

// let result = greet();
// result();


// Example 3


// function count(){
//     let count = 0;
//     function increaseCount(){
//         count++;
//         console.log(count);
        
//     }
//     return increaseCount;
// }
// let mycounter = count();
// mycounter();
// mycounter();
// mycounter();
// mycounter();
// mycounter();
// mycounter();
// mycounter();
// mycounter();
// mycounter(); 


// Example 4 real life se related

// function bankBalance(){
//  let balance = 1000;
//  function increseBalance(amount){
//       balance = balance + amount
//  console.log(balance);
 
//     }
//  return increseBalance;

// }
// let deposit = bankBalance();
// deposit(500);
// deposit(300);


// Example 5 mark se related

// function marks(){
//     let mark = 70;
//     function addMarks(newMark){
//     mark +=newMark;
//     console.log(mark);
    
//     }
//     return addMarks;

// }
// let result = marks();
// result(10);
// result(5);
// result(30);


// Example 6 shopping se

// function cart(){
//     let price = 0;
//     function nowPrice(newPrice){
//         price += newPrice;
//         console.log(price);
        
//     } 
//     return nowPrice;
// }
//  let mycart = cart();
//  mycart(500);
//  mycart(200);
//  mycart(300);



// Example 7  login 

function loginSystem(){
    let attempts = 0;
    function newAttempt(){
attempts++;
console.log(attempts);

if (attempts === 3){
console.log("Account Locked");

}
    }
    return newAttempt;

}
let lastAttempt = loginSystem();

lastAttempt();
lastAttempt();
lastAttempt();

