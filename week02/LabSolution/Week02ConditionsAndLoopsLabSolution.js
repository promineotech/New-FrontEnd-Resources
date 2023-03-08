//
// Copyright (c) 2023 Promineo Tech
// Author:  Promineo Tech Academic Team
// Subject:  Conditions & Loops Lab
// JavaScript Week 02 Lab  
//




// 1. New variables:
//			a. Declare two variables: speedLimit and mySpeed
// 			b. Set their values to numbers between 1 and 100
let speedLimit = 50;
let mySpeed = 65;




// 2. Conditionals:
// 			a. Using a conditional, determine if mySpeed is greater than the speedLimit
// 			b. If true, print "Slow Down! Mom is mad!" to the console
// 			c. If mySpeed is equal to the speedLimit, print "Everyone is happy!" to the console
// 			d. If mySpeed is less than the speedLimit, print "Speed up! Dad is mad!"

if(mySpeed > speedLimit){
    console.log("Slow Down! Mom is mad!")
} else if(mySpeed == speedLimit){
    console.log("Everyone is happy!")
} else {
    console.log("Speed up! Dad is mad!")
}




// 3. More variables:
//			a. Create two variables, one named alarmSet, the other openDoor
// 			b. Set them to a boolean value
let alarmSet = true;
let openDoor = false;




// 4. More conditionals:
//			a. Using a conditional, determine if alarm is set. 
//			b. If alarm is set and door is set to open, print "Sound Alarm!" to the console
// 			c. Otherwise, print "Everything is fine." to the console.


if(alarmSet && openDoor) {
    console.log("Sound Alarm!")
} else {
    console.log("Everything is fine.")
}




// 5. Username & Password:
//			a. Create two variables, username and password
// 			b. Create a conditional: 
//				- if the username is "Tommy123" and the password is "12345"
// 				  or the username is "Timmy456" and the password is "6789", 
//						print "Admin Login Successful" to the console
// 				- otherwise, print "Admin Access Denied"
let username = "Tommy123";
let password = "12345";

if((username === "Tommy123" && password === "12345") || (username === "Timmy456" && password === "6789")){
    console.log("Admin Login Successful");
} else {
    console.log("Admin Access Denied");
}




// 6. StudentClass
//			a. Write code that will set the value of studentClass based on studentGrade
// 				- studentGrade will be K-12
// 				- K-6 will be Elementary
// 				- 7-8 will be Middle
// 				- 9 will be Freshman, 10 Sophomore, 11 Junior, 12 Senior
//				- Anything other than these values will return "Error" to the console

let studentGrade = 13;
let studentClass;

switch(studentGrade){
    case 'K':
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        studentClass = "Elementary";
        break;
    case 7:
    case 8:
        studentClass = "Middle";
        break;
    case 9:
        studentClass = "Freshman";
        break;
    case 10:
        studentClass = "Sophomore";
        break;
    case 11:
        studentClass = "Junior";
        break;
    case 12:
        studentClass = "Senior";
        break;
    default:
        console.log("Error");

}
console.log(studentClass);




// 7. For-loop:  Write a for loop that will iterate backwards from 10 to -10

for(let i = 10; i >= -10; i--){
    console.log(i);
}




// 8. Do/While loop:  Write a do/while loop that prints 1 through 50
let iterator = 1;
do {
    console.log(iterator);
    iterator++;
} while(iterator <= 50);




// 9. Modified Do/While loop: 
//			a. edit the previous do/while loop so that it prints the remainder 
//					when the loop number is divided by 4
iterator = 1;
do {
    if(iterator % 4 == 0){
        console.log(iterator);
    }
    iterator++;
} while(iterator <= 50);




// 10:  Troubleshooting/Debugging:
//			a. Someone messed up the following for loop
//					fix the following infinite loop, uncomment to test
//   /* 
//    for(let i = 11; i > 10; i++){
//        console.log(i);
//    } 
//   */


// Here are three solutions -- depending on what we need the loop to do

//prints 1-9
for(let i = 1; i < 10; i++){
    console.log(i);
}
//prints 11-99
for(let i = 11; i < 100; i++){
    console.log(i);
}
//prints 110-11
for(let i = 110; i > 10; i--){
    console.log(i);
}
