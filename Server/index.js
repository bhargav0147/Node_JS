
const express = require("express")

const port = 8000;
const app = express();

app.get('/',(req,res)=>{
  return res.send("Home Page... Hi!... "+ req.query.name)
})

app.get('/about',(req,res)=>{
  return res.json({"Port":port})
})

app.listen(port, () => {
  console.log(`Server Started...! On = ${port}`);
})
