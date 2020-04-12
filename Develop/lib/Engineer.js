const Employee = require("./Employee")

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee{
    constructor(userName){
         super()
        this.userName = userName;
    }
   
    // question: enter github username

    getGithub(){

    }

    getRole(){
        // overridden to return engineer
    }
}
module.exports = Engineer;