const e = require("express")()

 function apicall (req, res) {
  res.send('Hello World')
}
function apilisten () {
  console.log("listening on port 8080")
}
e.get('/', apicall)

e.listen(8080, apilisten)