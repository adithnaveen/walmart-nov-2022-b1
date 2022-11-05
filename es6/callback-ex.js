// synchronous 
function divide(num1, num2) {

    if (typeof num1 != 'number') {
        throw ("Pls pass first arg as number");
    }
    if (typeof num2 != 'number') {
        throw ("please pass second arg as number");
    }
    if (num1 === 0) {
        throw ("Dont Divide by zero")
    }

    return num1 / num2;
}

console.log("Start");
let n1 = 100;
let n2 = 0;

let result = divide(n1, n2);
console.log("Result is " + result);
console.log("End");

// your story will continue here also 