import React from 'react';
import TagsSection from './TagsSection.jsx';
import {getDisplayDate} from './../Util.js';

export default class EmploymentSection extends React.Component {

	render() {
		var employment = this.props.employment;
		var descList = employment.descList.map((item)=>{
			return <li>{item}</li>;
		});

		return (
			<section className="entrySection">
				<div className="sectionHeader">
					<p className="jobTitle">{employment.title}</p>
					<p className="company">{employment.employer}</p>
					<img src={employment.logo} alt={employment.employer + ' Logo'} className="logo"/>	
					<p className="date">
						{getDisplayDate(employment.startDate)} - {getDisplayDate(employment.endDate)}
					</p>
				</div>
				<ul className="experienceList">{descList}</ul>
				<TagsSection tagList={employment.tags}/>
			</section>
		);
	}
}

