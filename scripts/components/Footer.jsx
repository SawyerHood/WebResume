import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                Copyright &copy; {(new Date()).getFullYear() + ' ' + this.props.resumeName}
                <ul className="webLinks">
                    <li><a href={this.props.facebookURL}>Facebook</a></li>
                    <li><a href={this.props.githubURL}>GitHub</a></li>
                </ul>
            </div>
		    );
	  }
}
