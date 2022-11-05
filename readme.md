# Day 2

- synchronous call 
```
    function hi() {
        // do something - 1s * x 
    }
    console.log("Start"); 
        hi();
    console.log("stop"); 
```
-- callback 
```
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

```