/*
exporting anonymous function in line
it has access to:
* request object,
* response, object,
* next function
it's provided by default

HERE ARE THE DOCS!!!!!
https://expressjs.com/en/guide/writing-middleware.html
*/

module.exports = function (req, res, next) {
  console.log('in middleware!');
  /* this is what we did in class: just log, url, method */
  console.log('this is what we did in class', req.url, req.method, res.statusCode);

  /* if you are */

  /*  here is something extra, if you dare 😱  can you trace what's happening?! */

  const start = Date.now();
  const method = req.method;
  const url = req.url;
  const status = res.statusCode;

  /* There is a method on response object: `on` that is monitoring the status of our request */
  res.on('finish', () => {
    /* check current date and time, and substract the start date we defined earlier to get the diff*/
    const duration = Date.now() - start;
    const message = `
    --- This is OUR OWN KEWL logger ---
    --- Method: \x1b[31m ${method} \x1b[0m to
    --- url: \x1b[31m ${url} \x1b[0m took \x1b[31m ${duration} \x1b[0m ms! ---
    --- Status: \x1b[31m ${status} \x1b[0m ---
    `
    /*
    And finally, log our brand new logger message! 🎉
    I'm also adding some color! Isn't it FUN?!?!?
    By the way, in case you didn't know, CYAN is the best color!!! Duh
    */
    console.log('\x1b[36m%s\x1b[0m', message);
  });
  /*
  if we don't call `next()``, or send a response back
  back to close the cycle, express will panic
  and will not know what to do!
  You MUST either use `next()` or send something back to the browser using `res.send` or `res.json` etc....
  In this case, since we only want to print to the terminal, I need to call `next()`
  */
  next();
}
