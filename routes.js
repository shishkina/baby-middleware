const express = require('express');

/* create a new instance of express.Router */
const helloRoute = express.Router();

/*
this is a response to the get request for '/hello' route
again, remember, we need to either to send something back to the browser, or call `next()`
*/

helloRoute.get('/hello', (req, res) => {
  res.json({
    message: "OK",
    data: "HELLO ROUTE!"
  })
})

/* don't forget to export! */
module.exports = helloRoute;
