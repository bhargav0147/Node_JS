const fs = require("fs");

// Sync
// fs.writeFileSync('./test.txt','Hey There')

// Async
// fs.writeFile('./test.txt',"Hello Word Hello",(err)=>{});

// Read Sync
// const result = fs.readFileSync("./test.txt","utf-8")
// console.log(result)

// Read
// const result = fs.readFile("./test.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log("Error :", err);
//   } else {
//     console.log(result);
//   }
// });


fs.appendFileSync("./test.txt", `${Date.now()} Hey Bhargav\n`)

// File Information
console.log(fs.statSync(`./test.txt`))