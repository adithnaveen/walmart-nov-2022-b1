// asynchronous 
function divide(num1, num2) {


    return new Promise((resolve, reject) => {

        if (typeof num1 !== 'number') {
            reject("Pls pass first arg as number");

        }
        if (typeof num2 !== 'number') {
            reject("please pass second arg as number");

        }
        if (num2 === 0) {
            reject("Dont divide by zero");
        }

        resolve(num1 / num2);
    })


}

console.log("Start");
let n1 = 100;
let n2 = "30s";

// pending or promise 
console.log(divide(n1, n2));

// this is how we resolve 
divide(n1, n2)
    .then(result => console.log("Result is " + result))
    .catch(err => console.log("Error is " + err));


console.log("End");

// your story will continue here also 