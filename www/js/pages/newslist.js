(function(ng){
  'use strict';
  ng
    .module('myapp.newslist', [])
    .controller('NewsListCtrl', ['$scope', '$http', function ($scope , $http) {
      $http.get('http://behkamal.ir/news.json')
       .then(function(res){
          $scope.news = res.data;
        });
    }])
  ;
})(angular);
