// asynchronous 
function divide(num1, num2, callback) {

    if (typeof callback != 'function') {
        throw "Please pass callback function";
    }

    setTimeout(() => {
        if (typeof num1 !== 'number') {
            callback("Pls pass first arg as number");
            return;
        }
        if (typeof num2 !== 'number') {
            callback("please pass second arg as number");
            return;
        }
        if (num2 === 0) {
            callback("Dont divide by zero");
            return
        }

        callback(null, num1 / num2);

    }, 0);
}

console.log("Start");
let n1 = 100;
let n2 = 30;


divide(n1, n2, (err, res) => {
    if (err) {
        console.log("Error in Processing : " + err);
    } else {
        console.log("Result " + res)
    }
});

console.log("End");

// your story will continue here also 