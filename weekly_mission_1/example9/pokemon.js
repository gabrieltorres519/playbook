class pokemon {

	constructor (name){
	
		this.name = name;
	
	}

	sayHello (){

		console.log("Mi pokemon "+ this.name + "te saluda!!!");

	}

	sayMessage(message){
		
		console.log("Mi pokemon "+ this.name + " te dice "+ message );
	
	}

}

module.exports = pokemon
