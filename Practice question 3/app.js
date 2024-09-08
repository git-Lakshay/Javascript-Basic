// You are creating a website for your college. Create a class User with 2 properties, name & email. It also has a method called viewData() that allows user to view website data.
// let DATA = "secret information";
// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }

//   viewData() {
//     console.log("data =", DATA);
//   }
// }

// let student1 = new User("Lakshay", "abc@gmail.com");
// let student2 = new User("aman", "aman@email.com");
// let teacher1 = new User("Dean", "dean@colege.com");

// Create a new class called Admin which inherits from User. Add a new method called editData to admin that allows it to edit website data.
let DATA = "secret information";
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  viewData() {
    console.log("data = ", DATA);
  }
}
class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }
  editData() {
    DATA = "some new value";
  }
}

let admin1 = new Admin("Lakshay", "abc@gmail.com");
