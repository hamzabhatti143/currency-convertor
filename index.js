#! /usr/bin/env node
import inquirer from "inquirer";
let currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    IND: 74.57,
    PKR: 279
};
let convertor = await inquirer.prompt([
    {
        name: "from",
        message: "Select Your Currency: ",
        type: "list",
        choices: ["USD", "EUR", "GBP", "IND", "PKR"]
    },
    {
        name: "to",
        message: "Selct Currency which you want to convert: ",
        type: "list",
        choices: ["USD", "EUR", "GBP", "IND", "PKR"]
    },
    {
        name: "amount",
        message: "Enter Your Amount: ",
        type: "input"
    }
]);
let fromCurrency = currency[convertor.from];
let toCurrency = currency[convertor.to];
let amount = convertor.amount;
let baseAmount = amount / fromCurrency;
let convertedAmount = baseAmount * toCurrency;
console.log(`Your converted amount is : ` + Math.floor(convertedAmount));
