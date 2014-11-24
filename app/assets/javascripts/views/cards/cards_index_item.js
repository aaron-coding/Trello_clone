TrelloClone.Views.CardsIndexItem = Backbone.View.extend({

  template: JST['cards/index_item'],

  initialize: function(options){
    this.card = options.card;
    this.$el.addClass("list-card");
    this.$el.attr("data-id", this.card.id)
    this.listenTo(this.card, "sync", this.render)
  },
  // events: {
  //   "sortstart .cards": "handleStart"
  // },
  render: function(){
    var content = this.template({ card: this.card });
    this.$el.html(content);
    return this;
  }
  
  // handleStart: function(){
  //       console.log("starting");
  //       console.log(event.target);  //div that the thing came from
  //
  
      //
    // this.$('.cards').sortable({
    //   connectWith: ".cards" ,
    //   start: function(event, ui){
    //     console.log("starting");
    //     console.log(event.target);  //div that the thing came from
    //   },
    //   receive: function(event, ui){
    //     console.log("receiving");
    //     console.log(event.target); 
    //   },
    //
    // });
    //  }
  
  
});