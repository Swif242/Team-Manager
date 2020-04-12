var inquirer = require('inquirer')

inquirer.prompt([
    {
        /* Pass your questions in here */
        type: "input",
        name: "name",
        message: "Enter your Name: ",
    },
    {
        /* Pass your questions in here */
        type: "input",
        name: "id",
        message: "Enter your ID: ",
    },
    {
        /* Pass your questions in here */
        type: "input",
        name: "email",
        message: "Enter your Email: ",
    }
])
    .then(answers => {
        // Use user feedback for... whatever!!
        let data = JSON.stringify(answers)
        console.log(data);


        // TODO: Write code to define and export the Employee class
        class Employee {
            constructor(name, id, email) {
                this.name = name;
                this.id = id;
                this.email = email;
            }
        
        
        
            getName() {
                this.name = data.name
                console.log(this.name)
                // return name;
            }
        
            getId() {
               this.id = data.id
                console.log(this.id)
                // return idNum;
            }
        
        
            getEmail() {
                this.email = data.email
                console.log(this.email)
                // return email;
            }
        
        
        //     getRole() {
            
        //  return Employee
        //     }
           
        };

        const employee = new Employee(`${data.name},${data.id},${data.email}`)
        console.log(employee);
        employee.getName();
        employee.getId();
        employee.getEmail();



    })
    .catch(error => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else when wrong
        }
    });



// TODO: Write code to define and export the Employee class
// class Employee {
//     constructor(name, id, email) {
//         this.name = name;
//         this.id = id;
//         this.email = email;
//     }



//     getName() {
//         const name = new Employee(data.name)
//         console.log(name)
//         return name;
//     }

//     getId() {
//         const idNum = new Employee(data.id)
//         console.log(idNum)
//         return idNum;
//     }


//     getEmail() {
//         const email = new Employee(data.email)
//         console.log(email)
//         return email;
//     }


//     getRole() {
    
//     return Employee
//     }

// };


// const employee = new Employee(`${this.name},${this.id},${this.email}`)
// employee.getName();
// employee.getId();
// employee.getEmail();
