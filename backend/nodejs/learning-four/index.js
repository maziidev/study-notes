// file system

const fs = require('fs');

const path = require('path');

// create a data folder and file the sync way


// folder
const dataFolder = path.join(__dirname, 'data');

if (!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder);
    console.log("folder created");
}

// file
const filePath = path.join(dataFolder, 'data.txt');

if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "Hello world");
    console.log("File created successfully");
}

// read file

const readContent = fs.readFileSync(filePath, 'utf-8');
console.log("File content:", readContent);

fs.appendFileSync(filePath, "\nThis is a new line file");
const readContent2 = fs.readFileSync(filePath, 'utf-8');
console.log("file content after append:", readContent2);


// asynchronous way of creating file and folder

const asyncFilePath = path.join(dataFolder, "asyncData.txt");
fs.writeFile(asyncFilePath, "Hello world async way", (error) => {
    if (error) throw error;
    console.log("Async file created successfully");
});

// read file asynchronously

fs.readFile(asyncFilePath, 'utf-8', (err, data) => {
    if (err) throw err;
    console.log("Async file content:", data);

    fs.appendFile(asyncFilePath, "\n this is another line", (err) => {
        if (err) throw err;
        console.log('new line added to async file');
    });
});