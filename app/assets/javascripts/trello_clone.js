window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $main = $("#main")
    var $backdrop = $(".backdrop")
    var allBoards = new TrelloClone.Collections.Boards(); 
    new TrelloClone.Routers.Router({
      $main: $main,
      $backdrop: $backdrop,
      allBoards: allBoards
    });
    Backbone.history.start();
  }
};
