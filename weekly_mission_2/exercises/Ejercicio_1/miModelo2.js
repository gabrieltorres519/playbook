const PullRequest = {

	title: 'Cambios en la función "compra" ',
	author: 'gabrieltorres519',
	branchName: 'Main',
	dateCreated: new Date().getDate(),
	status: 'Pending',
	repositoryNameAssociated: 'Help_Desk_prod',


	getStatus: function(){
		return 'Status: '+this.status+' | Created at: '+this.dateCreated
	},
	
	gatTitleAndAuthor: function(){
		return 'Title: '+this.title+' | Author: '+this.author
	},

}


console.log(PullRequest.getStatus());
console.log(PullRequest.gatTitleAndAuthor());
