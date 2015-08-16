import React from 'react';
import EmploymentSection from './EmploymentSection.jsx';

class Experience extends React.Component {
	render() {
		var employmentSections = this.props.experience.map((item)=>{
			return <EmploymentSection employment={item} />; 
		});
		return (
			<section className="experienceMaster">
				<h2>Professional Experience</h2>
				{employmentSections}
			</section>
		);
	}
}

module.exports = Experience;


