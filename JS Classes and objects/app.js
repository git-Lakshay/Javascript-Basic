// const student = {
//   fullName: "Lakshay Sharma",
//   marks: 94.4,
//   printMarks: function () {
//     console.log("marks = ", this.marks);
//   },
// };

// const employee = {
//   calcTax() {
//     console.log("tax rate is 10%");
//   },
// };

// const karanArjun = {
//   salary: 50000,
//   calcTax() {
//     console.log("tax rate is 20%");
//   },
// };
// const karanArjun2 = {
//   salary: 50000,
// };
// const karanArjun3 = {
//   salary: 50000,
// };
// const karanArjun4 = {
//   salary: 50000,
// };

// karanArjun.__proto__ = employee;
// karanArjun2.__proto__ = employee;
// karanArjun3.__proto__ = employee;
// karanArjun4.__proto__ = employee;

// class toyotaCar {
//   constructor(brand, mileage) {
//     console.log("creating new object");
//     this.brand = brand;
//     this.mileage = mileage;
//   }

//   start() {
//     console.log("start");
//   }

//   stop() {
//     console.log("stop");
//   }

// setBrand(brand) {
//   this.brand = brand;
// }
// }

// let fortuner = new toyotaCar("fortuner", 10); // constructor
// console.log(fortuner);
// fortuner.setBrand("fortuner");
// let lexus = new toyotaCar("lexus", 12); // constructor
// console.log(lexus);
// lexus.setBrand("lexus");

// class Parent {
//   hello() {
//     console.log("hello");
//   }
// }
// class Child extends Parent {}
// let obj = new Child();

// class Person {
//   constructor(name) {
// console.log("enter parent constructor");
//   this.species = "homo sapiens";
//   this.name = name;
// }
// eat() {
//   console.log("eat");
// }
// sleep() {
//   console.log("sleep");
// }
// work() {
//   console.log("do nothing");
// }
// }

// class Engineer extends Person {
//   constructor(name) {
// console.log("enter child constructor");
// super(name); // to invoke parent class constructor
// this.branch = branch;
// console.log("exit child constructor");
//   }
//   work() {
//     super.eat();
//     console.log("solve problems, build something");
//   }
// }
// class Doctor extends Person {
//   work() {
//     console.log("treat patients");
//   }
// }
// let lakshayObj1 = new Person();
// let lakshayObj2 = new Engineer();
// let lakshayObj3 = new Doctor();
// let engObj = new Engineer("Lakshay");
