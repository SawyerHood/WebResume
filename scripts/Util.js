export function getDisplayDate(date) {
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
