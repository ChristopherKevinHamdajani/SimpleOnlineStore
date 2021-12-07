// const http = require("http");
const express = require('express');
const path = require('path');
const expressHbs = require('express-handlebars');

const bodyParser = require('body-parser');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
// const routes = require('./routes');
// console.log(routes.someText);

const app = express();

app.engine('hbs', expressHbs());
// app.set('view engine', 'pug');
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
// app.use((req, res, next) => {
//     console.log("in the middleware!");
//     next(); // allows the request to continue to the next middleware in line
// });

app.use('/admin',adminData.routes);
app.use(shopRoutes);
app.use(express.static(path.join(__dirname,'public')));
app.use((req, res, next)=> {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', {pageTitle: 'PageNotFound'});
});
// const server = http.createServer(app);

// server.listen(3000);

// using express.js
app.listen(3000);
