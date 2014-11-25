TrelloClone.Views.ListsShow = Backbone.CompositeView.extend({
  template: JST['lists/show'],  
  initialize: function(options){
    this.list = options.list;
    this.$el = $('<ul>').addClass('single-list col-md-3');
    this.$el.attr("data-id", this.list.id)
    this.cards = this.list.cards();
    this.addCards();    
  },
  events: {
    "sortremove .cards": "handleRemove",
    "sortreceive .cards": "handleReceive",
    "sortstop .cards": "handleStop"
  },
  handleStop: function(event, ui){
    this.ordSort();
  },
  handleRemove: function(event, ui){
     this.cards.remove(ui.item.data("id")) //remove model from collection
  },  
  handleReceive: function(event, ui){
    var card = new TrelloClone.Models.Card({ //this adds the new model to current list collection when it's dragged over.
      id: ui.item.data("id"),      
      list_id: this.list.id
    })
    card.save({}, {
      success: function(){
        this.cards.add(card);
        this.ordSort(); //sort again once the new card is in collection.
      }.bind(this)
    })
  },
  ordSort: function(){
    this.$el.find(".list-card").each(function(index, cardInDOM) {
      var cardInCollection = this.cards.get($(cardInDOM).data("id"))
      cardInCollection.set({ord: index})
      cardInCollection.save()
    }.bind(this))
  },
  onRender: function(){
    this.$('.cards').sortable({ 
      connectWith: ".cards", 
      placeholder: "before-placed-highlight list-card", 
      forcePlaceholderSize: true
   });
  },
  render: function(){
    var content = this.template({list: this.list});
    this.$el.html(content);
    return this;
  },
  addCards: function(){
    this.cards.each(function(card){
      var cardSubview = new TrelloClone.Views.CardsIndexItem({card: card})
      this.addSubview(".cards", cardSubview)
    }.bind(this))
  }
});