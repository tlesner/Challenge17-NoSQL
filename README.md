# Challenge17-NoSQL

[![License: MPL 2.0](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MPL-2.0)

## Description
This is a back-end API that serves as a social network web application. The application utilizes Express.js for routing, a MongoDB database, and the Mongoose ODM. Users are able to test the functionality of the API routes via HTTP methods to retreive/create/update/delete users and thoughts, and to create/delete associated user's friends and associated thought's reactions.


## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Contributing](#contributing)
4. [Tests](#tests)
5. [License](#license)
6. [Questions](#questions)


## Installation
To install the application locally, do the following in your terminal:

1. Clone the repository to your local computer.  
   `git clone git@github.com:tlesner/Challenge17-NoSQL.git`
2. Check that node.js is installed.  
   `node -v`
3. Install dependencies.  
   `npm i`

## Usage
To run the application locally, open an instance of the application in your terminal. 
Run the following:
1. `npm run build`.
2. `npm run seed`. 
3. `npm run start`. 
4. Open the application in Insomnia and test the routes.


## Contributing
This application was developed by Lauren Webert. Here are some guidelines on ways to contribute:

Report a bug fix.

1. Create a new Issue in the GitHub repo.

Make local changes to push up.

1. Create a new branch (`git checkout -b <your-feature-branch-name>`)
2. Make your changes locally
3. Push the code back to the GitHub repo (`git push origin <your-feature-branch-name>`)
4. Create a pull request to merge your changes

## Tests
The application is working correctly if the user is able to use GET/POST/PUT/DELETE methods on user and thought data, and POST/DELETE methods on associated friend and reaction data. 

## License
The application is covered under [MIT License](https://mit-license.org/#:~:text=The%20MIT%20License%20(MIT)&text=Permission%20is%20hereby%20granted%2C%20free,OTHER%20DEALINGS%20IN%20THE%20SOFTWARE.).  



## Questions
-   GitHub username: [tlesner](https://github.com/tlesner).
-   Reach me at [tjlesner@gmail.com](tjlesner@gmail.com)