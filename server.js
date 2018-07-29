const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;
let app = express();
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
	return text.toUpperCase();
});

app.use(express.static(__dirname + '/public'));

app.use((res, req, next) => {
	let now = new Date().toString();
	console.log(`${now}: ${req.method} ${req.originalUrl}`)
	next();
});

app.get('/', (req, res) => {
	res.render('home.hbs', {
		pageTitle: 'Home Page',
		welcomeMessage: 'Welcome to my first node server app.'
	})
});

app.get('/about', (req, res) => {

	res.render('about.hbs', {
		pageTitle: 'About Page'
	});
});


app.listen(port, ()=>{
	console.log(`Server is up on port ${port}.`);
});