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

const emp = [     // Base employee questions
    {

        type: "input",
        name: "role",
        message: "Choose your Role: ",
        // choices: [
        //     "Manager",
        //     "Engineer",
        //     "Intern",
        // ]
    },
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

]

const man = [   //manager question
    {

        type: "input",
        name: "office",
        message: "Enter your office number: ",
    },
    {

        type: "confirm",
        name: "add",
        message: "Add another Team Member? ",
    },
]

const eng = [   // engineer question
    {

        type: "input",
        name: "github",
        message: "Enter your Github username: ",
    },
    {

        type: "confirm",
        name: "add",
        message: "Add another Team Member? ",
    },
]

const int = [  //intern question
    {

        type: "input",
        name: "school",
        message: "Enter your school name: ",
    },
    {

        type: "confirm",
        name: "add",
        message: "Add another Team Member? ",
    },
];

// team array
const team = [];


const ask = () => {
    inquirer
        //ask base employee questions plus the Role
        .prompt(emp)

        .then(response => {
            console.log(response)
            const employee = new Employee(response.name, response.id, response.email);

            // if the Role equals manager then ask the Manager question
            if (response.role == "manager") {
                inquirer
                    .prompt(man)
                    .then(answers => {
                        //take in (emp) response and add (man) answer
                        const manager = new Manager(response.name, response.id, response.email, answers.office);
                        //push into team array
                        team.push(manager);

                        console.log(manager);
                        console.log("manager pushed!!")

                        // ask to add another employee, if true loop inquirer (emp)
                        if (answers.add == true) {
                            ask();
                        }
                        // if false write team array to storage file
                        else if(answers.add == false){
                            render(team);
                            fs.writeFile(outputPath, JSON.stringify(team), function (err) {
                                if (err) throw err;
                                console.log("team created!!");
                            });
                            
                        }
                    });

            }

            // if the Role equals engineer then ask the engineer question
            else if (response.role == "engineer") {
                inquirer
                    .prompt(eng)

                    .then(answers => {
                        //take in (emp) response and add (eng) answer
                        const engineer = new Engineer(response.name, response.id, response.email, answers.github);
                        //push into team array
                        team.push(engineer);

                        console.log(engineer);
                        console.log("engineer pushed!!")

                        // ask to add another employee, if true loop inquirer (emp)
                        if (answers.add == true) {
                            ask();
                        }
                        // if false write team array to storage file
                        else if(answers.add == false){
                            fs.writeFile("storage.json", JSON.stringify(team), function (err) {
                                if (err) throw err;
                                console.log("team created!!");
                            });
                            render(team);
                        }
                    });

            }

            // if the Role equals intern then ask the intern question
            else if (response.role == "intern") {
                inquirer
                    .prompt(int)

                    .then(answers => {
                        //take in (emp) response and add (int) answer
                        const intern = new Intern(response.name, response.id, response.email, answers.school);
                        //push into team array
                        team.push(intern);

                        console.log(intern);
                        console.log("intern pushed!")

                        // ask to add another employee, if true loop inquirer (emp)
                        if (answers.add == true) {
                            ask();
                        }
                        // if false write team array to storage file
                        else if(answers.add == false){
                            fs.writeFile("storage.json", JSON.stringify(team), function (err) {
                                if (err) throw err;
                                console.log("team created!!");
                            });
                            render(team);
                        }
                    });

            }
            else {
                console.log("didn't work")
            };
        })
        .catch(error => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else when wrong
            };
        });
}
// start the inquirer function
ask();