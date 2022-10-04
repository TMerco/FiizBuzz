// Write a "FizzBuzz" function that takes a number as input and returns a string
// If the number is evenly divisible by 3 (i.e. 3,6,9,12) return the string "Fizz"
// If the number is evenly divisible by 5 (i.e. 5,10,15) return the string "Buzz"
// If the number is evenly divisible by BOTH 3 and 5 (i.e. 15, 30) return the string "FizzBuzz"
// If the number does meet any of the above criteria, return the number as a string

// Bonus: Write "tests" showing that it works (you can just use console.log for this)


let getValue = function(){

    let n = document.getElementById("myInput").value;

    if ((n % 3 ===0) && (n % 5 ===0)){
        console.log("FizzBuzz");
    }else if(n % 5 === 0){
        console.log("Buzz");
    }else if(n % 3 === 0){
        console.log("Fizz");
    }
    else{
        console.log("No")
    }
};

//Tests

let num1 = 15
let num2 = 10
let num3 = 6
console.log(num2);