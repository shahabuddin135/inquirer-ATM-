#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

//creating variables for account info

let myName: string = "Shahabuddin";
let myPin: number = 786786;
let Balance: number = 100000;
let currentBalance: number = Balance;

//async function

let inquirerATM = async function () {
  //variable for failed attempts
 
  //running a while loop until pin isnt correct

  //prompt for pin. pin is hidden

  let atm = await inquirer.prompt([
    {
      type: "password",
      name: "pin",
      message: "Enter your Pin",
      mask: "*",
    },
  ]);

  //checking if pin is correct

  if (atm.pin == myPin) {
    //proceeding with correct pin

    console.log(chalk.bgGreen(`  Welcome ${myName}`));
  

  //asking user what he wants

  atm = await inquirer.prompt([
    {
      type: "list",
      name: "method",
      choices: ["Withdraw", "Fast Cash", "Check Balance"],
      message: chalk.bgYellow("What would you like to do?"),
    },
  ]);

  //choice is withdraw (custom amount)

  if (atm.method === "Withdraw") {
    let withdraw = await inquirer.prompt([
      {
        type: "number",
        name: "amount",
        message: "Please Write your Desired Amount",
      },
    ]);

    //check if the amount is neither greater nor less than Balance

    if (withdraw.amount > Balance) {
      console.log(chalk.red(`Insufficient Balance`));
    }

    currentBalance = Balance - withdraw.amount;

    //asking user for receipt (yes/no)

    let reciept = await inquirer.prompt([
      {
        type: "confirm",
        name: "receipt",
        message: "Do you want a receipt?",
      },
    ]);

    // if you want a receipt
    if (reciept.receipt) {
      // logging receipt to console
      console.log(
        chalk.bgGray(
          `THANK YOU FOR USING MY ATM!
     Name: Shahabuddin        
     Account no: 687876******   
     Amount Withdrawn: ${withdraw.amount}   
     Remaining Balance: ${currentBalance} `
        )
      );

      //if user dont want receipt
    } else {
      console.log(chalk.blue.bold(`You WithDrew ${withdraw.amount}`));
      console.log(chalk.green.bold("Thanks For Using Our Services"));
    }

    //if user has selected fast cash
  } else if (atm.method === "Fast Cash") {
    // asking user to select amount

    let fastCash = await inquirer.prompt([
      {
        type: "list",
        name: "amount",
        choices: ["1000", "2000", "3000", "5000", "7000", "10000"],
        message: "Select your Desired Amount",
      },
    ]);

    currentBalance = Balance - fastCash.amount;

    // if you want a receipt

    let reciept = await inquirer.prompt([
      {
        type: "confirm",
        name: "receipt",
        message: "Do you want a receipt?",
      },
    ]);

    //if yes then logging receipt to console

    if (reciept.receipt) {
      // loggin receipt

      console.log(
        chalk.bgGray(
          `THANK YOU FOR USING MY ATM!
     Name: Shahabuddin        
     Account no: 687876******   
     Amount Withdrawn: ${fastCash.amount}   
     Remaining Balance: ${currentBalance} `
        )
      );

      //if dont need receipt
    } else {
      //your withdrawn amount

      console.log(chalk.blue.bold(`You WithDrew ${fastCash.amount}`));
      console.log(chalk.green.bold("Thanks For Using Our Services"));
    }

    // if user choose to check balance only
  } else if (atm.method === "Check Balance") {
    console.log(chalk.blue(currentBalance));
  }
}else {
  console.log(chalk.bgRed("Wrong Pin, Try Again!"));
  
}
};

inquirerATM();

//Project by SHAHABUDDIN
//GIAIC
//!! No cheating !!
