import Router from 'react-router';
import React from 'react';
import Resume from './components/Resume.jsx';
import Experience from './components/Experience.jsx';
import ResumeData from './data.js';

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var wrapComponent = function(Component, props) {
  return React.createClass({
    render: function() {
      return React.createElement(Component, props);
    }
  });
};

var ExperienceWrapper = wrapComponent(Experience, {experience: ResumeData.experience});

var routes = (
	<Route name="resume" path="/" handler={Resume}>
		<Route name="experience" path="experience" handler={ExperienceWrapper}/>
		<DefaultRoute handler={ExperienceWrapper}/>
	</Route>
);

Router.run(routes, function (Handler) {
	React.render(<Handler/>, document.getElementById('content'));
});
