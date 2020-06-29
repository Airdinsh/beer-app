import React, { Component } from "react";
import { Link } from "react-router-dom";

class AllBeers extends Component {
	constructor(props) {
		super(props);
		this.state = { beers: [] };
	}

	componentDidMount() {
		fetch("https://ih-beers-api2.herokuapp.com/beers")
			.then((response) => response.json())
			.then((result) => this.setState({ beers: result }));
	}

	render() {
		return (
			<ul>
				{this.state.beers.map((beer) => (
					<li>
						<Link to={`/beer/${beer._id}`}>{beer.name}</Link>
					</li>
				))}
			</ul>
		);
	}
}

export default AllBeers;

// Mein alter Code
/* import React from "react";
import './AllBeers.css';

class AllBeers extends Component {
    constructor(props) {
        super(props);
        }
    render() {
        return (
            <div  id="randomAll" id="">
                <img  src="images/radovan-rgJ1xwQsoJc-unsplash.jpg"></img>
                <h2>All Beers</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
                </p>
            </div>
        );
    }
}

export default AllBeers;


 */