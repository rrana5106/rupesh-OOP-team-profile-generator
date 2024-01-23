// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// Immporting the Employee class, from the location file "../lib/Employee" path
const Employee = require("../lib/Employee");

// Create the Intern class that extend the Employee class
class Intern extends Employee {
  // Constructor for the Intern Class, taking name, id, email and school as parameters
  constructor(name, id, email, school) {
    // Call the constructor of the parent class (Employee) using super()
    super(name, id, email);
    // Set the school property specific to the Intern class
    this.school = school;
  }
  
  // Method to get the school of the Intern
  getSchool() {
    return this.school;
  }

  // Method to get the role of the intern, (which overrides the getRole() method in the Employee class)
  getRole() {
    return "Intern";
  }
}

// Export the Intern class to make it avaiable for use in the other files
module.exports = Intern;
