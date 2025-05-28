const express= require("express");
const app= express();
const path = require("path");
let port = 3000;
// ejs setting
app.set("views","ejs");
app.set("views",path.join(__dirname,"views"));
// static files setting

app.use(express.static(path.join(__dirname,"public")));

g
// server making

app.get("/",((req,res)=>{
  res.render("index.ejs");
  console.log("render the index.html")
}))
//government sector settng
app.get("/government/:service", (req, res) => {
  let {service}= req.params;
  console.log("service giver successfully");
  res.render("governament.ejs",{service});
});
//inside subsector setting
app.get("/government/:service/:subservice",((req,res)=>{
  let { subservice}= req.params;
  if(subservice =="water"){
    res.render("water.ejs",{subservice});
  }else if(subservice=="electricity"){
    res.render("electricity.ejs",{subservice});
  } else{
    res.send("the page you are finding is no available");
  }
  // res.render("water.ejs",{subservice});
  // console.log("the water page is render ")

}))





//the server is listening in the port
app.listen(port,(req,res)=>{
    console.log(`the server is listening in the port ${port}`);

});
