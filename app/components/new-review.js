import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  isShowingModal: false,
  actions: {
    toggleModal() {
      this.toggleProperty('isShowingModal');
    },
    addListing() {
      var params = {
        user: this.get('user') ? this.get('user') : "",
        rating: this.get('rating') ? this.get('rating') : "",
        comments: this.get('comments') ? this.get('comments') : "",
        timestamp: moment().valueOf(),
        game: this.get('game')
      };
      this.set('isShowingModal', false);
      this.sendAction("addListing", params);
      this.set('user', "");
      this.set('rating', "");
      this.set('comments', "");
    }
  }
});
