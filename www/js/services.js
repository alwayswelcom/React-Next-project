(function (){
  "use strict";

  angular
    .module('myapp.services', [])

    .factory('newsItems', function (){
      var news = {};

      return {
        all: function() {
          return news;
        },
        remove: function(singleNews) {
          news.splice(news.indexOf(singleNews), 1);
        },
        get: function(singleNewsId) {
          for (var i = 0; i < news.length; i++) {
            if (news[i].id === parseInt(singleNewsId) ) {
              return news[i];
            }
          }
          return null;
        }
      };
    });
})();
