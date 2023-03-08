/* Copyright (c) 2023 Promineo Tech
   Author:  Promineo Tech Academic Team
   Subject:  JavaScript and DOM Manipulation 
   JavaScript Lab Week 10*/

/* ----------------------------------------------------- */
// Key Term List:
// DOM (Document Object Model)
// Element/node
// CSS Selector (class/id/node)
// Event Listener
//.createElement
//.getElementBy___
//.querySelector
//.append
//.prepend
// element.style.____ = ''
// .innerHTML = 'Hello World'
//

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so.
// Read the comments and add your code where it is specified for each question.
/* ----------------------------------------------------- */

/*------------------------ Creating a website with only JS ------------------------*/
console.log(`-------------------------- 
Part 1: Create a form with only JavaScript`)

/**
 * Step 1: Uncomment out the 'console.log(myForm)' at the bottom of the section.
 * Step 2: Using let, make a new variable called 'myForm'.
 * Step 3: Set it to be equal to document.createElement('form') // check the result in the console.
 * Step 4: Repeat steps 1 and 2, but with: myNameLabel, myNameInput
 * Step 5: Set the .innerHTML of myLabel to be equal to 'Name'
 * Step 6: Append myLabel to myForm, then append myInput to myForm
 * Step 7: Append myForm to document.body
           You should now have a label and a input on your website.
           Do the same steps, appending a label/input for Email, and a submit button to your form.
 * ↓ YOUR CODE HERE ↓ */

let myForm = document.createElement('form')
let myLabel = document.createElement('label')
let myInput = document.createElement('input')

myLabel.innerHTML = 'Name'

myForm.append(myLabel)
myForm.append(myInput)

document.body.append(myForm)

let myEmailLabel = document.createElement('label')
let myEmailInput = document.createElement('input')

myEmailLabel.innerHTML = 'Email'

myForm.append(myEmailLabel)
myForm.append(myEmailInput)

mySubmitButton = document.createElement('button')
mySubmitButton.innerHTML = 'Submit'

myForm.append(mySubmitButton)

console.log(myForm) // Used to see your work in the console
//Question: Besides changing the innerHTML, what other HTML things can we change using JavaScript?
//Answer: classes, ids, CSS, styles, values, properties, etc

/*------------------------ Styling a form with only JavaScript------------------------*/
console.log(`-------------------------- 
Part 2: Styling our form with only JavaScript`)

/**
 * Hint: element.style.cssProperty = ''
 *
 *  Step 1: Change the background color of your form to your favorite color.
 *         (you can use an accepted string, hex (ex: #DBF9FC) or rgb, (ex: rgb(255,122,89)))
 *  Step 2: Change the font color so it's readable over your background color
 *  Step 3: Give your form a display of flex, a flex-direction of column, and a max-width of 250px
 *
 * ↓ YOUR CODE HERE ↓ */

myForm.style.backgroundColor = '#000000'
myForm.style.color = 'white'
myForm.style.display = 'flex'
myForm.style.flexDirection = 'column'
myForm.style.maxWidth = '250px'

//Question: Do you prefer styling with JavaScript or CSS?
//Answer: CSS PLEASE

/*------------------------ Creating a table with only JavaScript ------------------------*/
console.log(`-------------------------- 
Part 3: Creating a table with only JavaScript`)

/*
 * Note: Most of these steps are similar to Part 1.
         As an added challenge, try to create a complete table with 2 rows, name/email and append it to the body.
 
 * Step 1: Uncomment out the console.log(myTable) below.       
 * Step 2: Create 4 new table elements: <table>, <tr>, <td>, <td>. Store them in variables using let
 * Step 3: One of your TD elements innerHTML should be 'Name', the other should be 'Email'.
 * Step 4: Append them in the same way that we create a table with HTML.
 * Step 5: Append the finished <table> to your <body>. It should now be on your website. 
 * Final Step: Style your table using JavaScript starting with a border. You may need to target more element/nodes than we did with myTable.
 * ↓ YOUR CODE HERE ↓ */

let myTable = document.createElement('table')
let myTr = document.createElement('tr')
let myTdName = document.createElement('td')
let myTdEmail = document.createElement('td')

myTdName.innerHTML = 'Name'
myTdEmail = 'Email'

myTable.append(myTr)
myTr.append(myTdName)
myTr.append(myTdEmail)
document.body.append(myTable)

myTable.style.border = '1px solid black'

console.log(myTable)
//Question: While this is clearly a more round-about way of making a table, how can using JavaScript in this way
//          more beneficial than HTML?
//Answer: HTML elements are static - I can't add/remove any elements after it's already been written.
//        With JavaScript, I could add more elements/information to a table/form on the click of a button.

/*------------------------ Changing our body background on click ------------------------*/
console.log(`-------------------------- 
Part 4: Changing our background on click`)
/**
 * Documentation: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events
 *
 * Step 1: In our HTML, uncomment out the <button> element.
 * Step 2: Read through the documentation up through the first block of code.
 *         We're going to use rgb (ex: rgb(0,125,255) ) to change the color of our body's background when we click the button
 * Step 3: Create a variable called myButton that uses getElementById() to target the button in step 1.
 * Step 4: Use the 'addEventListener' method on myButton.
 *         addEventListener is a method takes in two arguments: an event listener type, and a function.
 * Step 5: For the first argument, add 'click'. For the second argument, add a function body... (ex: function (){})
 * Step 6: Inside of the function body, change the backgroundColor of our body element.
 *         Let's use rgb(0,125,255) to change the color, and Math.random() to change the values inside rgb().
 * Step 7: Click the button in your index.html and see the background change!
 * ↓ YOUR CODE HERE ↓ */

const myButton = document.getElementById('myButton')
myButton.addEventListener('click', function () {
  document.body.style.backgroundColor = `rgb(${Math.random() * 255}, ${
    Math.random() * 255
  }, ${Math.random() * 255})`
})

//Question: What other event listeners are there?
//             Try them out by replacing 'click' in your function above!
//Answer: mouseup, mousedown, onmouseover, mousedown, mousemove, scroll

console.log(`-----------Finished------------`)

/**
 * Extra Project Ideas:
 *
 * 1: Create a button that changes the innerHTML of a div back and forth from 'Hello' to 'World'
 * 2: Create an image that disappears when you hover over it, and reappears when you hover off.
 * 3: When you click your form button, get the input values of your name/email input,
 *    and append a new <tr> containing those values to your tBody element.
 *    Look into event.preventDefault(). Buttons inside of forms have a default setting to refresh the page.
 *
 */
