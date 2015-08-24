import React from 'react';
import TagsSection from './TagsSection.jsx';

export default class ClassSection extends React.Component {
	render() {
		var classObj = this.props.classObj;
		var descList = classObj.descList.map(function(item) {
			return <li>{item}</li>;
		});
		return (
			<div className="classSection">
				<h4>{classObj.title}</h4>
				<ul>{descList}</ul>
				<TagsSection tagList={classObj.tags} />
			</div>
		);
	}
}
