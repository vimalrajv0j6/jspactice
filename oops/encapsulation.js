// class Student {
//   constructor() {
//     this.name;
//     this.marks;
//   }

//   getName() {
//     return this.name;
//   }

//   setName(name) {
//     this.name = name;
//   }

//   getMarks() {
//     return this.marks;
//   }

//   setMarks(marks) {
//     this.marks = marks;
//   }
// }

// let student = new Student();

// student.setName('Vimal');
// student.setMarks(100);

// console.log(student.getName()); 
// console.log(student.getMarks());


class Students {
  #name; 
  #marks;

  setName(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  setMarks(marks) {
    if (marks < 0 || marks > 100) {
      console.log("Invalid marks!");
    } else {
      this.#marks = marks;
    }
  }

  getMarks() {
    return this.#marks;
  }
}
let stu = new Students();
stu.setName('raj');
stu.setMarks(99);

console.log(stu.getName()); 
console.log(stu.getMarks());
