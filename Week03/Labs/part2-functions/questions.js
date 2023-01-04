//
// Copyright (c) 2023 Promineo Tech
// Author:  Promineo Tech Academic Team
// Subject:  Functions Lab
// JavaScript Lab 3 - Functions (Questions)
//


// Question 1:  isEven
console.log(' \n Question 1: isEven \n ');
// Create a function called "isEven" 
    // This function takes in one parameter (x). x will be a number
    // This function will return true if x is even and false if x is odd
    // Numeric value is given as an argument to functions below
    //
    // ** Hint: use the % operator to determine if a number is even or odd **

//YOUR CODE BELOW THIS LINE









// Sample test cases for the above isEven function (uncomment to test)
// console.log(isEven(2)); //should return true
// console.log(isEven(3)); //should return false
// console.log(isEven(4)); //should return true
// console.log(isEven(5)); //should return false





// Question 2: addingMachine
console.log(' \n Question 2: addingMachine \n ');
// Create a function called addingMachine
    // This function will take in one parameter (array)
    // This function will add up all the numbers from the array 
    //		and return the sum of all the numbers. 
    // An array of numbers is given as an argument to the function below
    //
    // ** Hint: use a for loop to iterate through the array 
    //		and add each element to a variable that holds 
    //		the sum of all the numbers **

// YOUR CODE BELOW THIS LINE









// Sample test cases for the above addingMachine function (uncomment to test)
// console.log(addingMachine([1, 2, 3, 4, 5])); //should return 15
// console.log(addingMachine([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //should return 55
// console.log(addingMachine([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])); //should return 120




// Question 3: reverse
console.log(' \n Question 3: reverse \n ');
// Create a function called "reverse" 
    // Function takes in one parameter (x)
    // This function will return the opposite of whatever is passed in
    // If it's a boolean, return the opposite
    // If it's a number, return the reverse (i.e. 1234 becomes 4321)
    // If it's a string, return the reversed string (i.e. 'hello' becomes 'olleh'
    // If it's an array, return the reversed array with each element reversed 
    //		(i.e. ['hello', 'world'] becomes ['dlrow', 'olleh']) 
    //		** Hint: see Array.isArray() method **
    // If it's not a boolean, number, string, or array, return false
    //      ** Hint - use the typeof operator to determine the type 
    //                of the parameter **
    // The arguments (test cases) are given below

// YOUR CODE BELOW THIS LINE















// Sample test cases for the above reverse function (uncomment to test)
// console.log(reverse(1234)); //should return 4321
// console.log(reverse('hello')); //should return 'olleh'
// console.log(reverse(true)); //should return false
// console.log(reverse([1, 2, 3, 4])); //should return [4, 3, 2, 1]




// Question 4: removeElements
console.log(' \n Question 4: removeElements \n ');
// Create a function called removeElements - the purpose of this 
//		function is to remove all elements from an array
    // This function will have one parameter (array)
    // In the body of the function, create a while loop. While the array is not empty, remove an element
    // Within the body of the loop, use the pop() method. This pop method should run until the array is empty
    // Return the empty array
    
// YOUR CODE BELOW THIS LINE








// Sample test cases for the above removeElements function (uncomment to test)
// console.log(removeElements([1, 2, 3, 4, 5])); //should return [] (an empty array)




// Question 5: whichArrayIsLonger
console.log(' \n Question 5: whichArrayIsLonger \n ');
// Create a function called whichArrayIsLonger. The purpose of this function is to determine which array has the most elements
    // This function takes in two parameters (array1, array2)
    // You can use conditional statements to determine which array has the most elements
    // This function will return the array that has the most elements
    // If the arrays are the same length, return false
    // Two arrays are given as arguments to the function below
    //
    // ** Hint: check out the array.length property to determine 
    //		the length of the array **

// YOUR CODE BELOW THIS LINE











// Sample test cases for the above whichArrayIsLonger function (uncomment to test)
// console.log(whichArrayIsLonger([1, 2, 3, 4, 5], [1, 2, 3, 4])); //should return [1, 2, 3, 4, 5]
// console.log(whichArrayIsLonger([1, 2, 3, 4], [1, 2, 3, 4, 5, 6])); //should return [1, 2, 3, 4, 5, 6]
// console.log(whichArrayIsLonger([1, 2, 3, 4], [1, 2, 3, 4])); //should return false (because they are the same length)


