TrelloClone.Views.BoardsIndex = Backbone.CompositeView.extend({

  template: JST['boards/index'],
  
  initialize: function() {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addBoard);
    this.collection.each(function(board){
      this.addSubview(board)
    }.bind(this))
  },
  
  render: function(){
    var content = this.template({boards: this.collection});
    this.$el.html(content); 
    this.attachSubviews();
    return this;
  },
  
  addBoard: function (board) {
    var subView = new TrelloClone.Views.BoardsIndexItem({model: board});
    this.addSubview("div.boards-index", subView)
  }

});