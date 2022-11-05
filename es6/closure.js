function outer() {
    let city = "Bengaluru";
    function inner() {
        return city.toUpperCase();
    }
    return inner();
}

console.log(outer());

///////////////////////////////////////

function fnReference(num1) {
    return function (num2) {
        return num1 + num2;
    }
}

let fnOuterRef = fnReference(100);
console.log(fnOuterRef);
let fnInnerRef = fnOuterRef(200);
console.log(fnInnerRef);

///////////////////////////////// 

function sum(num1) {
    return function (num2) {
        return function (num3) {
            return num1 + num2 + num3;
        }
    }
}

// currying in javascript 
let sumVal = sum(10)(20)(30);
console.log(sumVal);

/////////////////arrow style /////////////
sum1 = (num1) => (num2) => (num3) => num1 + num2 + num3;
console.log(sum1);
console.log(sum1(100)(200)(300));