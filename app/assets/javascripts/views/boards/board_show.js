TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({

  template: JST['boards/show'],
  
  initialize: function(options) {
    this.board = options.board;
    this.lists = options.board.lists();
    this.addLists();
    this.listenTo(this.board, "sync", this.render);
    this.listenTo(this.lists, "add", this.addList);
  },
  
  render: function(){
    var content = this.template({board: this.board});
    this.$el.html(content); 
    this.attachSubviews();
    return this;
  },
  
  addList: function(list){
    var listShowView = new TrelloClone.Views.ListsShow({list: list})
    this.addSubview('div#board-lists', listShowView)
  },
  
  addLists: function() {
    this.lists.each(function(list){
      this.addList(list)
    }.bind(this));
  }
});
