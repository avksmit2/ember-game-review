import Ember from 'ember';

export default Ember.Component.extend({
  gameHeading: Ember.computed('game.gameName', 'game.releaseDate', function() {
    return this.get('game.gameName') + ', released on: ' + this.get('game.releaseDate');
  }),
  reviewNumber: Ember.computed('game.reviews', function() {
    return this.get('game.reviews').get('length');
  }),
  actions: {
    destroyGame(game) {
      if (confirm ('Are you sure youw ant to delete this game?')) {
        this.sendAction('destroyGame', game);
      }
    },
    updateGame(game, params) {
      this.sendAction('updateGame', game, params);
    },
    addReview(params) {
      this.sendAction('addReview', params);
    }
  }
});
