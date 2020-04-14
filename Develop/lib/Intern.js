const Employee = require("./Employee")

// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Inturn extends Employee{
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school;
   }
    // question: enter school name

    getSchool(){
        return this.school
    }

    getRole(){
        // overridden to return Inturn
        return "Intern"
    }
}
module.exports = Inturn;