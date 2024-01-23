// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// Importing the Employee class, from the location file "../lib/Employee" path
const Employee = require("../lib/Employee");
// Create the Engineer class that extend the Employee class
class Engineer extends Employee {
  // Constructor for the Engineer, taking name, id, email and github as parameters
  constructor(name, id, email, github) {
    // Call the constructor of the parent class (Employee) using super()
    super(name, id, email);
    // Set the github property specific to the Engineer class
    this.github = github;
  }
  // Method to get the github of the Engineer
  getGithub() {
    return this.github;
  }
  // Method to get the role of the Engineer, which overrides the getRole() method in Employee
  getRole() {
    return "Engineer";
  }
}
// Export the Engineer class to make it avaiable for use in the other file
module.exports = Engineer;
