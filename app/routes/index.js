import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('game');
  },
  actions: {
    addGame(params) {
      var newGame = this.store.createRecord('game', params);
      newGame.save();
      this.transitionTo('index');
    }
  }
});
