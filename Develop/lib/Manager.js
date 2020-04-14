const Employee = require("./Employee")

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }
    // question: enter Office number
    getOfficeNumber() {
        return this.officeNumber;
    };
   

    getRole() {
        // overridden to return Manager
        return "Manager";
    };
}

module.exports = Manager;