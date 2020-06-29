import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<section>
			<h1>Home</h1>;
			<ul>
				<li>
					<Link to="beer">All Beers</Link>
				</li>
				<li>
					<Link to="random">Random Beer</Link>
				</li>
			</ul>
		</section>
	);
};

export default Home;

// Vorheriger Code
/* import React from "react";
import './Home.css';
import AllBeers from "./pages/AllBeers";
import RandomBeer from "./pages/RandomBeer";
import HomeButton from "./pages/HomeButton";

const Home = () => {
    return (
        <section>
            <header>
                <h1>Home</h1>
            </header>
            <RandomBeer />
            <AllBeers />
        </section>
    );
}

export default Home;
 */


// get Beer by Click
/* 
import React from "react";
import "./button.css";

const CityNameButton = ({ click, city }) => {
  return <button onClick={click}>{city}</button>;
};
export default CityNameButton;
*/