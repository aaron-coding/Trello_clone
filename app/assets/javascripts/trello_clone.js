window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $main = $("#main")
    var $backdrop = $(".backdrop")
    var collection = window.boards = new TrelloClone.Collections.Boards(); 
    new TrelloClone.Routers.Router({
      $main: $main,
      $backdrop: $backdrop,
      collection: collection
    });
    Backbone.history.start();
  }
};
