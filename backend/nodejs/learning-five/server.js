const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req, "req");
    const url = req.url;

    if (url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
            <div>
            <h1>Home Page</h1>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </div>

            <div>
            <h2>Welcome to the Home Page</h2>
            <p>This is the home page of our simple Node.js server.</p>
            <p>Click on the links above to navigate to different pages.</p>
            <p>Feel free to explore and learn more about Node.js and HTTP servers!</p>
            <p>Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.</p>
            <p>It allows you to run JavaScript on the server side, enabling you to build scalable and high-performance applications.</p>
            <p>With Node.js, you can create web servers, APIs, and real-time applications using JavaScript.</p>
            <p>Node.js has a rich ecosystem of libraries and frameworks, making it easy to build powerful applications.</p>
            <p>Some popular frameworks built on top of Node.js include Express.js, Koa.js, and Hapi.js.</p>
            <p>Node.js also has a large community of developers who contribute to its growth and development.</p>
            <p>There are many resources available online to help you learn Node.js, including tutorials, documentation, and forums.</p>
            <p>Whether you're a beginner or an experienced developer, Node.js has something to offer for everyone.</p>
            </div>
            `);
    } else if (url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
            <div>
            <h1>About Page</h1>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </div>

            <div>
            <h2>About Page</h2>
            <p>This is the about page of our simple Node.js server.</p>
            <p>Here you can find information about the server and its purpose.</p>
            <p>This server is built using Node.js and the HTTP module.</p>
            <p>Node.js is a powerful platform for building web applications and APIs.</p>
            <p>It allows you to use JavaScript on the server side, enabling full-stack development with a single language.</p>
            <p>With Node.js, you can create fast and scalable applications that can handle a large number of concurrent connections.</p>
            <p>Node.js is event-driven and non-blocking, making it ideal for I/O-intensive tasks.</p>
            <p>It has a rich ecosystem of libraries and frameworks that make development easier and faster.</p>
            <p>Some popular libraries for Node.js include Express.js, Socket.io, and Mongoose.</p>
            <p>Node.js also has a vibrant community of developers who contribute to its growth and development.</p>
            <p>There are many resources available online to help you learn Node.js, including tutorials, documentation, and forums.</p>
            <p>Whether you're a beginner or an experienced developer, Node.js has something to offer for everyone.</p>
            </div>
            `);
    }
    else if (url === "/contact") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
            <div>
            <h1>Contact Page</h1>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </div>

            <div>
            <h2>Contact Page</h2>
            <p>This is the contact page of our simple Node.js server.</p>
            <p>Here you can find information on how to get in touch with us.</p>
            <p>If you have any questions or feedback, feel free to reach out.</p>
            <p>You can contact us via email at <a href"mailto:godswillnathaniel97@gmail.com">contact info</a>
            </div>
            `);
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 Not Found</h1>");
    }

});


const port = 2000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`http://localhost:${port}`);
});