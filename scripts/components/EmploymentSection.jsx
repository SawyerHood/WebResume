import React from 'react';
import TagsSection from './TagsSection.jsx'

class EmploymentSection extends React.Component {
	render() {
		var employment = this.props.employment;
		var descList = employment.descList.map((item)=>{
			return <li>{item}</li>;
		});

		return (
			<section className="experienceSection">
				<div className="sectionHeader">
					<p className="jobTitle">{employment.title}</p>
					<p className="company">{employment.employer}</p>
					<img src={employment.logo} alt={employment.employer + ' Logo'} className="logo"/>	
				</div>
				<ul className="experienceList">{descList}</ul>
				<TagsSection tagList={employment.tags}/>
			</section>
		);
	}
}

module.exports = EmploymentSection;
