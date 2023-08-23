### what is a CDN ?
A content delivery network (CDN) is a network of interconnected servers that speeds up webpage loading for data-heavy applications. CDN can stand for content delivery network or content distribution network. When a user visits a website, data from that website's server has to travel across the internet to reach the user's computer. If the user is located far from that server, it will take a long time to load a large file, such as a video or website image. Instead, the website content is stored on CDN servers geographically closer to the users and reaches their computers much faster.

### How does a CDN work?
Content delivery networks (CDNs) work by establishing a point of presence (POP) or a group of CDN edge servers at multiple geographical locations. This geographically distributed network works on the principles of caching, dynamic acceleration, and edge logic computations.
- Caching
Caching is the process of storing multiple copies of the same data for faster data access.
- Dynamic acceleration
Dynamic acceleration is the reduction in server response time for dynamic web content requests because of an intermediary CDN server between the web applications and the client.In this case the other hand, if the nearby CDN server forwards the request to the origin server, they would already have an ongoing, trusted connection established. For example, the following features could further optimize the connection between them:

        -Intelligent routing algorithms
        -Geographic proximity to the origin
        -The ability to process the client request, which reduces its size

- Edge logic computations
You can program the CDN edge server to perform logical computations that simplify communication between the client and server. For example, this server can do the following:
        -Inspect user requests and modify caching behavior.
        -Validate and handle incorrect user requests.
        -Modify or optimize content before responding.

### What is a `crossorigin`?
Cross-Origin Resource Sharing (CORS) is an HTTP feature that enables a web application running under one domain to access resources in another domain. CORS headers specify which domains are allowed to access resources on the origin website. A cross-origin request is a request for website resources external to the origin. CORS instructs the browser to determine if a cross-origin request, such as an image or JavaScript from `b.secondexample.com`, is allowed by `a.example.com`. CORS is an essential component when files (e.g. fonts or JavaScript) are loaded from another domain (e.g. a CDN) other than the website. CORS adds HTTP headers which instruct web browsers on how to use and manage cross-domain content. The browser then allows or denies access to the content based on its security configuration.