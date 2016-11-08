import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateReview(review, params) {
      this.sendAction('updateReview', review, params);
    },
    destroyReview(review) {
      if (confirm ('Are you sure you want to delete this review?')) {
        this.sendAction('destroyReview', review);
      }
    }
  }
});
