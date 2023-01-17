const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();
const mysql = require('mysql2');
require('console.table');

const db = mysql.createConnection({
    user: "root",
    database: "employee_db",

});

const init = () => {
    prompt(
        {
            type: 'list',
            message: 'What would you like to do ?',
            name: 'init',
            choices: ['View all Departments', 'View all Roles', 'View all Employees',
             'Add a Department',' Add a Role', 'Add an Employee', 'Update an Employee Role'],
        },
    )
        .then((answer) => {
            if  (answer.init.includes('Departments')) { 
                let result = 'Departments';
                showTables(result);
            }
               else if  (answer.init.includes('Roles')) { 
                let result = 'Roles';
                showTables(result);
            }
              else if  (answer.init.includes('Employees')) { 
                let result = 'Employees';
                showTables(result);
            };

        })
        .then((answer) => {
            if  (answer.init.includes('Add a Department')) { 
                let result = 'Departments';
                showTables('great');
            }
        })
        .catch(err => console.log(err));
};

init();

const showTables = (result) => {
    const showTable = 'SELECT * FROM ' + 'view' + result;
    db.query(showTable, (err, showTable) => {
        console.table(showTable);      
    });
}

//         .then((answer) => {
//             const toAdd = 'view' + answer.question;
//             db.query('INSERT INTO ?? SET ?', [viewDepartments, name],(err) => {
//                 if (err) return console.error(err);
//              console.table('sucess');     
//             })
//             .catch (err => console.log(err));
//         })
//     }



// db.query('SELECT * FROM departments', (err, departments) => {
//     console.table(departments);
// });
// .then((answer) => {
//     const toAdd = 'view' + answer.question;
//     db.query('INSERT INTO ?? SET ?', [viewDepartments, name](err) => {
//      console.table(showTable);

     

// view all departments
// view all roles
// view all employees
// add a department
//  add a role
//   add an employee
// update an employee role

// prompt([
//     {
//         type: 'rawlist',
//         message: 'Would you like to add a new',
//         name: 'all departments',
//         choices: ['Department ?', 'Role ?', 'Employee ?'],
//     },
//     {
//         type: 'rawlist',
//         message: 'Enter the name of?',
//         name: 'all roles',
//         choices: ['New department', 'New role', 'New employee'],
//     },
//     {
//         type: 'rawlist',
//         message: 'Would you like to add a new',
//         name: 'all departments',
//         choices: ['Department ?', 'Role ?', 'Employee ?'],
//     },
//     {
//         type: 'rawlist',
//         message: 'Enter the name of?',
//         name: 'all roles',
//         choices: ['New department', 'New role', 'New employee'],
//     },
//     {
//         type: 'rawlist',
//         message: 'Would you like to add a new',
//         name: 'all departments',
//         choices: ['Department ?', 'Role ?', 'Employee ?'],
//     },
//     {
//         type: 'rawlist',
//         message: 'Enter the name of?',
//         name: 'all roles',
//         choices: ['New department', 'New role', 'New employee'],
//     },
//     {
//         type: 'rawlist',
//         message: 'Would you like to add a new',
//         name: 'all departments',
//         choices: ['Department ?', 'Role ?', 'Employee ?'],
//     },
//     {
//         type: 'rawlist',
//         message: 'Enter the name of?',
//         name: 'all roles',
//         choices: ['New department', 'New role', 'New employee'],
//     },
// ])