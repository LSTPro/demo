const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.get("/",(req,res)=>{
  res.send("Hello World")
})
app.listen(process.env.PORT || 5000, function() {
  console.log("server at 5000");
})
