// Write a "FizzBuzz" function that takes a number as input and returns a string
// If the number is evenly divisible by 3 (i.e. 3,6,9,12) return the string "Fizz"
// If the number is evenly divisible by 5 (i.e. 5,10,15) return the string "Buzz"
// If the number is evenly divisible by BOTH 3 and 5 (i.e. 15, 30) return the string "FizzBuzz"
// If the number does meet any of the above criteria, return the number as a string

// Bonus: Write "tests" showing that it works (you can just use console.log for this)

document.getElementById("myButton").onclick = function(){

    var num = getElementById("#myInput");

    if (num%3 === 0){
        document.write("Fizz");
        console.log("Fizz")

    } else (num%5 === 0){
        document.write("Buzz");
        console.log("Buzz")
    }
}

