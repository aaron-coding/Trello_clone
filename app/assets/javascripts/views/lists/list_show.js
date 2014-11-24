TrelloClone.Views.ListsShow = Backbone.CompositeView.extend({

  template: JST['lists/show'],
  
  initialize: function(options){
    this.$el = $('<ul>').addClass('single-list col-md-3');
    this.list = options.list;
    this.cards = this.list.cards();
    this.addCards();
  },
  
  events: {
    "sortremove .cards": "handleRemove",
    "sortreceive .cards": "handleReceive"
  },

  render: function(){
    var content = this.template({list: this.list});
    this.$el.html(content);
    return this;
  },
  
  handleRemove: function(event, ui){
     this.cards.remove(ui.item.data("id")) //remove model from collection
  },
  
  handleReceive: function(event, ui){
    var card = new TrelloClone.Models.Card({
      id: ui.item.data("id"),     //new model with list ID and model 
      list_id: this.list.id
    })
    card.save({}, {
      success: function(){
        this.cards.add(card)
      }.bind(this)
    })

  },
  
  onRender: function(){
    this.$('.cards').sortable({ connectWith: ".cards" });
  },
  
  addCards: function(){
    this.cards.each(function(card){
      var cardSubview = new TrelloClone.Views.CardsIndexItem({card: card})
      this.addSubview(".cards", cardSubview)
    }.bind(this))
  }
});