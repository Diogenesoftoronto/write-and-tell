const e = require("express")();

function apicall(req, res) {
  res.send("Hello World");
}
function apilisten() {
  console.log("listening on port 8080");
}
function apimiddleware(req, res, next) {
  res.json("Hello");
  next();
}
// call middleware before other requests
// e.use(apimiddleware)
e.get("/", apicall);
e.listen(8080); //works no call back is required
