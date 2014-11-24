TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({

  template: JST['boards/show'],
  
  initialize: function(options) {
    this.board = options.board;
    this.lists = options.board.lists();
    this.addLists();
    this.listenTo(this.board, "sync", this.render);
    this.listenTo(this.lists, "add", this.addList);

  },
  // events: {
 //    "sortstart .cards": "handleStart",
 //    "sortreceive .cards": "handleReceive"
 //  },
 //  handleStart: function(event, ui){
 //     // console.log("starting");
 //     // console.log(event.target);  //div that the thing came from
 //  },
 //  handleReceive: function(event, ui){
 //    console.log("receiving");
 //    console.log(this.list.id) //new list_id to set the model
 //    console.log(ui.sender)
 //    debugger
 //    console.log(event.target);  //div that the thing went to
 //  },
  
  render: function(){
    var content = this.template({board: this.board});
    this.$el.html(content); 
    this.attachSubviews();
    this.$('#board-lists').sortable();
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
