const Issue =  {

	title: 'Branches problem',
	repositoryNameAssociated: 'Help_desk_repo',
	status: 'Open',
	numberOfComments: 1,
	labels: ['Bug','Support'],
	author: 'Gabriel Torres Mendoza',
	dateCreated: new Date().toDateString(),
	lastUpdated: 'unknown',
	
	
	getTitleAndAuthor: function() {

		return `Title: ${this.title} | Author: ${this.author}`

	},

	getGeneralInfo: function() {

		return `Repository: ${this.repositoryNameAssociated} | Status: ${this.status} `
	
	},

}



console.log('Issue -> ' + Issue.getTitleAndAuthor() );
console.log(`Info -> ${Issue.getGeneralInfo()} `);




