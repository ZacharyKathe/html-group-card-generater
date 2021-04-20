const inquirer = require("inquirer");
//const Employee = require("./Employee");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const fs = require('fs');
const allPeople = [];
var tableBody = document.getElementById('results');

function askQuestion(){
    inquirer.prompt([
    
      {
        type: "list",
        message: "Who would you like to add next?",
        choices: ["Engineer", "Intern","Manager", "Finish now"],
        name: "question"
      }
    ]).then(answers =>{
        switch (answers.question) {
           case "Engineer":
              console.log("added Engineer")
              addEngineer();
              break;
           case "Intern":
              addIntern();
              break
           case "Manager":
              addManager();
              break
           case "Finish now":
               printWorkGroup();
           default:
              console.log("thanks for using:)")
              break;
        }

    })
}

function addEngineer(){
    inquirer.prompt([
        {
            type: "input",
            message: "Enter Engineer's name: ",
            name: "engineerName"
        },
        {
            type: "input",
            message: "Enter engineer id: ",
            name: "engineerId"
        },
        {
            type: "input",
            message: "Enter Engineer's email: ",
            name: "engineerEmail"
        },
        {
            type: "input",
            message: "Enter Engineer's github: ",
            name: "engineerGithub"
        }
    ]).then(({engineerName, engineerId, engineerEmail, engineerGithub}) => {
        const engin = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);
        allPeople.push(engin)
        //console.log(engineerName, engineerId, engineerEmail, engineerGithub);
        console.log(allPeople);
        console.log(allPeople[0]);
        askQuestion();
    })
}


function addIntern(){
    inquirer.prompt([
        {
            type: "input",
            message: "Enter Intern name: ",
            name: "internName"
        },
        {
            type: "input",
            message: "Enter Intern id: ",
            name: "internId"
        },
        {
            type: "input",
            message: "Enter Intern email: ",
            name: "internEmail"
        },
        {
            type: "input",
            message: "Enter Intern school: ",
            name: "internSchool"
        }
    ]).then(({internName, internId, internEmail, internSchool}) => {
        //console.log(internName, internId, internEmail, internSchool);
        const interns = new Intern(internName, internId, internEmail, internSchool);
        allPeople.push(interns)
        console.log(allPeople);
        askQuestion();
    })
}

function addManager(){
    inquirer.prompt([
        {
            type: "input",
            message: "Enter managers name: ",
            name: "managerName"
        },
        {
            type: "input",
            message: "Enter manager id: ",
            name: "managerId"
        },
        {
            type: "input",
            message: "Enter managers email: ",
            name: "managerEmail"
        },
        {
            type: "input",
            message: "Enter managers office number: ",
            name: "managerOfficeNum"
        },
    ]).then(({managerName, managerId, managerEmail, managerOfficeNum}) => {
        //console.log(managerName, managerId, managerEmail, ManagerOfficeNum);
        const mana = new Manager(managerName, managerId, managerEmail, managerOfficeNum);
        allPeople.push(mana)
        console.log(allPeople);
        askQuestion();
    })
}

function printWorkGroup(){
  const {name, id, email} = allPeople;

  const htmlOutPut = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Our Work Group</title>
  </head>
  <body>
      <header>Our Project Team</header>
  
      <table class=" justify-center align-items-center" id="results">
          <th>
              <p class="my-4"></p>
          </th>
          <tbody id="dataTable" class="justify-center mx-auto text-center"></tbody>
      </table>
      <script type="text/javascript" src="./index.js"></script>
  </body>
  </html>`

 fs.writeFile("workGroup.html", htmlOutPut, (err)=>{
    if (err){
        throw err;
    }
    console.log("ReadMe all finished!!");
 })
  
 
    for(var i = 0; i < allPeople.length; i++){
        var createTableRow = document.createElement('tr');
        var tableData = document.createElement('td');
        var workName = document.createElement('p');
        var workId = document.createElement('p');
        var workEmail = document.createElement('p');

        //setting text
        workName.textContent = "Name: " + allPeople[i].name;
        workId.textContent = "ID: " + allPeople[i].id;
        workEmail.textContent = "Email" + allPeople[i].email;

        //appending table
        tableData.appendChild(workName);
        tableData.appendChild(workId);
        tableData.appendChild(workEmail);
        createTableRow.appendChild(tableData);
        tableBody.appendChild(createTableRow);
    }
 
}
askQuestion();