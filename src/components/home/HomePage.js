import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{

	render(){
		return(
			<div className="jumbotron">
				<h1>PluralSight Administration</h1>
				<p>React, Redux HomePage Tutorial</p>
				<Link to="about" className="btn btn-lg btn-primary" > Learn more</Link>\
			</div>

		);
	}

}

export default HomePage;