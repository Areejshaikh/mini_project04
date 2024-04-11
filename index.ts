
// Q4 Create a program to check a student's grade and percentage.

import inquirer from "inquirer";

let user_Per : any  = await inquirer.prompt({ // user input
    message :"Enter your percentage", 
    name : "user_output", 
    type: "input"});

    if (user_Per.user_output < 50) { // conditions if user output less than 50, grade F
        console.log("Your grade is 'F' !");
    }
    else if (user_Per.user_output > 50 && user_Per.user_output < 60){
        
        console.log("Your grade is 'D' !");
    }
    else if (user_Per.user_output > 60 && user_Per.user_output < 70){
        console.log("Your grade is 'C' !");
    }
    else if (user_Per.user_output > 70 && user_Per.user_output < 80){
        console.log("Your grade is 'B' !");
    }
    else if (user_Per.user_output > 80 && user_Per.user_output < 90){
        console.log("Your grade is 'A' !");
    }
    else if (user_Per.user_output > 90 && user_Per.user_output < 100){
        console.log("Your grade is 'A+' !");
    }
    else {
        console.log("Invalid Percentage");
    }
