(function(ng){
  'use strict';
  ng.
    module('myapp.config', [])

    .run(['$ionicPlatform', function ($ip) {
      $ip.ready(function() {
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {

          StatusBar.styleDefault();
        }
      });
    }])

    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
      $stateProvider

      .state('dash', {
        url: '/dash',
        abstract: true,
        templateUrl: 'templates/menu.html'
      })

      .state('dash.news', {
        url: '/news',
        views: {
          'menuContent': {
            templateUrl: 'templates/news-list.html',
            controller: 'NewsListCtrl'
          }
        }
      })
      .state('dash.news-item', {
        url: '/news/:newsID',
        views: {
          'menuContent:': {
            templateUrl: 'templates/news-item.html',
            controller: 'NewsItemCtrl'
          }
        }
      })
      ;

      $urlRouterProvider.otherwise('/dash/news');
    }]);

})(angular);
