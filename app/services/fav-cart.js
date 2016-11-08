import Ember from 'ember';

export default Ember.Service.extend({
  games: [],
  add(game) {
    console.log(this.get('games'));
    this.get('games').pushObject(game);
  },
  remove(game) {
    this.get('games').removeObject(game);
  },
  includes(game) {
    return this.get('games').includes(game);
  }
});
