// TODO: Write code to define and export the Employee class

// Create the Employee class
class Employee {
  // Constructor for the Employee Class, taking name, id and email as parameter
  constructor(name, id, email) {
    // Initialize the instance(blueprint) variable with the provided values
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // Method to get the name of the employee
  getName() {
    return this.name;
  }

  // Method to get the id of the employee
  getId() {
return this.id;
  }

  // Method to get the email of the employee
  getEmail() {
return this.email;
  }

  // Method to get the role of the employee
  getRole() {
return "Employee";
  }
}

// Export the Employee class to make it avaiable for use in the other files
module.exports = Employee;
