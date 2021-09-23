// let name = 'arun yadav';
// console.log(name);
////constants
// const dd =1;
// console.log(dd); 
//value of a variable can change but constant cannot change 
// in order to explicitly set a variable to null we use let variable = null.
// javaScript is a dynamic language.
//i.e the type of variable is determined based on the values we assign to them.
//console.log(typeof dd);
// primitive types -> number , string , undefined , null, Boolean
// reference types -> objects , Array , Functions 
// highly related variables can be put inside an object.
// let person = {
//   name : "arun", 
//   age : 11
// };
// person.name = "varun";
// console.log(person);
// Arrays
// let colors = [1,2,3,4,'Red'];
// console.log(colors);
// // In js arrays are dynamic sized. // All elements not needed to be same.
// console.log(typeof colors);
// console.log(colors.length);

// function greet(name){
//     console.log('Have a good day '+name);
// }
// greet('Arun');

//  types of functions
// function number(number){
//    return number*number;
// }
// console.log(number(5));
//console.log((3**4));
// operators in js
// let x =1 ; 
// console.log(x>0);
// let x = 1 ; 
// let y = 1;
// console.log(x==y);
//console.log('1'==1); // will return true because it is 
// loose equality operator
// Ternary operator
// let rating = 100;
// rating > 100 ? console.log('gold') : console.log('silver');  
/*
//  falsy(false) values in js
undefined , null , 0 , false, '', NaN (mathematical operation produce this result);
Anything that is not falsy is truthy
Bitwise operators
console.log(1&2);
console.log(1|2);
//control flow
*/
// let hour = 13;
// if(hour >= 6 && hour < 12){
//    console.log('good morning');
// }
// else if(hour >=12 && hour < 18){
//     console.log('good evening');
// }
// else
//    console.log('good night');
// with switchCase we compare a variable with bunch of values
// let role = 'unicorn';

// switch(role){
//     case 'master':{
//         console.log('js');
//         break;
//     }
//     case 'unicorn':{
//         console.log('life is blue');
//         break;
//     }
//     default : {
//         console.log('this is default'); 

//     }
// }
// for and while loop are exactly the same as others
// let i =0 ;
// while(i<=2){
//     console.log(i);
//     i++;
// }
// do while loop -> 
// let o =0 ;
// do{
//     console.log(o);
//     o++;
// }
// while(o <= 2);
// infinite loops -> while(true){ }
// or any loop that does not have an ending statement.
// for-in loop in js
// const person = {
//   name : 'Mosh',
//   age : 30
// };
// for(let key in person){
//     console.log(key, person[key]);
// }
// const ball = {
//    type : 'football',
//    next : 'ball'
// };
// for(let key in ball){
//     console.log(key , ball[key]);
// }
// const color = ['red','green','blue'];
// for(let key in color){
//     console.log(color[key]);
// }
// Next type of loop to iterate over Array
// ->>>> the for-of loop
// const color = ['red','green','blue'];
// for(let colors of color){
//     console.log(colors);
// } 
// break and continue
// function max(a,b){
//     if(a>b)
//        return a;
//    else return b;   
// }
// console.log(max(13,5)); 
// function isLandScape(height , width){
//    return width>height;
// }   
// function oddeven(num){
//     return (num % 2 == 0) ? 'EVEN' : 'ODD';
// }
// console.log(oddeven(2));
// const movie = {
//   title : 'a',
//   release : '1990',
//   rating : 4.5
// };
// function showProperties(movie){
//     for(let key in movie)
//     console.log(key, movie[key]);
// }
// showProperties(movie);
// function showStars(rows){
//     for(i =0  ; i<rows; i++){
//         let pattern = '';
//      for(j =0; j<i; j++){
//          pattern += '*';
//          console.log(pattern);
//      }
//     }
// }
// showStars(10);
// Objects
/*const circle = {
   radius : 1,
   location :{
       x:1,
       y:3
   },
   isVisible : true,
   draw : function(){
       console.log('drawing a circle);
   }
};
console.log(circle.location.x);
Objects are use when we want to group related variables

Factory functions
function createCircle(radius){
    return {
       radius,
       draw(){
           console.log('drawing circle');
       }
    }
}

const circle1 = createCircle(10);
console.log(circle1.draw());

// constructor function
function Circle(radius) {
    this.radius = 11;
    this.draw = function(){
        console.log('draw');
    } 
}

const circle = new Circle(11);
console.log(circle.radius);
console.log(circle.draw());

objects are dynamic in javaScript
we can add and remove thier properties once they are created.

const circle = {
   radius : 1
};
circle.color = 'yellow';
console.log(circle);
delete circle.radius;
console.log(circle);

value vs references in java

let c = 10;
let d = c;
c = 30;
c = 30 , d = 10

let x = {val : 10};
let y = x;

x.val++;
console.log(x);
console.log(y);
{ val: 11 }
{ val: 11 }

// Properties of Object constructor function
const circle = {
    radius : 1,
    location :{
        x:1,
        y:3
    },
    isVisible : true,
    draw : function(){
        console.log('drawing a circle');
    }
};
for( let key in circle)
    console.log(key, circle[key]);

    for(let key of Object.keys(circle))
        console.log(key);

    
for(let entry of Object.entries(circle))
    console.log(entry);

    const c = {
     r : 1, 
     d : 33
 };
 
 console.log('d' in c);

 >> cloning an object
    const c = {
    r : 1, 
    d : 33
};
const cpy = {};
for(key in c)
    cpy[key] = c[key];

console.log(cpy);

>> Better way
   const c = {
    r : 1, 
    d : 33
};
const another = Object.assign({}, c);
console.log(another);

>> best way 
const c = {
    r : 1, 
    d : 33
};
const another = {... c};
console.log(c);

garbage collection in js >> garbage collector finds the objects that are no longer 
used and it automatically deallocate the memory that was allocated earlier.

>> Math in js
console.log(Math.random()); gernerating values from 0 to 1;

>> String 
in js we have 2 types of Strings
 i.e primitive and object type
 learn more in the documetation
const message = "js is dope!!";
console.log(message.length);
const another = new String("js");

>> template literals
const message = `Backslash removed 
like magic 
by using literals`;
console.log(message);

>> Date object
const now = new Date();
console.log(now);
>> go through the documentation for more

const address = {
    city : 'Noida',
    Address : 'Sector - 131 Noida',
    zip :  201301
};

 function showAddress(address){
    for(let key in address)
        console.log(key , address[key]);
 }

showAddress(address);

// factory and constructor function revision.

function createAddress (zip){
    return{
    city : 'Noida',
    Address : 'Sector - 131 Noida',
    zip
    };
    }

const add1 = createAddress(110001);
console.log(add1);

function CreateAdd(city,Address, zipcode){
    this.city = city;
    this.Address = Address;
    this.zipcode = zipcode;
}

let address = new CreateAdd('Bangalore', 'd -142 Park Plaza', 909032);
console.log(address);

js practice

function createBlogPost(title,body, author,views,{
    authorr ,
    bodyy } ,islive){
    return {
        title, 
        body ,
        author ,
        views,
        comments : {
            authorr ,
            bodyy
        }, 
        islive 
    }
}
const obj = {authorr : 'Kyle', bodyy: 'Kyle Jenner'};
let post1 = createBlogPost(`JJ Smith`, 'i will rock the concert',
`raman`, 1000,obj, true);

console.log(post1);


*/
