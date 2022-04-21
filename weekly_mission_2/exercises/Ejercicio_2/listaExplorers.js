// Con el siguiente array de objetos realiza los ejercicios

const explorers = [
 {
   name: "Explorer 1",
   exercises_completed: 10,
   rate: 99,
   city: "CDMX",
   stack: [
     "js",
     "c#"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: true,
       exercisesFinished: true
     }
   }
 },
 {
   name: "Explorer 2",
   exercises_completed: 9,
   city: "Veracruz",
   rate: 50,
   stack: [
     "js"
   ],
   missions: {
     onboarding: {
       isFinished: false,
       exercisesFinished: false
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 },
 {
   name: "Explorer 3",
   exercises_completed: 3,
   city: "Sonora",
   rate: 100,
   stack: [
     "elixir"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 },
 {
  name: "Explorer 4",
  exercises_completed: 3,
  city: "Michoacán",
  rate: 100,
  stack: [
    "elixir",
    "js"
  ],
  missions: {
    onboarding: {
      isFinished: true,
      exercisesFinished: true
    },
    frontend: {
      isFinished: false,
      exercisesFinished: false
    }
  }
}
]






// 1 Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
var counter = 0;

console.log("Printing the name of each explorer!: \n\n");

explorers.forEach(exp => {
  counter++;
  console.log("Explorer's "+counter+" name is: "+exp.name+"\n");
})

console.log("\n");



// 2 Imprime el stack de cada explorer, usa FOR EACH

console.log("Printing the stack of each explorer!: \n\n");

explorers.forEach(exp => {
  counter++;
  console.log(`The stack of ${exp.name}  is:\n`);
  exp.stack.forEach(tech => console.log("   "+tech+"\n"));
})



// 3 Crea una nueva lista con las listas de stacks de cada explorer, usa MAP

const stacks = explorers.map(function(exp){return exp.stack});

console.log("\n Stacks en la lista son: \n\n");

stacks.forEach(stack => console.log("   ["+stack+"]\n"));




// 4 Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)

explorers.forEach(exp => {

  suStack = exp.stack
  
  jsStored = suStack.filter((tech)=>tech.includes('js'));

  if(jsStored == "js") console.log(exp.name+" usa Javascript!!\n");

  
});

 

// 5 Busca el primer explorer que sea de la CDMX, usa FIND

const exp = explorers.find((exp) => exp.city === "CDMX" );
console.log("El primer explorer de CDMX es: "+exp.name+"\n");


// 6 Obtén la suma de todos los exercises_completed, usa REDUCE

arrayExercises= explorers.map(function(exp){return exp.exercises_completed});

exercisesSum = arrayExercises.reduce((accumulator,current)=>accumulator+current,0);

console.log("The total of exercises completed by the explorers are: "+exercisesSum+"\n");


// 7 Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME

const booleans = explorers.map(function(exp){return exp.missions.frontend.isFinished});
const isOneTrue = booleans.some((b)=> b=== true);

console.log("Al menos un estudiante terminó sus ejercicios de Frontend: "+isOneTrue+"\n");



// 8 Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.

const booleans2 = explorers.map(function(exp){return exp.missions.onboarding.isFinished});
areAllTrue = booleans2.every((b) => b==="true");

console.log("Todos los estudiantea terminaron sus ejercicios de onboarding: "+areAllTrue+"\n");