const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const render = require("./lib/htmlRenderer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```

inquirer.prompt([
    {

        type: "input",
        name: "name",
        message: "Enter your Name: ",
    },
    {
      
        type: "input",
        name: "id",
        message: "Enter your ID: ",
    },
    {
   
        type: "input",
        name: "email",
        message: "Enter your Email: ",
    },
    {
      
        type: "input",
        name: "office",
        message: "Enter your office number: ",
    },
    {
      
        type: "input",
        name: "github",
        message: "Enter your Github username: ",
    },
    {
      
        type: "input",
        name: "school",
        message: "Enter your school name: ",
    },
    

])
    .then(answers => {
        // disable when no longer needed
        // console.log(`Answers entered: ${JSON.stringify(answers)}`); 
        const employee = new Employee(answers.name, answers.id, answers.email);
        const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        const intern = new Intern(answers.name, answers.id, answers.email,answers.school)
        console.log(employee);
        console.log("-----------------");
        console.log(manager);
        console.log("-----------------");
        console.log(engineer);
        console.log("-----------------");
        console.log(intern);

        fs.writeFile("storage.json", employee, function (err) {
            if (err) throw err;
            // console.log(answers[0]);
            console.log("it worked");
           
    
        });
        // console.log(answers.name)

       
    })
    .catch(error => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else when wrong
        }
    });