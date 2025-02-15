// Module package CORE

// setTimeout(function () {
//     console.log('Ishga tushdi!');
// }, 1000);


// let number = 0;
// setInterval(function () {
//     console.log("hisob", number);
//     number++
// }, 1000);


// let number = 0;
// let time = 20;
// setInterval(function () {
//     if (time - number == 10){
//         console.log("Sizda 10 secon vaqt qoldi!")
//     }else if(time - number == 0){
//         console.log("Sizning vaqtingiz tugadi!")
//     }
//     number++
// }, 1000);

// const fs = require('fs');
// const data = fs.readFileSync('./input.txt', 'utf-8');
// console.log(data);

// console.log('=====================');

// fs.writeFileSync('./input.txt', `${data} \n\t\t\t by Khan`);
// const new_data = fs.readFileSync('./input.txt', 'utf-8');
// console.log(new_data);





// Module package EXTERNAL


// const moment = require('moment');

// setInterval(() => {
//     const time = moment().format('h-mm-ss a');
//     console.log(`hozirgi vaqt ${time}`);
// }, 5000);



// const inquirer = require('inquirer');

// inquirer
//     .prompt([{type: 'input', name: 'raqam', message: 'raqamni kiriting?'}])
//     .then(answer => {
//         console.log('man kiritgan raqam qiymati: ', answer.raqam);
//     })
//     .catch((err) => console.log(err));


const validator = require('validator');

// const result = validator.isEmail('akramjonovAmurxon02@gmail.com');
// console.log(result);

// const checking = validator.equals('Amirkhon','Amirkhon');
// console.log('checking: ', checking);

// const check = validator.isInt("100");
// console.log("check: ", check);


// const { v4: uuidv4 } = require('uuid');
// const random = uuidv4();
// console.log("random uuid: ", random);

// const chalk = require("chalk");
// const log = console.log

// log(chalk.gray(`uuid creates ${random}`));

console.log(module)




// Module package FILE

const calculate = require('./hisob.js');

const natija = calculate.kopaytirish(20, 4);
console.log("Natija:", natija);
console.log('********************')

const natija2 = calculate.bolish(20, 4);
console.log("Natija2:", natija2);
console.log('********************')

const natija3 = calculate.ayirish(20, 4);
console.log("Natija3:", natija3);
console.log('********************')

const Account = require('./account.js');

Account.tellMeAboutClass();
Account.tellMeTime();

console.log('<========================>')

const myAccount = new Account('Khan', 200000, 20210020928);
myAccount.giveMeDetails();

myAccount.makeDeposit(1000000);

// ferrari 400000 usd
myAccount.withdrawMoney(400000);
myAccount.makeDeposit(200000);

console.log(require('module').builtinModules);

