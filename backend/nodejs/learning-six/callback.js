// console.log("Hello from callback.js");


const fs = require("fs");

const filePath = "../learning-six/data/input.txt";


fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("File content:", data);
});

// function person(name, callbackFunction) {
//     console.log("Hello " + name);
//     callbackFunction();
// }

// function address() {
//     console.log("India");
// }

// person("JOHN", address);