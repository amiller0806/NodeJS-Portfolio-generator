const fs = require("fs");
const generatePage = require('./src/page-template.js');


const profileDataArgs = process.argv.slice(2);
// We'll want to extract the above arguments (profileDataArgs) & store them into diff variables. A way to do this is to use the array index w/ the following expressions:
const [name, github] = profileDataArgs;

// 

fs.writeFile("index.html", generatePage(name, github), (err) => {
    if (err) throw new Error(err);
    console.log("Portfolio complete! Check out index.html to see the output!");
  });