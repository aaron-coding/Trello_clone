TrelloClone.Views.CardsIndexItem = Backbone.View.extend({

  template: JST['cards/index_item'],

  initialize: function(options){
    this.$el.addClass("list-card")
    this.card = options.card
    this.listenTo(this.card, "sync", this.render)
  },

  render: function(){
    var content = this.template({ card: this.card });
    this.$el.html(content);
    return this;
  },

});