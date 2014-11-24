TrelloClone.Collections.Lists = Backbone.Collection.extend({
  model: TrelloClone.Models.List,
  url: "/api/lists",
  initialize: function (board) {
    this.board = board;
  }
});
