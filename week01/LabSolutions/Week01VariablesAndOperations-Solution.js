//
// Copyright (c) 2023 Promineo Tech
// Author:  Promineo Tech Academic Team
// Subject:  Variables and Operations Lab
// JavaScript Week 01 Lab  
//


//	1. Number of Seats on a Plane:
//		Create a variable to hold the quantity of available plane seats left on a flight
let availablePlaneSeats = 6;

		
//	2. Cost of Groceries:
//		Create a variable to hold the cost of groceries at checkout
let costOfGroceries = 23.64;


//	3. Middle Initial:
//		Create a variable to hold a person's middle initial
let middleInitial = 'G';


//	4.  Is it Hot Outside?
//			Create a variable to hold the following values:
//				1. true if it's hot outside
//				2. false if it's cold outside
let isHotOutside = false;


//	5.  First Name:
//			Create a variable to hold a customer's first name
let customerFirstName = "Sally";


//	6.  Street Address:
//			Create a variable to hold a street address
let streetAddress = "1234 W Easy St";

//	7.  Print Variables:
//			Print all declared variables to the console
console.log("Question 7:  Print all of the variables that you have declared")
console.log("--------------------------------------------------------------")
console.log("Question 1:  Number of Seats on a Plane");
console.log("Available seats left on the plane: " + availablePlaneSeats);


console.log("Question 2:  Cost of Groceries");
console.log(costOfGroceries + " is the price for groceries.");


console.log("Question 3:  Middle Initial");
console.log("The person's middle initial is " + middleInitial);


console.log("Question 4:  Is it Hot Outside?");
console.log("It is hot outside - " + isHotOutside);


console.log("Question 5:  First Name");
console.log("The customer's first name is " + customerFirstName);


console.log("Question 6:  Street Address");
console.log(streetAddress + " is where the person lives.");



//	8.  Remove Plane Seats:
//			A customer booked 2 plane seats, 
//			remove 2 seats from the available seats variable
availablePlaneSeats = availablePlaneSeats - 2;
availablePlaneSeats -= 2;
console.log(availablePlaneSeats);


//  9.  Buy a Candy Bar:
//			Impulse candy bar purchase, add 2.15 to the grocery total
//			(e.g. costOfGroceries = costOfGroceries + 2.15;)
costOfGroceries += 2.15;
console.log(costOfGroceries);


//  10.  Fix a Birth Certificate:
//			A birth certificate was printed incorrectly, 
//			change the middle initial to something else
middleInitial = 'C';
console.log(middleInitial);


//  11.  Changing Seasons:
//			The season has changed, update the hot outside variable 
//			to be opposite of what it was
isHotOutside = !isHotOutside;
console.log(isHotOutside);


//   12.  Full Name: 
//			Create a new variable called full name using the 
//			customer's first name, the middle initial, and a last name of your choice
let fullName = customerFirstName + " " + middleInitial + " Smith";
console.log(fullName);


//  13.  Introduce a Customer:
//			Print a line to the console that introduces the customer 
//			including the name, and saying that they live at the address variable
console.log("Hi, my name is " + fullName + " and I live at " + streetAddress + ".");


