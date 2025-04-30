# THE INTERNET

Internet - a global network of computers and devices that are interconnected through a variety of commuication technologies. The internet allows / enables devices around the world to communicate with each other and also it allows them share information.

- The internet relies on massive network of physical cables, fiber optics, satellites and cell towers that forms it's backbone
- TCP/IP (transmission control protocol / internet protocol) governs the communication between devices on the internet. TCP ensures data is delivered in order while IP ensures that data gets to the correct address
- Data's from the internet are divided into small chunks called PACKETS before they are being sent across the network. They are routed through various nodes ( routers and switches) until they reach their destination where they are reassembled.
- Routers and switches are networking devices that help forward packets of data across the network. Routers direct traffice between networks, switches connect devices within the same network
- IP Addresses are unique identifer that every devices that connects to the internet has
- ISPs (internet service providers) are companies that provides access to the internet, through broadband, wi-fi or mobile networks.
- DNS (domain name system) translate readable domain names into IP addresses that computer uses to identify each other on the network.

## HTTP NETWORKING

HTTP - stands for Hypertext Transfer Protocol. this is the protocol used by the web to transfer and display web pages.

- HTTP makes request to the web server. this request asks for resources like html files, images, scripts or specific web pages. This requests are composed of various components such as:

1. HTTP method (GET, POST, PUT, DELETE)
2. The headers(provides metadata)
3. The URL(uniform resource locator)

- GET requests data from the server
- POST sends data to the server
- PUT updates data on the server
- DELETE deletes data from the server

After receiving request, the web server processes it and sends back an HTTP response. The response includes a status code, header and the requested content (HTML, Images etc)

- HTTPS: (HYPERTEXT TRANSFER PROTOCOL SECURE) - this is the encrypted version of HTTP. it uses SSL/TLS protocols to ensure the privacy and integrity of data during transfer.

- Cookies: they are small data pieces sent from the server to the client and are stored by the browser.

## DNS (DOMAIN NAME SYSTEM)

Domain name is the human-readble address used to access websites. It is part of the URL and provides a memorable way to navigate the internet instead of using IP address.

### STRUCTURE OF A DOMAIN NAME

- Top-Level Domain (TLD): this is the part after the last dot in a domain (.com, .org, .net, .uk, .ng, .gh)
- Second-Level Domain (SLD): the part directly before the TLD (eg, example in example.com)
- Subdomain: This is an optional part before the SLD (eg, www in www .example .com)

Domain name system is a hierachical system that trnslates domain name into IP address.
Domain names are registerd - leasing it for a specified period (typically 1 year).

Converting domain name into IP address is called domain name resolution. This is handled by DNS servers which caches the IP address of frequently visited domains to speeed up the process.

## HOSTING

- web hosting is the service that stores your website files and make them available on the internet. Hosting services provides space on a server for your website to live and be accessed by others.

- webpage is a single document or page that is part of a website. It may contain text, images, even links to other pages

- website is a collection of interconnected webpages. It is accessible through a domain name and it can have multiple pages and resources.

- webserver is a computer that hosts websites. it serves the content to users when they request it via HTTP.

- search engine is a tool used to search for content on the internet. It indexes websites and ranks them based on relevance to search queries.

## TYPES OF HOSTING

1. shared hosting - multiple website on same server. cost effective but offers limited resources, meaning performance may be slower if server is overloaded
2. vps (virtual private server) hosting - this is a middle ground between shared and dedicated hosting. Your website gets its own virtualized space on a server, offering more resources and control than shared hosting
3. Dedicated Hosting - owing your own server
4. Cloud Hosting - websites hosted on a network of servers (computers)
