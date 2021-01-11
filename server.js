var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var app = express();

app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));

app.get('/', function(req, res){
   res.cookie('mycookie', 'expresscookie').send('cookie set'); //Sets name = express
});

app.get('/check', function(req, res){
    console.log(req.cookies)
   if(req.session.page_views){
      req.session.page_views++;
      res.send("You visited this page " + req.session.page_views + " times");
   } else {
      req.session.page_views = 1;
      res.send("Welcome to this page for the first time!");
   }
});

app.listen(3000);