function delayFn(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

async function delayGreet(name) {
    await delayFn(2000);

    console.log(name);
}

// delayGreet("John");


let count = 10;

const countDown = setInterval(() => {
    console.log(count);

    count--;

    if (count < 0) {
        clearInterval(countDown);
        console.log("Time is up!");
    }
}, 1000);