(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.inputDishList = "";
  $scope.dishCount = 0;

  $scope.coutDishes = function () {
    // get all the dishes sperated by comma ','
    var allDishes = $scope.inputDishList.split(',');
    // handle input like "item1,item2, ,item3" or "item1,item2,,item3" by finding the empty strings after split
    var emptyDishes = allDishes.filter(function (dish) {
      return (!dish || dish.length === 0 || !dish.trim());
    });
    // "valid" dish count = all dishes minus what are empty or consist of only spaces
    $scope.dishCount = allDishes.length - emptyDishes.length;
  };

  $scope.reportMessage = function () {
    if ($scope.dishCount <= 0) {
      return "Please enter data first"
    } else if ($scope.dishCount <= 3) {
      return "Enjoy!"
    } else {
      return "Too much!";
    }
  };
}

})();
