>React alone is not responsible for making our app fast and production ready there are several other packages who help in doing so , there is a lot of other Javascript code written.

## What is `npm` and what does it stand for?
>npm is a package manager for the JavaScript programming language maintained by npm, Inc. npm is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry. The registry is accessed via the client, and the available packages can be browsed and searched via the npm website. The package manager and the registry are managed by npm, Inc.

**OK**

But does npm **stand** for *Node package Manager* ? **NO** it doesn't it only manages the node packages and this is not the full form of `npm`

### What is `package.json`?
Its a configuration for our npm

### Difference between a package and dependency
There is no major differnce as such , a package is also known as dependency , since a package contains all the necessary stuff used on the project.

### What is the difference between devDependencies , peerDependencies and production dependencies?
The difference between these two, is that devDependencies are modules which are only required during development, while dependencies are modules which are also required at runtime.
- A peer dependency specifies that our package is compatible with a particular version of an npm package.
Some good examples of dependencies which would be required at runtime include React, Redux, Express, and Axios.
Some good examples of when to install devDependencies would be Nodemon, Babel, ESLint, and testing frameworks like Chai, Mocha, Enzyme, etc…

>Whatever you can regenerate don't put it on github

### What is Hot Module Replacement (HMR)?
Hot Module Replacement (HMR) is a powerful feature designed to enhance the development process by providing real-time updates to modules within a running application. The beauty of HMR lies in its ability to make these updates without requiring a full page reload, thereby saving valuable time during development.