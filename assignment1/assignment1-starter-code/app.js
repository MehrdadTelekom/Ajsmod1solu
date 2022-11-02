(function (){
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.lunchitems = "";

  $scope.displayMessage = function () {
    var numberitems = $scope.lunchitems
    .split(',')
    .filter(checkstring)
    .length;

    console.log(numberitems)

    if (numberitems == 0) {
      $scope.message='Please enter data first!';
    }
    else if (numberitems <= 3) {
      $scope.message='Enjoy!';
    }
    else {
      $scope.message='Too much!';
    }
  }
}
function checkstring(value){
  return value.trim() != '';
}
})();
