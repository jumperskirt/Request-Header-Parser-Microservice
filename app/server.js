// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

http://expressjs.com/en/starter/basic-routing.html
// app.get("/", function (request, response) {
//   response.sendFile(__dirname + '/views/index.html');
  
// });

app.get("/", function (req, res) {
  console.log(req);
  var ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;
  ip = ip.split(',')[0];
  ip = ip.split(':').slice(-1).toString();
  // ip = ip.slice(0, 13);
  var language = req.headers["accept-language"];
  language = language.split(",")[0];
  var software = req.headers["user-agent"];
  software = software.substring(13, 46);
  
  res.json({
    "ip": ip, 
    "language": language,
    "software": software
  });
});

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
// app.post("/dreams", function (request, response) {
//   dreams.push(request.query.dream);
//   response.sendStatus(200);
// });

// // Simple in-memory store for now
// var dreams = [
//   "Find and count some sheep",
//   "Climb a really tall mountain",
//   "Wash the dishes"
// ];

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
