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

Arrays in js 

const numbers = [2,34,34];
// methods to add elements to the end , begn , middle
// end
numbers.push(5,6);
// beginning
numbers.unshift(69);
// middle 
numbers.splice(2,0,44);
console.log(numbers);

// finding elements => 
console.log(numbers.indexOf(33));
console.log(numbers.lastIndexOf(34));

const number = [24,34,2];
console.log(number.indexOf(34));
console.log(number.includes(2));

---- finding reference types

const course = [
   { id: 1, name: 'a'},
   { id: 2, name: 'b'}  
];
// returning false because both the objects have different references.
//console.log(course.includes({id:1,name:'a'})); // => false
console.log(course.find((elem) => {
   return elem.id === 1;
}));
 
const movies = [
    {id : 1 , name : 'Life of Pi'},
    {id : 2 , name : 'The White Tiger'}
];
let res = movies.find((movie) => {
    return movie.id == 1;
}); // returns the first element that matches this criteria else return undefined.
console.log(res);
// removing elements from the array
const nums = [1,2,3,4];
let last = nums.pop();
console.log(last);
let first = nums.shift();
console.log(first);
nums.splice(1,1);
console.log(nums);
// removal of elems can also be done at end , begin , middle
// emptying an array
// let nums = [1,3,5,6];
//  nums = [];
// nums.length = 0 ;
// console.log(nums);
// console.log(nums);

// concatenating an array
let nums = [1,3,5,6];
let nums2 = [2,5,2,5];
let res = nums.concat(nums2);
console.log(res);

// slice is used to divide an array into 2 parts
console.log(res.slice(1,5)); // 3,5,6,2

// the spread operator
const first = [23,2,35,12,5];
const second = [5,3,63,6,3];
const combined = [...first,'Spread is good',...second];
console.log(combined);
const copy = [...combined];
console.log(copy);

// iterating an array
const numbers = [2,53,63,6,32];
for(let num of numbers)
    console.log(num);

 numbers.forEach((num) =>{
   console.log(num);
 });   

 let nums = [2,5,1,6];
 let res = nums.join('..');
 console.log(res);
 
 const message = 'THis is my message';
 let parts = message.split(' ');
 
 const combined = parts.join('-');
 console.log(combined);

 // sorting 
 const nums = [9,56,5,4,3,44,32];
 nums.sort();
 console.log(nums);
 nums.reverse();
 console.log(nums);
 const courses = [
  {id: 1, name : 'Js'},
 {id : 2 , name: 'Python'}
 ];
 courses.sort((a,b) => {
  // a=>b  1 
  // a<=b -1
  // a===b 0
 //  if(a.name > b.name) return 1;
 //  if(a.name < b.name) return -1;  
    return b.id-a.id;
 });
 
 console.log(courses);
 
 // testing the elements of array 
 const nums = [2,3,6,3,6,3];
 let res = nums.every((val)=>{
   return val >= 0;
 });
 console.log(res);
 // same as this every() method we also have some() method.
 
 // filtering an array 
 const nums = [4,-3,3,-6,38,-67,5,75,3];
 const filtered = nums.filter((val) =>{
   return val>0;
 });
 console.log(filtered);
 
 // mapping values of the array
 const nums = [4,-3,3,-6,38,-67,5,75,3];
 const filtered = nums.filter((val) =>{
   return val>0;
 });
 const res = filtered.map((n) => {
  return '<li>'+ n + '</li>';
 }); 
 //console.log(res);
 const html = '<ul>'+ res.join('') + '</ul>';
 console.log(html);
 
 // reducing an array 
 const nums = [6,5,7,4,7];
 let sum  = 0;
 for(let n of nums)
     sum += n;
 
 console.log(sum);
 
 const summ = nums.reduce((accumulator , currentValue) =>{
  return accumulator+currentValue;
 },0);
 
 console.log(summ);
 function arr(min , max){
    let ans = []; 
    for(let i = min ; i<=max; i++){
           ans.push(i);
     }
    return ans;
 }
let ans =  arr(-10,-4);
console.log(ans);
const nums = [3,23,6,3,56,32];

function includes(arr,num){
   for(let n of arr)
         if(n === num)
          return true;
   return false;       
}
console.log(includes(nums,33));
// function declaration vs function expression

// function declaration
function walk(){
     console.log('walk');
 }
 // in js functions are objects
 // function expression
 let run = function(){
   console.log('run');
 };
run();

we can call a function even before it is defined when using function declaration
because js engine moves all the function declaration to the top when running code.
This is what we call as hoisting .
Hoisting is the process of moving the function declaration to the top.
and it is done automatically by js.

1+undefined = NaN

// Arguments
function args(){
   let sum = 0;
   for(let n of arguments)
       sum+=n;
   return sum;    
}
console.log(args(4,5,4,6,3,5));

// the rest operator
// in modern js if we want to use function with varying number of parameters
// we use the rest operator
function restOp(...args){
  console.log(args); 
}
// when we pass varying number of arguments rest operator will put them into an array .
// only one condition -> rest parameter must be the last function paramter
restOp(12,4,2,5,24);

// default parameters
function interest(p, r = 3.5, t){
   // example
  // r = r || 3.5;
    return p*r/100*t;
}
console.log(interest(10000,3.5,5));

// getters and setters
// get          set
const person = {
    firstName : 'Mosh',
    lastName : 'Hamedani',
    get fullName(){
      return `${person.firstName} ${person.lastName}`;   
    },
    set fullName(value){
       const parts = value.split(' ');
       this.firstName = parts[0];
       this.lastName = parts[1];
    }
};
person.fullName = 'Arun Yadav';
console.log(person.fullName);


 // try & catch 
function isName(val){ 
if(typeof(val) !== 'string') 
  throw new Error('Value is not a string');
return val;
}
try{
    isName(11);
}
catch(e){
    console.log(e);
}

// global vs local scope
{
const message = 'hi';
}
console.log(message);
// message is not defined
// local variables take precedence in a function

// let vs var
let x = 0;
var y = 0; // avoid using var 
function start(){
    for(var i = 0 ; i<5; i++)
      console.log(i);
  console.log(i); // 5 will also be logged    
}
// when we declare variable with var its scope is not limited 
// to the block where it is defined . it is limited to
// the function in which it is defined.
start();
// and this is not the way how all programming language work.
// let , const - block scoped 
// var - function scoped

// this keyword
// this refers to the object that is executing the 
// current function

// method = obj
const video = {
    title : 'a',
    play(){
        console.log(this); 
    } 
};
video.play(); 
// because play() is a method in video object

// function = global(window,global)
function playVideo() {
    console.log(this);
}  
playVideo(); 

const gg = {
    title : 'a',
    tags : ['a','b','c'],
    showtags(){
        this.tags.forEach(function(tag){
         console.log(tag);
        });
    }
}
gg.showtags();

functions are objects in javascript

// changing this 
function playVideo(a,b){
    console.log(this);
}
playVideo.call({name : 'Mosh'},1,2); 
// now this will refer to the object instead of reffering to window.
playVideo.apply({name : 'Mosh'},[1,2]);
const fn = playVideo.bind({name : 'Mosh'});
fn();
// all three methods produce similar results 

function sum(...args){
    let sum = 0;
    for(let arg of args)
       sum+=arg;
  return sum;      
}
console.log(sum(1,3,3,2,3));

const circle = {
  radius : 2,
  area(){
      return Math.PI*this.radius*this.radius;
  }
};
console.log(circle.area());
*/