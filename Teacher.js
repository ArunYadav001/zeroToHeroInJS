import {Person} from './Person';

export class Teacher extends Person{
    constructor(name,degree){
        super(name);
        this.degree = degree;
    }

      teach(){
          console.log("teach");
      }
  }

  const t = new Teacher("Mosh", "Msc");
  console.log(t.degree);
  console.log(t.walk());