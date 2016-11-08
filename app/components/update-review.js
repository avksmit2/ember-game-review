import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  isShowingModal: false,
  actions: {
    updateReview(review) {
      var params = {
        user: this.get('user'),
        rating: this.get('rating'),
        comments: this.get('comments'),
        timestamp: moment().valueOf()
      };
      this.set('isShowingModal', false);
      this.sendAction('updateReview', review, params);
    },
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    }
  }
});
