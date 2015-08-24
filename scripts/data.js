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
				'Asked to comeback fulltime. Starting in August 2016.',
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
				'Responsible for grading programming assignments.',
				'Graded and proctored exams.'
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
				'During the summers of 2013 and 2014.',
				'Worked under professor Arup Guha to teach high school students introductory programing concepts in Python.',
				'Taught recitation lectures, wrote engaging assignments for students, and assisted in the grading of papers.'
			],
			tags: ['Python']
		}
	],
	education: [
		{
			name: 'University of Central Florida',
			degree: 'B.S. in Computer Science',
			startDate: new Date(2012, 8, 0, 0, 0, 0, 0),
			endDate: 'Present',
			logo: 'imgs/ucf.png',
			desc: 'Pursuing a Bachelors of Science in Computer Science and in the ' +
				'Burnett Honors College. Expected graduation date: May 2016. Current GPA: 3.6',
			classes: [
				{
					title: 'Object Oriented Software Design',
					code: 'COP 4331',
					descList: [
						'Created an android application CrossCard, a multiplayer mobile card game',
						'Learned common design patterns in modern software systems',
						'Researched different types of software developement life cycles.'
					],
					tags: ['Java', 'Android'],
				},
				{
					title: 'Programming Languages',
					code: 'COP 4020',
					descList: [
						'Studied different programming languages and thier nuances.'
					],
					tags: ['Haskell', 'C++', 'F#'],
				},
				{
					title: 'Robot Vision',
					code: 'CAP 4453',
					descList: [
						'Studied historical and modern computer vision techniques as well' +
						' as machine learning techniques in computer vision such as ' + 
						'ADA Boost.',
					],
					tags: ['C', 'Java'],
				},
				{
					title: 'Database Systems',
					code: 'COP 4710',
					descList: [
						'Studied theories behind relational databases as well as modern ' +
						'database systems.',
						'Created an Android app that helps fishermen track the fish ' +
						'they\'ve caught. Wrote backend with Node.js.'
					],
					tags: ['MySQL', 'Javascript', 'Java', 'Node.js'],
				}
			],
		}
	],
};

module.exports = data;
