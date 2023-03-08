# Week 15 Lab ~ React Week 15 - REST, Fetch, Functional Components, and Best Practices
#   Copyright (c) 2023 Promineo Tech
#   Author:  Promineo Tech Academic Team
#   Subject:  React Week 15 - REST, Fetch, Functional Components, and Best Practices
#   JS/React Lab Week 15 */

<!-- 

In-depth/step by step instruction for Week 15 lab.
Either follow in this file, or copy/paste over steps in App.js

/*------------------------ Part 1: REST & Fetch ------------------------*/

/**
 * Fetch documentation: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 *
 *                      Make sure you set up a API that you can CRUD to, such as mockAPI or use
 *                      a JSON server like in the week 11/12 labs.
 *
 *                      The lab solution will use mockAPI - but you MUST update the endpoint with your own
 *                      or the CRUD operations will not work. Do not copy the API link in the lab solution.
 *
 * Part 1: This lab focuses mainly on functionality. It's okay if it doesn't look pretty.
 *         Get the pieces working, then you can style however you like after!
 *
 *         Let's do all of our CRUD operations in our App.js
 *
 *         Create a new const variable called: API_URL , and set it to your URL.
 *
 *         Create 4 functions, getUsers(){}, deleteUser(){}, updateUser(){}, and postNewUser(){}.
 *         We can use properties such as onClick, onSubmit etc to do these functions.
 */
/*------------------------ Part 1: Setting up GET ------------------------*/
/*
 *         Let's start by setting up function getUsers().
 *
 * Step 1: First, let's create a place (state) to save the users from our API.
 *         const [users,setUsers] = useState([]) // be sure to import useState from 'React'
 *
 * Step 2: 1) Use fetch(URL) to get from the API
 *         2) Convert the data to JSON
 *         3) setUsers() to result of that data.
 *
 *         Answer: fetch(API_URL).then(data => data.JSON).then(data => setUsers(data))
 *         Extra: What would this look like converted to async await?
 *                You can also console.log(data) in the last method to see what you're setting. *
 *
 *         Now, whenever we make future changes: such as delete/update/post - we want our component
 *         to re-render whenever it gets changed. Sounds like a great place for useEffect.
 *
 * Step 3: Use the useEffect and getUsers() to re-render our component:
 *
 *                                 useEffect(() => {
 *                                   getUsers()
 *                                 }, [])
 *
 *         useEffect takes an anonymous function: () =>
 *         Then gets our users again,
 *         and the second argument: [], makes it so it only happens once.
 *
 *         Now, our component will re-render whenever we update state using getUsers()
 *
 */
/*------------------------ Part 2: Setting up DELETE ------------------------*/

/**
 * Reminder: fetch(url, {options})
 *
 * Step 1: First whenever we're deleting we want a very specific user to delete -
 *         which means we'll need to put an id at the end of our API_ENDPOINT.
 *
 *         Put id as a parameter in our deleteUser() function, and update our URL in fetch(API_URL).
 *         We'll connect an actual ID later.
 *
 * Step 2: Add options to the second argument to specify the method: "DELETE"
 *
 * Step 3: call .then(() => getUsers()) after your fetch() to ensure that our component
 *         gets re-rendered with the updated information.
 *
 *         One way to connect deleteUser() in the future:
 *            We have a button, put the property onClick={() => deleteUser(user.id)}, then
 *            pass in the user.id. We could also use onSubmit on a form element.
 *
 */

/*------------------------ Part 3: Setting up POST ------------------------*/

/**
 * Step 1: Inside our postNewUser() function, do another fetch() call similar
 *         to delete. Since we aren't trying to target a very specific user,
 *         we don't need an id.
 *         However, we now need a couple new key: value // pairs in our options.
 *
 *             body: JSON.stringify({
 *                name: newUsersName
 *                jobTitle: newUsersJobTitle
 *                companyName: newUsersCompanyName
 *             })
 *
 *             and
 *
 *             headers: {
 *                  'Content-Type': 'application/json'
 *                      }
 *
 *         The body key:value pairs are arbitrary, and can change based on your API.
 *
 *
 * Step 2: We need a place to save the new name, jobTitle, and companyName to POST.
 *
 *         Create 3 new variables: newUserName, newUserJobTitle, newUserCompanyName
 *         like we did with const = [users,setUsers] useState([]).
 *
 *         This time, have useState() take an empty string as an argument instead of an array.
 *
 *         Now, for your body: {} key:value pair - update the key:values to use your variables.
 *
 *         Currently, they're only empty strings. However we can change the values of those
 *         empty strings using setNewUserName (etc..) and the property onChange on an input field.
 *
 *         Then, we'll post with those updated values.
 *
 */

/*------------------------ Part 4: Setting up UPDATE ------------------------*/

/** Disclaimer: There are MANY ways to handle UPDATE.
 *              This is only one way. We will be creating a form for each user,
 *              passing in a userObject to our updateUser() function, then updating the user with fetch()
 *
 *              Consider other ways after the lab is completed. Some situations may require you pass
 *              in an entire user object, then update that object.
 *
 * Step 1: When we update, we need existing information (the information in our API).
 *         Similar to our body: {} // when we POST, we need to update an object that already exists.
 *
 *         In the parameter for our updateUser(), add: userObject // as a parameter.
 *
 * Step 2: In the future, we'll have a form that will update our userObject object.
 *         Those values will be the userName, jobTitle, and companyName.
 *
 *         (Although, you could choose to only allow users to update a selection of these!)
 *
 *         Lets save these values in state as well. Create 3 new variables in state like we did for POST,
 *         but for UPDATE:
 *         updatedName, updatedJobTitle, and updatedCompanyName
 *
 * Step 3: Inside the updateUser() function body, create a new variable: updatedUserObject
 *         Set updatedUserObject to be equal to our passed in userObject, then update the
 *         name/jobTitle/companyName with our updated values held in state.
 *
 *         ex: updatedUserObject = updatedUser
 *             updatedUserObject.name = updatedName
 *          ...etc for job title/company name.
 *
 *         Hint: Check the Spread Operator video in Week 15 for a better way.
 *
 * Step 4: Your fetch() call is going to be the same as the one in POST with a few changes.
 *
 *         Update the URL to add the userObject.id to the end.
 *
 *         In our options:
 *         Change the method: to 'PUT'
 *         Change our body: to JSON.stringify(updatedUserObject)
 *
 */

/*------------------------ Part 5: Connecting All the Pieces ------------------------*/

/**
 * Step 1:  Connecting our GET:
 *
 *          .map over our users variable and display every user however you like.
 *                Heres one less organized option:
 *
 *                {users.map((user, index) => (
 *                   <div key={index}>
 *                     <div>
 *                       Name: {user.name} <br></br>
 *                       Job Title: {user.jobTitle} <br></br>
 *                       Company Name: {user.companyName} <br></br>
 *                     </div>
 *                   </div>
 *                 ))}
 *
 * Step 2: Connecting our DELETE:
 *
 *         Under our map, give every user a button to delete. Return of the trash-bin: 🗑
 *         Give the button a property onClick={() => deleteUser(user.id)} and pass in the user.id
 *
 *         AFTER THIS STEP - Check your deleteUser() function and connect the dots of HOW the user.id
 *                           connects to the rest of your function. Where/how is the ID getting used?
 *
 *         Your button should now be deleting - AND! re-rendering the page with the updated information.
 *                                                   thanks, .then(() => getUsers()) // :)
 *
 * Step 3: Connecting our POST:
 *
 *         Post is unique in that, we don't need/want a form for every user.
 *
 *         Create a form above your .map method, with inputs/labels for every part of a new user:
 *         name, jobTitle, companyName
 *         including a submit button.
 *
 *         We have variables set in state to save whatever we type in the input fields.
 *         newUsername, newUserJobTitle, newUserCompanyName
 *
 *         Use the onChange property to set the values of our variables
 *         above whenever we type in the input fields.
 *
 *         Example: onChange={(e) => setNewUserName(e.target.value)}
 *
 *         Do the same for your Job Title/Company Name inputs.
 *
 *         Connect your postNewUser() function to your form button.
 *         hint: see deleteButton() in step 2, but pass an event! // (e) => myFunction(e)
 *
 *         Make sure it uses event.preventDefault() so the page doesn't refresh.
 *
 *         You should now be POSTing new users! Is your state re-rendering?
 *         If not, your hint in how is in Part 2: Setting up DELETE
 *
 *
 * Step 4: Connecting our UPDATE:
 *
 *     1)  There's MANY ways to handle UPDATE.
 *
 *         For this example, we're going to give every user a form to update their:
 *         name, job title, and company name. This is why we created the variables in Part 4!
 *
 *         (ex: const [updatedUserName, setUpdatedUserName] = useState(''))
 *         etc...
 *
 *     2)   Inside our .map() method, below our delete button,
 *          create a new form with labels/inputs for
 *          Update name, update job title, update company name.
 *          Include a button at the bottom (this will update on click).
 *
 *          Time to connect the pieces!
 *
 *     3)   Have your corresponding inputs setUpdatedUserName() on change.
 *          Hint for syntax: Reference part 5.3 - Connecting our POST.
 *
 *     4)   Give your button an onClick property. Connect your updateUser()
 *          function to it.
 *
 *          For this function, we have two goals:
 *       1. Prevent the button from refreshing the page
 *       2. Pass in a an entire user object.
 *
 *          Set up your onClick to do both.
 *
 *          Hint: Pass in an event, and the: user. You'll need to update
 *                parameters to our updateUser() function to to take in both.
 *
 *     5)   Test it out! Your update should now be working!
 *          You might need to re-fresh the page... how did we fix this earlier?
 *          Hint: Part 2.3
 
 * Optional: Set the input values in your update form to be equal to user.name/user.jobTitle etc,
 *           so they don't initially submit empty strings.
 */
 
 -->