import Ember from 'ember';

export default Ember.Component.extend({
  favCart: Ember.inject.service(),
  isShowingModal: false,
  actions: {
    toggleModal() {
      this.toggleProperty('isShowingModal');
    }
  }
});
