(function(ng){
  'use strict';
  ng.
    module('myapp.config', [])

      .run(['$ionicPlatform', ($ip) => {
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

      .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
        $stateProvider

        .state('dash', {
          url: '/dash',
          abstract: true,
          views: {
            'root': {
              templateUrl: 'templates/menu.html',
              controller: 'AppCtrl'
            }
          }
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
          url: '/news/:singleNewsId',
          views: {
            'menuContent': {
              templateUrl: 'templates/news-item.html',
              controller: 'NewsItemCtrl'
            }
          }
        })
        ;

        $urlRouterProvider.otherwise('/dash/news');
      }]);

})(angular);
