const e = require("express")()

 function apicall (req, res) {
  res.send('Hello World')
}
e.get('http://api.reddit.com', )