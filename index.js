const express= require("express");
const app= express();
const path = require("path");
let port = 3000;
// ejs setting
app.set("views","ejs");
app.set("views",path.join(__dirname,"views"));
// static files setting

app.use(express.static(path.join(__dirname,"public")));
// server making

app.get("/",((req,res)=>{
  res.render("index.ejs");
  console.log("render the index.html")
}))
//government sector settng
app.get("/government", (req, res) => {
  res.render("governament.ejs");
});

app.listen(port,(req,res)=>{
    console.log(`the server is listening in the port ${port}`);

});
