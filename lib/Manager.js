// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

// Importing the Employee class, from the location file "../lib/Employee" path
const Employee = require("../lib/Employee");

// Create the Manager class that extend the Employee class
class Manager extends Employee {
  // Constructor for the Manager class, taking name, id, email and officeNumber as parameters
  constructor(name, id, email, officeNumber) {
    // Call the constructor of the parent class (Employee) using super()
    super(name, id, email);
    // Set the officeNumber property sepecific to the Manager class
    this.officeNumber = officeNumber;
  }
  // Method to get the officeNumber of the Manager
  getOfficeNumber(){
    return this.officeNumber;
  }
  // Method to get the Role of the Manager which overrides the getRole() method in the Employee
  getRole() {
    return "Manager";
  }
}
// Export the Manager class to make it avaiable for use in the other files
module.exports = Manager;
