(function(ng){
  "use strict";
  ng
  .module('myapp.controllers', [])

  .controller('AppCtrl', ['$scope', function ($scope) {

  }])
  .controller('NewsListCtrl', ['$scope', '$http', function ($scope, $http){
    $http.get('http://behkamal.ir/newsList.json').then(function(resp){
      $scope.news = resp.data;
      console.log(resp.data);
    }, function(err){
      console.log('ERR', err);
    });
  }])
  .controller('NewsItemCtrl', ['$scope', 'newsItems', '$stateParams', function ($scope , newsItems, $stateParams){
    $scope.singleNews = newsItems.get($stateParams.singleNewsId);
  }])
  ;

})(angular);
