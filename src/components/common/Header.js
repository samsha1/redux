import React,{PropTypes} from 'react';
import {Link,IndexLink} from 'react-router';

const Header = () => {

	return(
		<nav>
			<IndexLink to="/" activeClassName="active"> Index </IndexLink>
			{"|"}
			<Link to="about" activeClassName="active"> About </Link>
			{"|"}
			<Link to="course" activeClassName="active"> Courses </Link>
		</nav>	
		);

};

export default Header;