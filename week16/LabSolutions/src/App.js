import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Home from './Components/Home.js';
import About from './Components/About.js';
import Projects from './Components/Projects.js'

/** Instruction: 
 *    This is a boiler plate, or a "starting point" for React Router.
 *    This boiler plate uses React Router 5.3. You MUST read and use the documentation
 *       for React Router 5.3 if you decide to use this boiler plate.
 * 
 *    You are not required to use RR 5.3 for your final.
 *    You may use this boiler plate for your final if you want to.
 */

/*------------------------ Creating a New Route ------------------------*/

/**
 * Step 1: npm install to install your node_modules folder
 * Step 2: npm start inside this project directory to see how the boiler plate is already set up.
 * Step 3: Rename: the Home and About components & routes to something you want 
 *         to use for your final.
 * Step 4: Connect a third component so your nav now goes to three places instead
 *         of just two.
 * 
 *         Make sure for this new component you have done the following:
 *           - Create a new <li></li> element in your nav component.
 *           - Put a <Link> component in that element with a name, and a to attribute.
 *           - Create a new <Route> component inside of your <Switch> component.
 *               It should sit on the upper level of the other two <Route> components.
 *               Make sure the syntax is the same as the other two components.
 *           - Test to make sure that all three components navigate correctly.
 */

export default function App() {
  return (
    // Your entire App.js is the router.
    <Router>
      {/* This is your Nav element, that users can see. */}
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </nav>

      {/* This is the logic that switches each path.
          1. Give your Route component a path attribute so users know where they are.
              This is linked directly with "to attribute" on your nav above.
          2. Inside that Route component, render the component you want users
              to see when they click on that route.
          <Route path="/">
            <Component/>
          </Route>  */}

        <Switch>
          <Route path="/projects">
            <Projects/>
          </Route>

					<Route path="/about">
            <About />
          </Route>
           
					<Route path="/">
            <Home />
          </Route>
          
				</Switch>
      </div>
    </Router>
  );
}