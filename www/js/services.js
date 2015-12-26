(function (){
  "use strict";

  angular
    .module('myapp.services', [])

      .factory('newsItems', function (){
        var news = [{
            id: 1,
            'title': 'some text',
            'short_desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, cumque!',
            'long_desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, cumque, provident, laboriosam obcaecati optio rem aspernatur enim exercitationem in hic molestias dignissimos quibusdam placeat totam pariatur expedita sint deleniti saepe aliquam quisquam itaque ex natus unde labore et repellat incidunt voluptatibus! Reiciendis, quaerat distinctio voluptate. Officiis culpa earum dolores sequi.'
          },{
            id: 2,
            'title': 'some text',
            'short_desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, cumque!',
            'long_desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, cumque, provident, laboriosam obcaecati optio rem aspernatur enim exercitationem in hic molestias dignissimos quibusdam placeat totam pariatur expedita sint deleniti saepe aliquam quisquam itaque ex natus unde labore et repellat incidunt voluptatibus! Reiciendis, quaerat distinctio voluptate. Officiis culpa earum dolores sequi.'
          },{
            id: 3,
            'title': 'some text',
            'short_desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, cumque!',
            'long_desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, cumque, provident, laboriosam obcaecati optio rem aspernatur enim exercitationem in hic molestias dignissimos quibusdam placeat totam pariatur expedita sint deleniti saepe aliquam quisquam itaque ex natus unde labore et repellat incidunt voluptatibus! Reiciendis, quaerat distinctio voluptate. Officiis culpa earum dolores sequi.'
          },{
            id: 4,
            'title': 'some text',
            'short_desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, cumque!',
            'long_desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, cumque, provident, laboriosam obcaecati optio rem aspernatur enim exercitationem in hic molestias dignissimos quibusdam placeat totam pariatur expedita sint deleniti saepe aliquam quisquam itaque ex natus unde labore et repellat incidunt voluptatibus! Reiciendis, quaerat distinctio voluptate. Officiis culpa earum dolores sequi.'
          },{
            id: 5,
            'title': 'some text',
            'short_desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, cumque!',
            'long_desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, cumque, provident, laboriosam obcaecati optio rem aspernatur enim exercitationem in hic molestias dignissimos quibusdam placeat totam pariatur expedita sint deleniti saepe aliquam quisquam itaque ex natus unde labore et repellat incidunt voluptatibus! Reiciendis, quaerat distinctio voluptate. Officiis culpa earum dolores sequi.'
          }
        ];
        return {
          all: function() {
            return chats;
          },
          remove: function(chat) {
            chats.splice(chats.indexOf(chat), 1);
          },
          get: function(chatId) {
            for (var i = 0; i < chats.length; i++) {
              if (chats[i].id === parseInt(chatId)) {
                return chats[i];
              }
            }
            return null;
          }
        };
    });
})();
