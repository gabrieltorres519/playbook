

   
class Repo {
    constructor(){
      this.name = "LaunchX"
      this.author = "carlogilmar"
      this.language = "JavaScript"
      this.numberOfCommits = 100
      this.stars = 199
      this.forks = 299
      this.issues_open = 10
      this.issues_close = 10
    }
  
    getTotalIssues(){
        return this.issues_open + this.issues_close
    }

    getGeneralInfo(){
        return `This repository ${this.name} was created by ${this.author}`
    }
}
  
  const myRepo = new Repo();

   console.log(myRepo.getGeneralInfo())
   console.log("Issues totales: " + myRepo.getTotalIssues())
   

//----------------------------------------------------------------------------------------------------------------------



class Issue {
    constructor(){
      this.title = 'Branches problem'
      this.repositoryNameAssociated = 'Help_desk_repo'
      this.status = 'Open'
      this.numberOfCommits = 1
      this.labels = ['Bug','Support']
      this.author = 'Gabriel Torres Mendoza'
      this.dateCreated = new Date().toDateString()
      this.lastUpdated = 'unknown'
    }
  
    getTitleAndAuthor(){
        return `Title: ${this.title} | Author: ${this.author}`
    }

    getGeneralInfo2(){
        return `Repository: ${this.repositoryNameAssociated} | Status: ${this.status} `
    }
}


const myIssue = new Issue(); 

console.log('Issue -> ' + myIssue.getTitleAndAuthor() );
console.log(`Info -> ${myIssue.getGeneralInfo2()} `);


//---------------------------------------------------------------------------------------------------------------------


const PullRequest1 = {

	title: 'Cambios en la función "compra" ',
	author: 'gabrieltorres519',
	branchName: 'Main',
	dateCreated: new Date().getDate(),
	status: 'Pending',
	repositoryNameAssociated: 'Help_Desk_prod',


	getStatus: function(){
		return 'Status: '+this.status+' | Created at: '+this.dateCreated
	},
	
	gatTitleAndAuthor2: function(){
		return 'Title: '+this.title+' | Author: '+this.author
	},

}


class PullRequest {
    constructor(){
      this.title =  'Cambios en la función "compra" '
      this.author = 'gabrieltorres519'
      this.branchName = 'main'
      this.dateCreated = new Date().toDateString()
      this.status = 'Pending'
      this.repositoryNameAssociated = 'Help_Desk_prod'
    }
  
    getStatus(){
        return 'Status: '+this.status+' | Created at: '+this.dateCreated
    }

    gatTitleAndAuthor2(){
        return 'Title: '+this.title+' | Author: '+this.author
    }
}


const myPullRequest = new PullRequest();

console.log(myPullRequest.getStatus());
console.log(myPullRequest.gatTitleAndAuthor2());