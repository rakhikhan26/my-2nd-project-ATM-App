import inquirer from "inquirer";
let mybalance = 15000;
let mypin = 1234;
async function main() {
    let pinAnswer = await inquirer.prompt([
        {
            name: "pin",
            message: "Enter your PIN:",
            type: "number"
        }
    ]);
    if (pinAnswer.pin === mypin) {
        console.log("Correct pin code!!!");
        let operationAns = await inquirer.prompt([
            {
                name: "operation",
                message: "Please select an option:",
                type: "list",
                choices: ["Withdraw", "Check balance"]
            }
        ]);
        if (operationAns.operation === "Withdraw") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    message: "Enter the amount to withdraw:",
                    type: "number"
                }
            ]);
            mybalance -= amountAns.amount;
            console.log("Your remaining balance is: " + mybalance);
        }
        else if (operationAns.operation === "Check balance") {
            console.log("Your balance is: " + mybalance);
        }
    }
    else {
        console.log("Incorrect PIN. Please try again.");
    }
}
main();
