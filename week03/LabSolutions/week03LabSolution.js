//
// Copyright (c) 2023 Promineo Tech
// Author:  Promineo Tech Academic Team
// Subject:  Arrays & Functions Lab
// JavaScript Lab 3 - Arrays & Functions Lab Solution
//

/*
 *  Video 1:  Arrays 
 */


// Question 1: alphabetString
console.log(' \n Question 1: alphabetString \n ');
let alphabetString = 'abcdefghijklmnopqrstuvwxyz'; 
//Convert the alphabetString to an array and print it to the console (see split method)

// YOUR CODE BELOW THIS LINE

let abcArray = alphabetString.split(''); // The split method takes in a string and returns an array
console.log("Q1 Solution: ", abcArray);



// Question 2: alphabetArray
console.log(' \n Question 2: alphabetArray \n ');
let alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// Reorganize the alphabet array from z to a (see built-in array "reverse" method)
// Convert it to a string and print it to the console (see join method)

// YOUR CODE BELOW THIS LINE

 alphabetArray.reverse(); // The reverse method takes in an array and returns a reversed array
 console.log("Q2 Solution: ", alphabetArray.join('')); // The join method takes in an array and returns a string



// Question 3: array1
console.log(' \n Question 3: array1 \n ');
let array1 = [1, 5, 6, 9, 10, 14];
//Using array1 above, solve the following questions
    // a. Print the 3rd element in array1  
    // b. Print the last element in array1
    // c. Add 16 and 3 to array1 (see built-in array "push" method),
    //      and Print the updated array.
    // d. Print the 3rd element again.
    // e. Print the last element again. Did it change from earlier? Are you able to get the last element that was just added?

// YOUR CODE BELOW THIS LINE

console.log('Array1: ', array1);
console.log("Q3 a: 3rd element: ", array1[2]); // Print the 3rd element in array1
console.log("Q3 b: Last element: ", array1[array1.length - 1]); // Print the last element in array1
array1.push(16, 3); // Add 16 and 3 to array1
console.log("Q3 c: Updated array1: ", array1); // Print the updated array
console.log("Q3 d: 3rd element", array1[2]); // Print the 3rd element again
console.log("Q3 e: Last element", array1[array1.length - 1]); // Print the last element again. 


// Question 4:  Todo List
console.log(' \n Question 4: Todo List \n ');
// In this task, you will do multiple tasks. Print results to the console after every change to the array(s).
    // a. Create a variable called myTodoList that holds an empty array
    // b. Add three todo items (elements) to the array using a built-in array method
    // c. Remove the second item (element) in the array
    // d. Create another array, yourTodoList, and add two todo items
    // e. Create another array, ourTodoList
    // f. Combine myTodoList and yourTodoList into ourTodoList (see built-in array "concat" method or "spread" operator for an idea how to accomplish this task). Either method is fine.

// YOUR CODE BELOW THIS LINE


let myTodoList = []; // Create a variable called myTodoList that holds an empty array
console.log('Q4 a: myTodoList', myTodoList);

myTodoList.push('item1', 'item2', 'item3'); // Add three todo items (elements) to the array using a built-in array method
console.log('Q4 b: Pushed 3 items to myTodoList: ', myTodoList);

myTodoList.splice(1, 1); // Removed the second item (element) in the array
console.log('Q4 c: Removed second item from myTodoList: ', myTodoList);

let yourTodoList = ['item4', 'item5']; // Create another array, yourTodoList, and add two todo items
console.log('Q4 d: yourTodoList: ', yourTodoList);

console.log("Two Solutions to Question 4 e&f:");

//Solution with spread operator
let ourTodoList1 = [...myTodoList, ...yourTodoList]; // Create another array, ourTodoList and combine myTodoList and yourTodoList into ourTodoList
console.log("Q4 ef solution 1 -- ourTodoList1: ", ourTodoList1); 

//Solution with concat method
let ourTodoList2 = myTodoList.concat(yourTodoList); // Create another array, ourTodoList and combine myTodoList and yourTodoList into ourTodoList
console.log("Q4 ef solution 2 -- ourTodoList2: ", ourTodoList2);





/*
 *  Video 2:  Functions 
 */


// Question 5:  isEven
console.log(' \n Question 5: isEven \n ');
// Create a function called "isEven" 
    // This function takes in one parameter (x). x will be a number
    // This function will return true if x is even and false if x is odd
    // Numeric value is given as an argument to functions below
    
    // ** Hint: use the % operator to determine if a number is even or odd **

//YOUR CODE BELOW THIS LINE

function isEven(x) {
    if (x % 2 === 0) { // If the remainder of x divided by 2 is 0, then x is even
        return true;
    } else { // If the remainder of x divided by 2 is not 0, then x is odd
        return false;
    }
}

// Sample test cases for the above isEven function (uncomment to test)
// console.log(isEven(2)); //should return true
// console.log(isEven(3)); //should return false
// console.log(isEven(4)); //should return true
// console.log(isEven(5)); //should return false





//Question 6: addingMachine
console.log(' \n Question 6: addingMachine \n ');
// Create a function called addingMachine
    // This function will take in one parameter (array)
    // This function will add up all the numbers from the array 
    //      and return the sum of all the numbers. 
    // An array of numbers is given as an argument to the function below
    //
    // ** Hint: use a for loop to iterate through the array 
    //			and add each element to a variable that holds 
    //			the sum of all the numbers **

// YOUR CODE BELOW THIS LINE

function addingMachine(array) {
    let sum = 0; // create a variable called sum and set it to 0
    for (let i = 0; i < array.length; i++) { // iterate through the array
        sum += array[i]; // add each element to the sum variable
    }
    return sum; // return the sum variable
}

// Sample test cases for the above addingMachine function (uncomment to test)
// console.log(addingMachine([1, 2, 3, 4, 5])); //should return 15
// console.log(addingMachine([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //should return 55
// console.log(addingMachine([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])); //should return 120




// Question 7: reverse
console.log(' \n Question 7: reverse \n ');
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

function reverse(x) { // x is our parameter (i.e. the input or test case)
    if (typeof x === 'boolean') { // if x is a boolean
        return !x; // return the opposite of x
    } else if (typeof x === 'number') { // if x is a number
       return x.toString().split('').reverse().join(''); // return the reverse of x
    } else if (typeof x === 'string') { // if x is a string
        return x.split('').reverse().join(''); // return the reverse of x
    } else if (Array.isArray(x)) { // if x is an array
        return x.reverse(); // return the reverse of x
    } else { // if x is not a boolean, number, string, or array
        return false; // return false
    }
}

// Sample test cases for the above reverse function (uncomment to test)
// console.log(reverse(1234)); //should return 4321
// console.log(reverse('hello')); //should return 'olleh'
// console.log(reverse(true)); //should return false
// console.log(reverse([1, 2, 3, 4])); //should return [4, 3, 2, 1]




// Question 8: removeElements
console.log(' \n Question 8: removeElements \n ');
// Create a function called removeElements - the purpose of this 
//      function is to remove all elements from an array
    // This function will have one parameter (array)
    // In the body of the function, create a while loop. While the array is not empty, remove an element
    // Within the body of the loop, use the pop() method. This pop method should run until the array is empty
    // Return the empty array
    
// YOUR CODE BELOW THIS LINE

function removeElements(array) {
    while (array.length > 0) { // while the array is not empty
        array.pop(); // remove the last element of the array
    }
    return array; // return the array
}

// Sample test cases for the above removeElements function (uncomment to test)
// console.log(removeElements([1, 2, 3, 4, 5])); //should return [] (an empty array)




// Question 9: whichArrayIsLonger
console.log(' \n Question 9: whichArrayIsLonger \n ');
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

function whichArrayIsLonger(array1, array2) {
    if (array1.length > array2.length) { // if array1 is longer than array2
        return array1; // return array1
    } else if (array1.length < array2.length) { // if array2 is longer than array1
        return array2; // return array2
    } else { // if array1 and array2 are the same length
        return false; // return false
    }
}

// Sample test cases for the above whichArrayIsLonger function (uncomment to test)
// console.log(whichArrayIsLonger([1, 2, 3, 4, 5], [1, 2, 3, 4])); //should return [1, 2, 3, 4, 5]
// console.log(whichArrayIsLonger([1, 2, 3, 4], [1, 2, 3, 4, 5, 6])); //should return [1, 2, 3, 4, 5, 6]
// console.log(whichArrayIsLonger([1, 2, 3, 4], [1, 2, 3, 4])); //should return false (because they are the same length)

