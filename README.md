# nodejs-express-angular

This is a demo application meant to demonstrate how node.js, express and angular can work together.

The main project is an express project created following the  [Installation tutorial](1).

In the first step of the project angular is added in a [html page](2) inserted in the root directory.

Some nice to know:

- to be able to serve an html page using express I needed to make a `get` in the [app.js](5) and use `res.getFile` in it.
- to be able to get static content properly I needed to add in the same file `app.use(express.static(__dirname + '/public'));`
- to add a link to a html page use `link` not `script`
- to have 2 way binding with Angular I needed to have the object in `$scope`

Next:
- investigate express-generator
- create services in express
- connect to different express services from angular and make promises work using [bluebirdjs](6).


From where I started:

[About express](3)

[Angular tutorial on w3schools](4)

[1]:http://expressjs.com/en/starter/installing.html
[2]:https://github.com/melaniaandrisan/nodejs-express-angular/blob/master/index.html
[3]:http://expressjs.com/en/api.html
[4]:http://www.w3schools.com/angular/
[5]:https://github.com/melaniaandrisan/nodejs-express-angular/blob/master/app.js
[6]:http://bluebirdjs.com/docs/features.html
