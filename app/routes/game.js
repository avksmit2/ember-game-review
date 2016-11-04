import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('game', params.game_id)
  },
  actions: {
    updateGame(game, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          game.set(key, params[key]);
        }
      });
      game.save();
      this.transitionTo('game', game.id);
    },
    destroyGame(game) {
      game.destroyRecord();
      this.transitionTo('index');
    }
  }
});