/* Created a app as an angular module

The ng-app directive will auto-bootstrap (automatically initialize) the
application when a web page is loaded.

All applications have a $rootScope which is the scope created on the HTML element
 that contains the ng-app directive.

The rootScope is available in the entire application.

If a variable has the same name in both the current scope and in the rootScope,
 the application use the one in the current scope.
*/
var app = angular.module("myApp", []);

/*

app.run(function($rootScope) {
    $rootScope.color = 'blue';
});

*/
