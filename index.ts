#! /usr/bin/env node 
import inquirer from "inquirer";

let mybalance = 10000; // dollar
let myPin = 12345 ;
//user input
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "ENTER YOUR PIN",
        type: "number",
    }
]);

//IF CORRECT PIN then corect pin
if (pinAnswer.pin === myPin){
   console.log("CORRECT PIN CODE!!!");

   //IF WE GET CORRECT PIN CODE THEN MOVE FURTHER fo further questions
   let operationAns = await inquirer.prompt([

    {
       name : "operation",
       message : "PLEASE SELECT OPTION",
       type : "list",
       choices : [ "withdraw" , "check balance"]
    }


   ]);
 
    //IF USER WTHDRAW 
    //agr choose with draw kiya user ne tw
   if(operationAns.operation === "withdraw")
   {
       let amountAns = await inquirer.prompt([
        {
            name : "amount",
            message : "ENTER YOUR AMOUNT",
            type : "number",

        }
       ]);

       //agr  withdrraw kr liye toh remaining balance ktna reh jaega means jo hamara balance hai jo nikala ha usme se jo total balance tha wo minus kr dengen , jo withdraw kregaamount usme se total amount minus hoga 
       mybalance -= amountAns.amount;
       // console.log("YOUR REMAINING BALANCE AFTER WITHDRAW IS " +mybalance); or
      console.log(`Your REMAINING BALANCE AFTER WITHDRAW IS ${mybalance}`);
    
   }
      //IF USER CHECK BALANCE
      else if (operationAns.operation === "check balance"){
        console.log(`YOUR CURRENT BALANCE IS ${mybalance}`);
        
       }

}
else    {
    console.log("YOU ENTERED INCORRECT PIN CODE");
    
}