(function(ng){
  "use strict";
  ng
  .module('myapp.controllers', [])

  .controller('AppCtrl', ['$scope',($scope) => {

  }])
  .controller('NewsListCtrl', ['$scope',($scope , newsItems) => {
    $scope.news = newsItems.all();
  }])
  ;

})(angular);
