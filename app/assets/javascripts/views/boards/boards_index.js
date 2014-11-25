TrelloClone.Views.BoardsIndex = Backbone.CompositeView.extend({
  template: JST['boards/index'],
  
  initialize: function(options) {
    this.collection = options.collection;
    this.listenTo(this.collection, "sync", this.render); //is this line necessary?
    this.listenTo(this.collection, "add", this.addBoard);
    this.collection.each(function(board){
      this.addBoard(board)
    }.bind(this))
  },
  render: function(){
    var content = this.template(); //removed boards collection
    this.$el.html(content); 
    this.attachSubviews();
    return this;
  },
  addBoard: function (board) {
    var subView = new TrelloClone.Views.BoardsIndexItem({model: board});
    this.addSubview("div.boards-index", subView)
  }
});