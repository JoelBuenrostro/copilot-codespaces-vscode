// create web server

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});

var port = 3000;

// set view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// set static files
app.use(express.static('public'));

// set data
var comments = [
    {name: 'Huy', content: 'Hello'},
    {name: 'Hieu', content: 'Hi'},
    {name: 'Hung', content: 'Hey'}
];

// set route
app.get('/', function(req, res) {
    res.render('home');
});

app.get('/comments', function(req, res) {
    res.render('comments', {comments: comments});
});

app.post('/comments', urlencodedParser, function(req, res) {
    var newComment = {name: req.body.name, content: req.body.content};
    comments.push(newComment);
    res.redirect('/comments');
});

app.listen(port, function() {
    console.log('Server is listening on port ' + port);
});