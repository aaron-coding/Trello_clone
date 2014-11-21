TrelloClone.Routers.Boards = Backbone.Router.extend({
  initialize: function (options) {
    this.$main = options.$main,
    this.$backdrop = options.$backdrop
    this.collection = options.collection
  },
  routes: {
    "": "boardsIndex"
  },
  
  boardsIndex: function(){
    this.collection.fetch();
    console.log(this.collection);
    var indexView = new TrelloClone.Views.BoardsIndex({collection: this.collection});
    var content = indexView.render().$el
    this.$main.html(content)
    // alert("I'm in Boards Index")
    console.log("I'm in Boards Index");
  }
});
