TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST['boards/show'],
  initialize: function(options) {
    this.board = options.board;
    this.lists = options.board.lists();
    this.addLists();
    this.listenTo(this.board, "sync", this.render);
    this.listenTo(this.lists, "add", this.addList);

  },
  events: {
    "sortstop #board-lists": "handleStop"
  },
  handleStop: function(){
    this.ordSort();
  },
  ordSort: function(){
    this.$el.find(".single-list").each(function(index, listInDOM) {
      var listInCollection = this.lists.get($(listInDOM).data("id"))
      listInCollection.set({ord: index})
      listInCollection.save()
    }.bind(this))
  },
  render: function(){
    var content = this.template({board: this.board});
    this.$el.html(content); 
    this.attachSubviews();
    this.$('#board-lists').sortable({
      // placeholder: "single-list",
      // forcePlaceholderSize: true
    });
    this.onRender(); 
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
