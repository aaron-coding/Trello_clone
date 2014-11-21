TrelloClone.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$main = options.$main,
    this.$backdrop = options.$backdrop,
    this.collection = options.collection
  },
  routes: {
    "": "boardsIndex",
    "boards/:id": "boardShow"
  },
  
  boardsIndex: function(){
    this.collection.fetch();
    // console.log(this.collection);
    var indexView = new TrelloClone.Views.BoardsIndex({collection: this.collection});
    var content = indexView.render().$el
    this.$main.html(content)
    // console.log("I'm in Boards Index");
  },
  
  boardShow: function(id){
    console.log(id)
  }
});
