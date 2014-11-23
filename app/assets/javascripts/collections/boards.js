TrelloClone.Collections.Boards = Backbone.Collection.extend({

  model: TrelloClone.Models.Board,
  url: "/api/boards",
  
  getOrFetch: function (id) {
    var model = this.get(id);
    if (!model) {
      model = new this.model({ id: id})
      model.fetch({
        success: function () {
          this.add(model)
        }.bind(this)
      });
    } 
    return model;
  }

});
