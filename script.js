// Write a "FizzBuzz" function that takes a number as input and returns a string
// If the number is evenly divisible by 3 (i.e. 3,6,9,12) return the string "Fizz"
// If the number is evenly divisible by 5 (i.e. 5,10,15) return the string "Buzz"
// If the number is evenly divisible by BOTH 3 and 5 (i.e. 15, 30) return the string "FizzBuzz"
// If the number does meet any of the above criteria, return the number as a string

// Bonus: Write "tests" showing that it works (you can just use console.log for this)5


let getValue = function(){

    let n = document.getElementById("myInput").value;

    let y = myfunction(n);

    console.log(y);
};

    function myfunction(x){

        if ((x % 3 ===0) && (x % 5 ===0)){
            return "FizzBuzz";
        }else if(x % 5 === 0){
            return "Buzz";
        }else if(x % 3 === 0){
            return "Fizz";
        }
        else{
            return "No";
        }
    };


    //Tests

    myTest1();
    myTest2();
    myTest3();

 function myTest1(){
    let t = 6;
    let a = myfunction(t);
    let result = "Fizz"

    console.log("Input: " + t + "\nExpected Result: " + result + "\nActual Result: " + a);
 }
 
 function myTest2(){
    let t = 10;
    let a = myfunction(t);
    let result = "Buzz"

    console.log("Input: " + t + "\nExpected Result: " + result + "\nActual Result: " + a);
 }

 function myTest3(){
    let t = 30;
    let a = myfunction(t);
    let result = "FizzBuzz"

    console.log("Input: " + t + "\nExpected Result: " + result + "\nActual Result: " + a);
 }