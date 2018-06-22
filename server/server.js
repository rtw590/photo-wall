const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

// Init App
const app = express();

// Set views folder
// Setup handlebars
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Set Static Folder
app.use(express.static('public'));

app.set('port', (process.env.PORT || 8000));

// Route Files - Replace Placeholder
let placeholder = require('./routes/placeholder');
app.use('/placeholder', placeholder);

// Set home route
app.get('/', function(req, res){
    res.render('home');
});

app.listen(app.get('port'), function(){
    console.log('Server started on port '+app.get('port'));
});