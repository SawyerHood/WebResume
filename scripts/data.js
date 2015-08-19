var data = {
	name: 'Sawyer Hood',
	experience: [
		{
			employer: 'Facebook',
			title: 'Software Engineer Intern',
			startDate: new Date(2015, 5, 0, 0, 0, 0, 0),
			endDate: new Date(2015, 8, 0, 0, 0, 0, 0),
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
			],
			tags: ['Hack', 'Javascript', 'PHP', 'React', 'Linux']
		},
		{
			employer: 'UCF',
			title: 'Teaching Assistant',
			startDate: new Date(2015, 1, 0, 0, 0, 0, 0),
			endDate: new Date(2015, 5, 0, 0, 0, 0, 0),
			logo: 'imgs/ucf.png',
			descList: [
				'Teaching assistant for Intro to C programming under professor Arup Guha at the University of Central Florida.',
				'Responsible for holding office hours to help students with questions to course material.',
				'Responsible for grading programming assignments.'
			],
			tags: ['C', 'Python']
		},
		{
			employer: 'Center for Independent Living',
			title: 'Jr. Programmer',
			startDate: new Date(2014, 1, 0, 0, 0, 0, 0),
			endDate: new Date(2014, 10, 0, 0, 0, 0, 0),
			logo: 'imgs/cil.jpg',
			descList: [
				'Responsible for maintaining a database system that keeps track of thousands of adults with disabilities throughout the South-East United States. Written using the Django web framework (Python). Started as an intern, was promoted to the position of Jr. Programmer.',
				'Experience designing database tables (MySQL).',
				'Wrote an interactive form used to filter and sort paperwork forms that our consumers are required to fill out (JavaScript).',
				'Partially responsible for administering our Debian servers.',
			],
			tags: ['Python', 'Django', 'MySQL', 'Javascript', 'Linux']
		},
		{
			employer: 'SI@UCF',
			title: 'Teaching Assistant',
			startDate: new Date(2013, 5, 0, 0, 0, 0, 0),
			endDate: new Date(2014, 8, 0, 0, 0, 0, 0),
			logo: 'imgs/ucf.png',
			descList: [
				'Worked under professor Arup Guha to teach high school students introductory programing concepts in Python.',
				'Taught recitation lectures, wrote engaging assignments for students, and assisted in the grading of papers.'
			],
			tags: ['Python']
		}
	],
};

module.exports = data;
