TrelloClone.Views.ListsShow = Backbone.CompositeView.extend({

  template: JST['lists/show'],
  
  initialize: function(options){
    this.$el = $('<ul>').addClass('single-list col-md-4');
    this.list = options.list;
    this.cards = this.list.cards();
    this.addCards();
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