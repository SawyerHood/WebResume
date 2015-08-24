import React from 'react';
import EducationSection from './EducationSection.jsx';

export default class Education extends React.Component {
	
	render() {
		var educationSections = this.props.education.map((item) => {
			return <EducationSection educationEntry={item} />;
		});

		return (
			<section className="entryMaster">
				<h2>Education</h2>
				{educationSections}
			</section>
		);
	}
}
