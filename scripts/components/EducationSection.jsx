import React from 'react';
import ClassSection from './ClassSection.jsx';
import {getDisplayDate} from './../Util.js';

export default class EducationSection extends React.Component {

	render() {
		var education = this.props.educationEntry;
		var classes = education.classes.map(function(item) {
			return <ClassSection classObj={item} />;
		});
		return (
			<section className="entrySection">
				<div className="sectionHeader">
					<p className="degreeName">
						{education.degree}
					</p>
					<p className="schoolName">
						{education.name}
					</p>
					<img
						src={education.logo}
						alt={education.name + ' Logo'}
						className="logo"/>
					<p className="date">
						{getDisplayDate(education.startDate)} - {getDisplayDate(education.endDate)}
					</p>
				</div>
				<div className="educationColumn">
					<p>
						{education.desc}
					</p>
					<h3>Classes of Interest</h3>
					<div className="classesList">
						{classes}
					</div>
				</div>
			</section>
		);
  }
}
