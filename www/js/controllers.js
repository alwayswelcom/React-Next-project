(function(ng){
  "use strict";
  ng
  .module('myapp.controllers', [])

  .controller('AppCtrl', ['$scope', function ($scope) {

  }])
  .controller('NewsListCtrl', ['$scope', 'newsItems', function ($scope , newsItems){
    $scope.news = newsItems.all();
  }])
  ;

})(angular);
