import Ember from 'ember';

export default Ember.Component.extend({
  favCart: Ember.inject.service(),
  actions: {
    addToCart(game) {
      this.get('favCart').add(game);
    }
  }
});
