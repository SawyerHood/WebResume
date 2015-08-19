import React from 'react';
import TagsSection from './TagsSection.jsx'

export default class EmploymentSection extends React.Component {

	getDisplayDate(date) {
		var months = [
        'Jan', 'Feb', 'Mar',
        'Apr', 'May', 'Jun', 'Jul',
        'Aug', 'Sep', 'Oct',
        'Nov', 'Dec'
		];

		return date instanceof Date
			? months[date.getMonth()] + ' ' + date.getFullYear()
			: 'Present';
	}

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
					<p className="date">
						{this.getDisplayDate(employment.startDate)} - {this.getDisplayDate(employment.endDate)}
					</p>
				</div>
				<ul className="experienceList">{descList}</ul>
				<TagsSection tagList={employment.tags}/>
			</section>
		);
	}
}

