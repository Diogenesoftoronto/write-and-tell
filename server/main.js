const e = require("express")()

 function apicall (req, res) {
  res.send('Hello World')
}
function apilisten () {
  console.log("listening on port 8080")
}
function apimiddleware (req, res, next) {
  console.log("weiners are juicy and thick")
  next()
}

e.get('/', apicall)

e.listen(8080) //works no call back is required