import Router from 'react-router';
import React from 'react';
import {default as cx} from 'classnames';
import Footer from './Footer.jsx';

var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

class ResumeNav extends React.Component {
	render() {
		return (
			<header className={cx(this.props.className, 'navHeader')}>
				<img src="imgs/sawyer.png" className="navImg" />
				<h1 className="personName">{this.props.resumeName}</h1>
				<nav className="resumeNav">
					<Link to="experience">Experience</Link>
					<Link to="education">Education</Link>
				</nav>
			</header>

		);
	}
}


export default class Resume extends React.Component {

	constructor(props) {
		super(props);
		this.state = {showHeader: true, lastPos: 0};
	}

	componentDidMount() {
		window.addEventListener('scroll', (event) => this.handleScroll(event));
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll(event) {
		var topPos = event.srcElement.body.scrollTop;
		if (topPos === 0 || topPos < this.state.lastPos ) {
			this.setState({showHeader: true, lastPos: topPos});
		} else if (topPos > 100){
			this.setState({showHeader: false, lastPos: topPos});
		}
	}

	render() {
		var classes = cx({navUp: !this.state.showHeader});
		return (
			<div>
				<ResumeNav className={classes} resumeName={this.props.resumeName}/>
				<RouteHandler/>
				<Footer />
			</div>
		);    
	}
}

