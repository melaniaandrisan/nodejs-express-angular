/*

When adding properties to the $scope object in the controller, the view (HTML)
 gets access to these properties.

In the view, you do not use the prefix $scope, you just refer to a propertyname,
 like {{carname}}.

In AngularJS, $scope is the application object (the owner of application
variables and functions).

*/

app.controller("myCtrl", function($scope) {

    $scope.firstName	= "John";
    $scope.lastName= "Doe";


    $scope.names = [
      {name:'Jani',country:'Norway'},
      {name:'Carl',country:'Sweden'},
      {name:'Margareth',country:'England'},
      {name:'Hege',country:'Norway'},
      {name:'Joe',country:'Denmark'},
      {name:'Gustav',country:'Sweden'},
      {name:'Birgit',country:'Denmark'},
      {name:'Mary',country:'England'},
      {name:'Kai',country:'Norway'}
  ];
  $scope.orderByMe = function(x) {
    $scope.myOrderBy = x;
  }

});
