Hull.widget('instant_win_admin', {
  templates: ['instant_admin'],

  initialize: function() {

  },

  findAll: function() {
    return this.api('hull/app/achievements');
  },

  create: function(name, description) {
    return this.api('hull/app/achievements', 'post', {
      'type': 'instant_win',
      'name': name,
      'description': description
    });
  },

  addPrize: function(id, data) {
    return this.api('hull/' + id + '/prizes', 'post', data);
  },

  replacePrizes: function(id, data) {
    return this.api('hull/' + id + '/prizes', 'put', data);
  }
});
