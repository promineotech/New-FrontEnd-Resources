/* Copyright (c) 2023 Promineo Tech
   Author:  Promineo Tech Academic Team
   Subject:  Week 14: Props, State, Events
   JavaScript Lab Week 14*/

/* ----------------------------------------------------- */
// Key Term List:
// React
// Node Packet Manager (NPM)
// Webpack
// Component
// JSX
// JSX Documentation: https://reactjs.org/docs/introducing-jsx.html
// functional programming
// class based programming

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so.
// Read the comments and add your code where it is specified for each question.
/* ----------------------------------------------------- */

// Feel free to copy/paste the instructions to different components for easier visibility.

/**
 * !BEFORE YOU START!
 * This lab is a continuation of the Week 13 Lab.
 * It is not necessary to finish the Week 13 Lab to work on this one.
 *
 * You are welcome to use this project, or if you did complete the Week 13 lab,
 * just copy/paste the new directions from here into your project.
 */

/* ------------------ Part 1: State/Constructor/Props --------------------- */
/**
 * REMINDER: Start your developer server by moving to your project in your terminal, then type 'npm start'
 *
 * Goal: Pass information using props from our App.js to a new component, Appointments.js.
 *
 * Step 1: Create a new component in your src folder called 'Appointments.js'
 *         Create the base format for a class based component in Appointments.js
 *
 * Step 2: Render your Appointments.js component in your App.js component.         
 *
 * Step 3: Let's hold our information in our App.js, and pass that information
 *         as a prop to our <Appointments/> component.
 *
 *         Copy/paste the code below our imports in App.js:
 *                (If you hold the middle mouse button and drag,
 *                 it should highlight the text to copy/paste)
 *
 *                 let allCustomers = [
 *               {
 *                 firstName: 'Shawn',
 *                 lastName: 'Lennon',
 *                 appointmentTime: '1:00PM',
 *               },
 *               {
 *                 firstName: 'Jewel',
 *                 lastName: 'Ronnie',
 *                 appointmentTime: '2:00PM',
 *               },
 *               {
 *                 firstName: 'Martie',
 *                 lastName: 'Francis',
 *                 appointmentTime: '3:00PM',
 *               },
 *             ]
 *
 * Step 4: Create a property on the <Appointments/> component called 'customers', 
 *         set it equal to our variable, allCustomers
 *
 *         Does this look familiar? <img src="someUrl.com"/> ... src is also a prop/property.
 *
 *         Hint: <Appointments customers={allCustomers} />
 *
 * Step 5: In class based components, we hold state inside of the constructor(){}.
 *         Because we want our Appointments.js to absorb information from App.js, we also need super()
 *         inside of the constructor.
 *         In Appointments.js, above your render(), create a constructor that will hold our state.
 *
 * Step 6: Pass the word: props  into your constructor argument, and your super argument.
 *         console.log(props) at the bottom of your constructor. What data type is it?
 *         It should be an object.
 *
 *         Inside the constructor in Appointments.js, set
 *         this.customersArray = props.customers
 *
 *         console.log(this.customersArray) inside the constructor.
 *         Now we can use this.customersArray in our Appointments.js!
 *
 * */

/* ------------------ Part 2: Creating our Table  --------------------- */

/** Note: Feel free to copy/paste this into your Appointments.js for easier visibility.
 *
 * Goal: Create a table that renders allCustomers
 *
 * Step 1: Create a table with a thead/tbody. The thead should have a row with
 *         3 th elements: First Name, Last Name, and Appointment Time.
 * Step 2: Inside of your tbody, create a <tr> element that will .map() 
 *         over this.customersArray and return 
 *         3 <td> elements, one for firstName, lastName, and appointmentTime.
 *
 *         Check the README for a .map() hint.
 * Step 3: Style it with css using the App.css file!
 *
 */

/* -- ALL YOUR COMPONENT/STYLE IMPORTS HERE -- */
import './App.css'
import Nav from './Nav'
import Appointments from './Appointments.js'

let date = new Date()

let singleUser = {
  name: 'Jane Smith',
  todaysDate: date.toDateString(),
}

let allCustomers = [
  {
    firstName: 'Shawn',
    lastName: 'Lennon',
    appointmentTime: '1:00PM',
  },
  {
    firstName: 'Jewel',
    lastName: 'Ronnie',
    appointmentTime: '2:00PM',
  },
  {
    firstName: 'Martie',
    lastName: 'Francis',
    appointmentTime: '3:00PM',
  },
]

function App() {
  return (
    <div className="App">
      <Nav />
      <section className="welcomeSection">
        <h1>Welcome, {singleUser.name}</h1>
        <p>Todays date is: {singleUser.todaysDate}</p>
      </section>
      <Appointments customers={allCustomers}/>
    </div>
  )
}

export default App
