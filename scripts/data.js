var data = {
	name: 'Sawyer Hood',
	experience: [
		{
			employer: 'Facebook',
			title: 'Software Engineer Intern',
			startDate: new Date(2015, 4),
			endDate: new Date(2015, 7),
			logo: 'imgs/facebook.png',
			descList: [
				'On Facebook’s i18n team implementing locale fallback.',
				'Previously any strings that were not translated into a' 
				+ ' user\’s locale were displayed in English (US).'
			  + ' I reengineered the FBTranslate system (Hack) to'  
				+ 'fallback to similar language families if available' 
				+ '(Spanish Mexico to Spanish Latin America).',
				'Created responsive UI to let users in under translated' 
				+ 'locales pick their fallback if no default is available (React).',
				'The system is called 100’s of times per page request and is currently on a limited rollout.',
				'Locale fallback impacts millions of users in developing nations and under translated locales.',
			]
		},
		{
			employer: 'UCF',
			title: 'Teaching Assistant',
			startDate: new Date(0, 2015),
			endDate: new Date(4, 2015),
			logo: 'imgs/ucf.png',
			descList: [
				'Teaching assistant for Intro to C programming under professor Arup Guha at the University of Central Florida.',
				'Responsible for holding office hours to help students with questions to course material.',
				'Responsible for grading programming assignments.'
			]
		},
		{
			employer: 'Center for Independent Living',
			title: 'Jr. Programmer',
			startDate: new Date(0, 2014),
			endDate: new Date(9, 2014),
			logo: 'imgs/cil.jpg',
			descList: [
				'Responsible for maintaining a database system that keeps track of thousands of adults with disabilities throughout the South-East United States. Written using the Django web framework (Python). Started as an intern, was promoted to the position of Jr. Programmer.',
				'Experience designing database tables (MySQL).',
				'Wrote an interactive form used to filter and sort paperwork forms that our consumers are required to fill out (JavaScript).',
				'Partially responsible for administering our Debian servers.',
			]
		},
		{
			employer: 'SI@UCF',
			title: 'Teaching Assistant',
			startDate: new Date(5, 2013),
			endDate: new Date(7, 2014),
			logo: 'imgs/ucf.png',
			descList: [
				'Worked under professor Arup Guha to teach high school students introductory programing concepts in Python.',
				'Taught recitation lectures, wrote engaging assignments for students, and assisted in the grading of papers.'
			]
		}
	],
};

module.exports = data;
