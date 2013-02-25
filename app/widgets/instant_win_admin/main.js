Hull.widget('instant_win_admin', {
  templates: ['instant_admin'],

  datasources: {
    achievements: function() {
      return this.api('hull/app/achievements', {
        where: { _type: 'InstantWin' }
      });
    }
  },

  afterRender: function() {
    this.$achievementsSelector = $('#hull-achievement-id');
    this.$prizesArea = $('#hull-prizes-json');

    var self = this;
    this.$achievementsSelector.on('change', _.bind(function() {
      var id = self.$achievementsSelector.val();
      self.api('hull/' + id + '/prizes').then(function(res) {
        self.$prizesArea.val(JSON.stringify({ prizes: res }, null, 2));
      });
    }, this));
  },

  actions: {
    create: function(source, e) {
      e.preventDefault();

      this.api('hull/app/achievements', 'post', {
        'type': 'instant_win',
        'name': $('#hull-instant-name').val(),
        'description': $('#hull-instant-description').val()
      }).then(_.bind(function(res) {
        alert('Instant Win Created');
        this.refresh();
      }, this));
    },

    replacePrizes: function(source, e) {
      e.preventDefault();

      var id = this.$achievementsSelector.val();
      try {
        var prizes = $.parseJSON(this.$prizesArea.val());
        this.api('hull/' + id + '/prizes', 'put', prizes).then(function() {
          alert('Prizes updated');
        });
      } catch (error) {
        alert('Invalid json');
      }
    }
  }
});
