import React, { Component } from "react";
import BeerDetails from "../components/BeerDetails";

class RandomBeer extends Component {
	constructor(props) {
		super(props);
		this.state = { beer: null };
	}

	componentDidMount() {
		fetch("https://ih-beers-api2.herokuapp.com/beers/random")
			.then((respose) => respose.json())
			.then((result) => this.setState({ beer: result }));
	}

	render() {
		return <BeerDetails beer={this.state.beer} />;
	}
}

export default RandomBeer;

//Vorheriger Code
/* import React, { Component } from "react";
import './RandomBeer.css';

class RandomBeer extends Component {
    constructor(props) {
        super(props);
        }
    render() {
        return (
            <div id="randomAll" onClick="">
                <img  src="images/helena-lopes-m8R7_qWdXpU-unsplash.jpg"></img>
                <h2>Random Beers</h2>
                <p>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
                </p>
            </div>
    );
    }
}

export default RandomBeer;
 */