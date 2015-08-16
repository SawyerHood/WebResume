import Router from 'react-router';
import React from 'react';

var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

class ResumeNav extends React.Component {
	render() {
		return (
			<header className="navHeader">
				<h1>Sawyer Hood</h1>
				<nav>
					<Link to="experience">Experience</Link>
				</nav>
			</header>

		);
	}
}


class Resume extends React.Component {
	render() {
		return (
			<div>
				<ResumeNav/>
				<RouteHandler/>
			</div>
		);    
	}
}

module.exports = Resume;
