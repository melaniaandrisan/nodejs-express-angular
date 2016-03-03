/*

When adding properties to the $scope object in the controller, the view (HTML)
 gets access to these properties.

In the view, you do not use the prefix $scope, you just refer to a propertyname,
 like {{carname}}.

In AngularJS, $scope is the application object (the owner of application
variables and functions).

*/

app.controller("myCtrl", function($scope,modelInfo) {

    $scope.firstName	= "John";
    $scope.lastName= "Doe";

    $scope.modelData = modelInfo.getModelData();

    $scope.names = modelInfo.getNames();

    $scope.orderByMe = function(x) {
      $scope.myOrderBy = x;
    }

//http requests
/*
    $http.get("customers.php").then(function(response) {
        $scope.myData = response.data.records;
    });

    $http.get("wrongfilename.htm")
    .then(function(response) {
        //First function handles success
        $scope.content = response.data;
    }, function(response) {
        //Second function handles error
        $scope.content = "Something went wrong";
    });

*/

});
