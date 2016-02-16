app.controller('mainCtrl', function($scope, dataService) {

  $scope.$watch($scope.quotes);



  $scope.addData = function(obj) {
    dataService.addData();
    $scope.add = '';
  }




  $scope.getData = function() {
    $scope.quotes = dataService.getData();
  }
  $scope.getData();

  $scope.person = "Hello there";






})
