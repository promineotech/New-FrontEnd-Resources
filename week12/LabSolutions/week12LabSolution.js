/* Copyright (c) 2023 Promineo Tech
   Author:  Promineo Tech Academic Team
   Subject:  JavaScript CRUD Operations with JQuery
   JavaScript Lab Solution Week 12 */

/* ----------------------------------------------------- */
// Key Term List:
// JSON server
// JSON
// CRUD (Create, Read, Update, Delete)
// HTTP Verbs: GET, PUT/PATCH, POST, DELETE
// REST API
// naming conventions
// kebab-case
// SNAKE_CASE
// PascalCase
// camelCase

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so.
// Read the comments and add your code where it is specified for each question.
/* ----------------------------------------------------- */

/**
 * BEFORE YOU START:
 * You should be working in a folder containing 3 files: db.json, index.html, and week12Lab.js.
 *
 * The db.json should be an object. That object contains one key:value pair.
 *    an object called "studentRoster" that is an array of objects with multiple
 *    key:value pairs: "fullName", "researchAssignment", and "id".
 *
 * Your index.html has been set up with CDN's to use Jquery & Bootstrap.
 * Removing/changing any <script> or <link> elements may affect functionality.
 *
 * Do not change these or the data inside the db.json until you have completed
 * the project and/or feel comfortable changing them.
 *
 * GOAL: We are teaching a class of x number of students.
 *       For homework, we're assigning each student to research an animal.
 *
 *       We have an API endpoint: studentRoster
 *       The info is also in your db.json
 *
 *       1) Create a form that will GET/PUT/POST/DELETE to/from our studentRoster
 *       2) Create a section that displays our students name research assignment
 *
 *          This can be a table, a div, however you'd like to show the info.
 *          For this Lab, we'll be using a table.
 *
 *       You should be able to PUT(update)/DELETE(delete) existing students
 *           & POST(add) new students to the roster.
 *
 * Note: This lab uses Jquery/ajax for all CRUD operations.
 */

/*------------------------ Part 1: Setting up a JSON server ------------------------*/
console.log(`-------------------------- 
Part 1: Setup your JSON server`)

/**
 * Documentation: https://www.npmjs.com/package/json-server#getting-started
 *
 * Step 1: In your console, type: npm install -g json-server
 *
 * Step 2: In your console, type: json-server --watch db.json
 *         Your console should look something like this:
 *
 *         Resources
 *         http://localhost:3000/studentRoster
 *
 *         Above is the URL we'll use for our CRUD operations.
 *
 * Step 3: Below, create a const declaration for your URL endpoint
 *
 * ↓ YOUR CODE HERE ↓ */
const STUDENT_ROSTER_URL = 'http://localhost:3000/studentRoster'

/*------------------------ Part 2: HTTP Verb: GET ------------------------*/
console.log(
  `-------------------------- 
Part 2: GET and displaying the information`
)

/**
 * Step 1: Use $.get(api_url_here).then(data => console.log(data)) to check if
 *         our GET is set up correctly. You should be logging an array of objects.
 *
 * Step 2: Instead of logging, loop over data and add your information to the DOM.
 *
 * ↓ YOUR CODE HERE ↓ */

$.get(STUDENT_ROSTER_URL).then((data) =>
  data.map((student) => {
    $('tbody').append(
      $(`
    <tr>
      <td>${student.id}</td>
      <td>${student.fullName}</td>
      <td>${student.researchAssignment}</td>
      <td>
        <button onclick="deleteUser(${student.id})"}>🗑</button>
      </td>
    </tr>`)
    )
  })
)

/*------------------------ Part 3: HTTP Verb: POST ------------------------*/
console.log(
  `-------------------------- 
Part 3: POST and adding new students`
)

/**
 * Step 1: Create a form in our HTML to post including
 *         label/inputs for each new student and a button to submit.
 *
 * Step 2: Add an event listener in your code below to the <button> element
 *         you created to log 'pls work' on click, just to make sure it's working.
 *
 * Step 3:
 * Docs:   https://api.jquery.com/jquery.post/
 *
 *         Replace the console.log('pls work') with jQuery's $.post() method.
 *
 *         The first argument is a URL, the second argument is an object containing
 *         the data to pass in. Use jquery to target the input values.
 *
 *         Your button should now post a new user on click.
 *
 * ↓ YOUR CODE HERE ↓ */

$('#submitStudent').click(function () {
  $.post(STUDENT_ROSTER_URL, {
    fullName: $('#newName').val(),
    researchAssignment: $('#newAssignment').val(),
  })
})

/*------------------------ Part 4: HTTP Verb: DELETE ------------------------*/
console.log(
  `-------------------------- 
Part 4: DELETE and deleting individual students`
)

/**
 * Docs:   https://api.jquery.com/jquery.ajax/
 *
 * Step 1: Create a new <td> element: a delete button for every student in part 2.
 *
 *         <button>delete</button>
 *
 *         Here's a lil' ASCII trash bin: 🗑
 *
 * Step 2: Let's handle deleting a little bit differently from post.
 *
 *         On the button element we just added, give it a property of onclick=""
 *         Inside the "", we're going to give it function to do.
 *
 * Step 3: Create a function called "deleteUser" below, that takes in an id as a parameter.
 *         Inside the code block, we're going to use jquery/ajax to delete a user.
 *
 * Step 4: Add the deleteUser() function inside our
 *         onclick="" on the delete button.
 *
 *         Make sure you are passing in the correct ID to deleteUser() above,
 *         and you have added the ID to the end of the ajax URL in the deleteUser() function.
 *
 *         Your elements should now be getting deleted!
 *
 * ↓ YOUR CODE HERE ↓ */

function deleteUser(id) {
  $.ajax(`${STUDENT_ROSTER_URL}/${id}`, {
    type: 'DELETE',
  })
}

/*------------------------ HTTP Verb: UPDATE ------------------------*/
console.log(
  `-------------------------- 
Part 4: PUT and updating the information`
)

/**
 * Step 1: Create a function called updateUser(){}
 *
 * Step 2: Create a form in our HTML to update a student's name/assignment by id.
 *         We need input values/labels for id/studentName/researchAssignment
 *
 * Step 3: Add a new header for students ID id in our table.
 * Step 4: Set up $.ajax() for 'PUT'
 *         We need two key/value pairs: method and data
 *
 *         Get the new id/name/research assignment by id, and pass those values
 *         into the appropriate places.
 *
 * Step 5: Add an event listener after your updateUser() function to
 *         do the updateUser function on click.
 *
 * ↓ YOUR CODE HERE ↓ */

function updateUser() {
  id = $('#updateId').val()

  $.ajax(`${STUDENT_ROSTER_URL}/${id}`, {
    method: 'PUT',
    data: {
      fullName: $('#updateName').val(),
      researchAssignment: $('#updateAssignment').val(),
    },
  })
}

$('#updateStudent').click(updateUser)

console.log(`-----------Finished------------`)

/*------------------------ Optional: Style it with bootstrap! ------------------------*/

/**
 * Tables: https://getbootstrap.com/docs/5.3/content/tables/#overview
 * Forms: https://getbootstrap.com/docs/5.3/forms/overview/#overview
 *
 * There's no right or wrong here. Play around with different styles/reorganization.
 *
 * If you want some 'above and beyond' ideas:
 * 1) Instead of a table, look into organizing the students differently with bootstrap:
 *      Card, Accordion, Dropdowns, Popover, Tooltips
 *      Do a list group, and every item inside is one of the above
 * 3) Redo the update form - open the update form in a bootstrap modal when you click on
 *    a student, pass in the students id/name/assignment automatically to the form so the
 *    user can make edits to a form thats not initially blank.
 * 4) Re-style the delete button ASCII character to something more "modern"
 *
 */
