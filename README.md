# NodeJS-Read-Write-JSON
An extremely simple NodeJS command line app to read/write/remove data from a JSON file.
# System Setup
-  Download and install NodeJS from Nodejs.org
- Place JavaScript files into a project. I use Visual Studio Code, a free IDE. 
-  From the console, initialize the NPM package manager in your project
    - npm init
- Install required npm packages by running the following command from the console in your project. Newer versions of these packages may work as well. 
  - npm i chalk@4.0.0
  - npm i yargs@15.3.1
# Usage
node app.js --help
```
Commands:
  app.js add     Add data
  app.js remove  Remove Data
  app.js list    List data
  app.js read    Read one record

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]
  ```
