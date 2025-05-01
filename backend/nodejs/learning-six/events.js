const EventEmitter = require('events');

// const myFirstEmitter = new EventEmitter();

// register a listener

// myFirstEmitter.on('greet', (name) => {
//     console.log(`Hello ${name}`);
// });

// myFirstEmitter.emit('greet', 'john');

class MyCustomerEmitter extends EventEmitter {
    constructor() {
        super();
        this.greeting = "Hello";
    }

    greet(name) {
        this.emit('greeting', `${this.greeting} ${name}`);
    }
}

const myFirstEmitter = new MyCustomerEmitter();

myFirstEmitter.on('greeting', (data) => {
    console.log(data);
});

myFirstEmitter.greet('john');