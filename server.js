/* bring in the express package */
const express = require('express');

/* create an instance of express */
const app = express();

/* import our own baby middleware */
const sayHelloMiddleware = require('./sayHelloMiddleware');

/*
just to compare, I'm importing the morgan package as well, of course I had to `npm install morgan` first
*/
const logger = require('morgan');

/* import the routes */
const helloRoute = require('./routes');

/* set the port  to a variable and assign it to 3000 */
const port = 3000;

/* tell our app to use our custom baby middleware */
app.use('/', sayHelloMiddleware);

/*  and tell our app to use external package `morgan` as middleware */
app.use(logger('dev'));

/* tell our app to use the routes */
app.use('/', helloRoute);

/* define the index route */
app.get('/', (req, res) => {
  console.log('hello from index route');
  /* response closes the cycle, sends stuff back to the browser! */
  res.json({
    hello: "HOME"
  })
})

/* set our app to listen on port and add some color to it!  Colors are fun! */
/*
check out this reference to color codes: https://coderwall.com/p/yphywg/printing-colorful-text-in-terminal-when-run-node-js-script */

app.listen(port, () => {
  console.log('\x1b[31m%s\x1b[0m', `Listening on port ${port}`);
})
