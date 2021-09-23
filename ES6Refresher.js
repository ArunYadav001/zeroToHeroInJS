import { Teacher } from "./Teacher";


// function sayhello(){
//     for(var i = 0 ; i<5 ;i++ ){
//       console.log(i);
//     }
//     console.log(i);
// }


//sayhello();

// the problem with var is that the variable scope inside the loop
// is  valid throughout the function.

// this problem is solved by the keyword let.
// let is only accessible in the block where it is defined.

/*
var -> function
let -> block
const -> block
*/

// const is used to define constants.

// let vs const
// let variables can be reassigned while const variables are read only.

// OBJECTS
const person = {
  name:'Arun Yadav',
  walk:function(){
      console.log('walking');
  },
  talk(){}
};

person.walk();
person['name'] = 'ARUN';
console.log(person.name);

// ARROW FUNCTIONS
const square = function(number){
    return number*number;
}
// we use fat arrow when using the arrow functions
const square2 = (number) => {
    return number*number;
}
const square3 = number => number*number;

//console.log(square(2));
//console.log(square3(2));

const jobs =[
   {id:1, isActive:'true'},
   {id:2, isActive:'true'},
   {id:3, isActive:'true'},
   {id:4, isActive:'false'} 
];

const activeJobs = jobs.filter(function(job){
   return job.id;
});

// const activeJobs2 = jobs.filter((job) => {
//     console.log(job.isActive);
//  });

 //console.log(activeJobs2);
 //console.log(activeJobs);

 // Arrow functions do not rebind the this keyword.

 const p ={
   talk(){
       setTimeout(() =>{
         console.log("this", this); 
       },100);
   }
 };
 //p.talk();

 // Array.map()
 // Array.map() is used to render list in react and is a very useful method.

 const colors = ['red','green','blue'];
 // Imagine we want this to render as <li>color</li>
 const items = colors.map((color) => {
    return `<li>${color}</li>`
 });
 console.log(items);

 //OBJECT DESTRUCTURING
 const address = {
     street : '',
     city : '',
     country : ''
 };

 const street = address.street;
 const city = address.city;
 const country = address.country;

 //const{street,city,country} = address;
 // we can also use alias to these variables
 
 // Both the above statements are doing similar work
 // i.e storing in street,address and city from address.

 // SPREAD OPERATOR *****
//  const first = [1,2,3];
//  const second = [4,5,6];

//  const combined = first.concat(second);
//  console.log(combined);

//  const spreadCombined = [...first, 's', ...second];
//  console.log(spreadCombined);

// when we apply the spread operator we get the individual items

// const clone = [...first];
// console.log(first);
// console.log(clone);

// we can also use the spread operator on objects
 const first = { name:'Mosh'};
 const second = { job:'Instructor'};
 
 const comb = {...first,  ...second, location:'Australia'};
 console.log(comb);

//  //CLASSES
//  class Person{

//      constructor(name){
//       this.name = name;
//      }

//      walk(){
//          console.log('Walking');
//      }
//  }  

//  const per = new Person("ARUN");
//  console.log(per.name);

// INHERITANCE
//    class Teacher extends Person{
//      constructor(name,degree){
//          super(name);
//          this.degree = degree;
//      }

//        teach(){
//            console.log("teach");
//        }
//    }

//    const t = new Teacher("Mosh", "Msc");
//    console.log(t.degree);
//    console.log(t.walk());

   //Modules
   // splitting code between multiple files is called modularity.
   // and we call each file a module
   // when working with modules the objects that we define are private by default
   // in order to make a class visible we have to make it public
   // and we do that by exporting the class

const teacher = new Teacher("Mosh", "Msc");
const m = teacher.teach();
console.log(m);

// DEFAULT EXPORTS
// import ... from './...';
// NAMED EXPORTS
// import {...} from './...';
// DEFAULT AND NAMED EXPORTS
// import ... ,  {...} from './...'; -> this pattern is used in react application
