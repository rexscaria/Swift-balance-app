$app = angular.module('app.controllers', []);
     
$app.controller('homeCtrl', function($scope) {

});
   
$app.controller('exercisesCtrl', function($scope) {

});
   
$app.controller('perfomanceCtrl', function($scope) {

});
      
$app.controller('loginCtrl',  ["$scope", "$firebaseAuth",
   function($scope, $firebaseAuth) {
   var firebase_url = $app.constant('firebase-url');
   var ref = new Firebase(firebase_url);
   $scope.auth = $firebaseAuth(ref);

   $scope.auth.$onAuth(function(authData) {
       $scope.authData = authData;
   });
   
   $scope.login = function() {
      $scope.authData = null;
      $scope.error = null;
       
      $scope.auth.$authWithPassword({
			email: $scope.email,
			password: $scope.password
		
		}).then(function(authData) {
        $scope.authData = authData;
      }).catch(function(error) {
        $scope.error = error;
      });
    };
 }
]);
   
$app.controller('settingsCtrl', function($scope) {

});
   
$app.controller('clockReachCtrl', function($scope) {

});
 
