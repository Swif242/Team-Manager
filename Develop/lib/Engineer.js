const Employee = require("./Employee")

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github;
    }
   
    // question: enter github username

    getGithub(){
        return this.github
    }

    getRole(){
        // overridden to return engineer
        return "Engineer"
    }
}
module.exports = Engineer;