TrelloClone.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$main = options.$main,
    this.$backdrop = options.$backdrop,
    this.allBoards = options.allBoards
  },
  routes: {
    "": "boardsIndex",
    "boards/:id": "boardShow"
  },
  boardsIndex: function(){
    this.allBoards.fetch();
    var indexView = new TrelloClone.Views.BoardsIndex({collection: this.allBoards});
    this.swapView(indexView)
  },
  boardShow: function(id){
    var board =  this.allBoards.getOrFetch(id);
    var showView = new TrelloClone.Views.BoardShow({ board: board});
    this.swapView(showView)
  },
  swapView: function(view){
    if (this.currentView) {
      this.currentView.remove();
    }
    this.currentView = view;    
    this.$main.html(this.currentView.render().$el);
  }
});
