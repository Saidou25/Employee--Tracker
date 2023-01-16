const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();
const mysql = require('mysql2');
require('console.table');

const db = mysql.createConnection({
    user: "root",
    database: "employee_db",
});

// db.query('SELECT * FROM departments', (err, departments) => {
//     console.table(departments);
// });

// WHEN I start the application
// THEN I am presented with the following options:

// view all departments
// view all roles
// view all employees
const viewTables = () => {
    prompt(
        {
            type: 'rawlist',
            message: 'Wich list would you like to see ?',
            name: 'question',
            choices: ['departments', 'roles', 'employees'],
        },
    )
        .then((answer) => {
            showTables(answer);

        })
        .catch(err => console.log(err));
};

const showTables = (answer) => {
    const showTable = 'SELECT * FROM ' + answer.question;
    db.query(showTable, (err, showTable) => {
        console.table(showTable);
    });
}

viewTables();
// WHEN I start the application
// THEN I am presented with the following options:

// add a department
//  add a role
//   add an employee

// const addSomething = () => {

//     prompt(
//         {
//             type: 'rawlist',
//             message: 'Would you like to add?',
//             name: 'question',
//             choices: ['departments', 'roles', 'employees'],
//         },
//     )
//         .then((answer) => {
//             showTables(answer);
//             return (answer);
//         })
//         .catch(err => console.log(err));

// };




