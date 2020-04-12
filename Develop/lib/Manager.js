const Employee = require("./Employee")

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee{
    constructor(officeNumber){
        super()
        this.officeNumber = officeNumber;
   }
    // question: enter Office number


    getRole(){
        // overridden to return Manager
    }
}

module.exports = Manager;