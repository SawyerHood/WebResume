import React from 'react';

export default class TagsSection extends React.Component {
	render() {
		var tags = this.props.tagList;
		tags = tags.map((tag) => {
			return <span>{tag}</span>;
		});
		return (
			<div className="tagsSection">
				{tags}
			</div>);
	}
}
