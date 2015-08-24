import React from 'react';
import EmploymentSection from './EmploymentSection.jsx';

export default class Experience extends React.Component {
	render() {
		var employmentSections = this.props.experience.map((item)=>{
			return <EmploymentSection employment={item} />; 
		});
		return (
			<section className="entryMaster">
				<h2>Professional Experience</h2>
				{employmentSections}
			</section>
		);
	}
}
