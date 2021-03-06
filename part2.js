/*
 OOP
A programming paradigm centered around objects
rather than functions

=> four pillars of oops
encapsulation 
inheritance
polymorphism
abstraction

so in oop we group related variables and functions that 
operate on them into objects, this is what we call 
encapsulation.(reduce complexity + increase reusability)

hiding the complexity and only showing whats necessart 
to the user is abstraction
With abstraction we reduce the impact of change
(reduce complexity + isolate impact of changes)

Inheritance
is a mechanism that allows us to eliminate redundant
code
(Eliminate redundant code)

Polymorphism
Many forms one name 
(Refactor the code)
the way each element is rendered is different from others

OBJECTS

const circle = {
    radius : 1,
    location:{
        x:1,
        y:1
    },
    draw(){
        console.log('draw');
    }
};

circle.draw(); 

// so creating objects with object literal syntax
// is an issue only if that object has behaviour.

// the solution is to use factory or constructor function.

// Factory function

function createCircle(radius){
       return {
        radius : radius, // radius , 
        draw(){
            console.log('draw');
        }
    };     
}

const circle = createCircle(2);


// Constructor function 
function Circle(radius){
    this.radius = radius;
    this.draw =  function(){
        console.log('draw');
    }
}
const another = new Circle(1);


// constructor property
// every object in javascipt has a property called
// constructor
// and that references the fucntion used to construct 
// or create that object .   

Functions are objects too in js.
in a nutshell in js we have primitives and objects

function Circle(radius){  
    this.radius = radius;
    
    this.defaultLocation = {x:0,y:0};

    this.computeOptimumLocation = function(){

    }
    
    this.draw =  function(){
        this.computeOptimumLocation();
        console.log('draw');
    }
}
const circle = new Circle(10);

circle.location = {x:2};
console.log(circle);

for(let key in circle)
   console.log(key);

   // StopWatch
   function StopWatch(){
       let duration , startTime , running , endTime = 0;
       this.start = function(){
           if(running)
           throw new Error('StopWatch has already started');
   
           running = true;
           startTime = new Date();
       };
       this.stop = function(){
          if(!running)
          throw new Error('StopWatch is not started');
   
          running = false;
          endTime = new Date();
   
          const seconds = (endTime.getTime()-startTime.getTime())/1000;
          duration += seconds;
       };
       this.reset = function(){
            startTime = null;
            endTime = null;
            running = false;
            duration = 0;
       }
       Object.defineProperty(this, 'duration',{
         get : function(){
             return duration;
         }
       });
   }
   
   const sw = new StopWatch();
   sw.start();

   // Inheritance (is a relationShip)
classical vs prototypical inheritance
A prototype is essentially the parent of another object
A prototype is just a regular object in memory
Every object has a prototype or parent except the 
root object.

Multilevel Inheritance 
               
            objectBase
      arrayBase
myArray
 

               objectBase
     circleBase
circle

let person = {
  name : 'Mosh'
};
console.log(person.name);

the properties of objectBase are not writable ,
not enumerable and not configurable

To get prototype of object
Object.getPrototypeOf(myObj);

function Circle(radius){
    // Instance members
    this.radius = radius;   

    this.move = function(){
        console.log('move');
    }

}
// Every constructor has a prototype property
// prototype members
Circle.prototype.draw = function(){
    console.log('draw');
} 
Circle.prototype.toString = function(){
    return 'cicle radius ' + this.radius;
}

const c1 = new Circle(1);
const c2 = new Circle(3);

console.log(c1.toString());
// returns intance members
console.log(Object.keys(c1));
// returns all members (instance + prototype)
for(let key in c1)
    console.log(key);
    
Avoid extending built in objects
we should not modify the built in objects in js
because some libray might use that method which you have
modified that will cause some errors  

<<Dont modify the object you don't own>> 

// Exercise
function StopWatch(){
    let duration , startTime , running , endTime = 0;
    
    Object.defineProperty(this, 'duration',{
      get : function(){
          return duration;
      }
    });
    Object.defineProperty(this, 'startTime',{
        get : function(){
            return startTime;
        }
      });
      Object.defineProperty(this, 'running',{
        get : function(){
            return running;
        }
      });
      Object.defineProperty(this, 'endTime',{
        get : function(){
            return endTime;
        }
      });
}
StopWatch.prototype.start = function(){
    if(this.running)
    throw new Error('StopWatch has already started');

    this.running = true;
    this.startTime = new Date();
};
StopWatch.prototype.stop = function(){
   if(!this.running)
   throw new Error('StopWatch is not started');

   this.running = false;
   this.endTime = new Date();

   const seconds = (this.endTime.getTime()-this.startTime.getTime())/1000;
   this.duration += seconds;
};
StopWatch.prototype.reset = function(){
     this.startTime = null;
     this.endTime = null;
     this.running = false;
     this.duration = 0;
} 

// 295 siddhu moose waala op //
 
function Circle(radius){
    this.radius = radius;
}
Circle.prototype.draw = function(){
    console.log('draw');
}
Circle.prototype.duplicate = function(){
    console.log('duplicate');
}

function Shape(){

}
Shape.prototype.duplicate = function(){
    console.log('duplicate');
}

const s = new Shape();
const c = new Circle(10);  

            ObjectBase
  circleBase
c 
          ObjectBase
  ShapeBase
s

Circle.prototype = Object.create(Shape.prototype);
// favor composition over inheritance.
// in javascript we use mixins to achieve composition

// mixins
const canEat = {
   eat : function(){
       this.hunger--;
       console.log('eating');
   }
};
const canWalk = {
    walk : function(){
        console.log('walking');
    }
};

const person = Object.assign({},canEat,canWalk);
console.log(person);

function mixin(target , ...sources){
  Object.assign(target,...sources);
}
// so instead of Object.assign we can use mixing function

// ES6
class Circle {
    constructor(radius){
        this.radius = radius;
        // own method
        this.move = function(){

        }
    }
    // prototype method
    draw(){
      console.log('draw');
    }
}
const c = new Circle(1);
console.log(c);

// typeof Circle -> 'function'

// Hoisting
// function declaration 
function sayHello(){

}
//function Expression
const goodbye = function(){

};
// function declarations are hoisted i.e they are raised to the top of the code.
// function expressions are not hoisted.

 const c = new Circle();
// this will produce error because 
// class declarations and expressions are not hoisted.
 class Circle{
// pretty much the standard
 }
 const square = class{
// do not use this syntax
 };

 //Static methods
  class Circle{
      constructor(radius){
          this.radius = radius;
      }
      draw(){

      }
      static parse(str){
       // these are available with class reference 
       console.log('parsing');  
    }
}

const circle = new Circle(33);
  Circle.parse('PARSE');
  console.log(circle);

  // this keyword
  const Circle = function(){
      this.draw = function(){
          console.log(this);
        }
    };  
    const c  = new Circle();
    console.log(c.draw()); // point to circle object
    const draw = c.draw;
    console.log(draw()); // will point to global/window object
    by default the body of class execute in strict mode.
    

// Weakmaps for private properties
const _radius = new WeakMap(); // takes a key value for initialization
const _move = new WeakMap();

class Circle{
    constructor(radius){
       _radius.set(this,radius) 
       _move.set(this,() => {
// in arrow fn this inherits from parent              
        console.log('move',this);
       });
    }
    draw(){
        //console.log(_radius.get(this));
        _move.get(this)();
        console.log('draw');  
    }

}
const c = new Circle(2);
console.log(c); // we do not have access to radius property
c.draw();
 
// getters and setters 
const _radius = new WeakMap();
class Circle {
    constructor(radius){
     _radius.set(this,radius);
    }
  // one way to read.  
   getRadius(){
       return _radius.get(this);
   } 
 // other ways  
   get radius(){
       return _radius.get(this);
   }
   set radius(value){
       if(value <= 0) throw new Error('Invalid radius');
       _radius.set(this,value); 
   } 
} 

const c = new Circle(33);
console.log(c.getRadius());
c.radius = 10;
console.log(c.radius);
  
// inheritance 
class shape {
    
    constructor(color){
        this.color = color; 
    }
    
    move(){
        console.log('move');
    }
}
class circle extends shape{
   
    constructor(color){
        super(color); // initialize the base obj first
    } 

    draw(){
        console.log('draw');
    }
}
const c = new circle('red');
console.log(c); // will have both move and draw

// Modules
// module formats -> AMD (browser applications)
                  -> CommonJS (Node.js)
                  -> UMD (both)
                  -> ES6 modules
// we will mainly focus on commonJs and ES6 modules                  

*/
// commonJS modules
// rule - things that are highly related should go together
// aka cohesion.
// we use module.export() and require('./circle');

// ES6 modules 
// we use the export keyword before the class declaration
// and import {Circle} from './circle.js';
// also change type of script to module.


// tooling 
/*
 transpiler = translator + compiler
 babel is a very popular transpiler for modern js
 A module bundler is responsible for combining 
 all our js files into a single file which we call a 
 bundle. there are many module bundlers out there but 
 the most popular one is (webpack).
 So if we give our js files to webpack it will combine them
 into a single file and minify our code by getting rid of 
 white spaces and comments and it will shorten our code.
  
*/

 















