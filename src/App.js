import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Beer from "./pages/Beer";
import AllBeers from "./pages/AllBeers";
import RandomBeer from "./pages/RandomBeer";

function App() {
	return (
		<BrowserRouter>
			<div>
				<nav>
					<h1>Beer App</h1>
				</nav>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/beer" exact>
						<AllBeers />
					</Route>
					<Route path="/random" exact>
						<RandomBeer />
					</Route>
					<Route path="/beer/:id" component={Beer} />
				</Switch>
			</div>
		</BrowserRouter>
	)
}

export default App;


// Vorheriger Code
/* import React from 'react';
import './App.css';

import {  BrowserRouter, 
          Switch, 
          Route, 
          Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AllBeers from "./pages/AllBeers";
import RandomBeer from "./pages/RandomBeer";
import HomeButton from "./pages/HomeButton";


function App() {
  return ( 
    <BrowserRouter>
      <div className="App">
        <nav>
          <h1>Beer App</h1>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
        </nav>
          <Switch>
            <Route exact path="/">
              <Home />  
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
      </div>
    <HomeButton />

  </BrowserRouter>
  )
}

export default App;
 */