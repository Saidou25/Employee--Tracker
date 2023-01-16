const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();
const mysql = require('mysql2');
require('console.table');

const db = mysql.createConnection({
     user: "root",
     database: "employee_db",
});

db.query('SELECT * FROM departments', (err, departments) => {
    console.table(departments);
});

db.query('SELECT * FROM roles', (err, roles) => {
    console.table(roles);
});

db.query('SELECT * FROM employees', (err, employees) => {
    console.table(employees);
});

