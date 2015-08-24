import Router from 'react-router';
import React from 'react';
import Resume from './components/Resume.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
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
var ResumeWrapper = wrapComponent(Resume, {resumeName: ResumeData.name});
var EducationWrapper = wrapComponent(Education, {education: ResumeData.education});
var routes = (
	<Route name="resume" path="/" handler={ResumeWrapper}>
		<Route name="experience" path="experience" handler={ExperienceWrapper}/>
		<Route name="education" path="education" handler={EducationWrapper}/>
		<DefaultRoute handler={ExperienceWrapper}/>
	</Route>
);

Router.run(routes, function (Handler) {
	React.render(<Handler/>, document.getElementById('content'));
});
