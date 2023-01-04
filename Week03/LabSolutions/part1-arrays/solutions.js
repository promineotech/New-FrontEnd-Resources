//
// Copyright (c) 2023 Promineo Tech
// Author:  Promineo Tech Academic Team
// Subject:  Arrays Lab
// JavaScript Lab 3 - Arrays (Solutions)
//


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
// Sort the alphabet array from z to a (see built-in array "sort" method)
// Convert it to a string and print it to the console (see join method)

// YOUR CODE BELOW THIS LINE

alphabetArray.sort(); // The sort method takes in an array and returns a sorted array
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