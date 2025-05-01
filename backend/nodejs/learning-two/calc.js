function sum(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function divide(num1, num2) {
    try {
        if (num2 === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return num1 / num2;
    }
    catch (error) {
        console.log(error.message);
    }


}


module.exports = {
    sum,
    subtract,
    divide
};