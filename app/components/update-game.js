import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  isShowingModal: false,
  actions: {
    updateGame(game) {
      var params = {
        user: this.get('user'),
        gameName: this.get('gameName'),
        image: this.get('image'),
        releaseDate: this.get('releaseDate'),
        timestamp: moment().valueOf(),
        details: this.get('details'),
        summary: this.get('summary')
      };
      this.set('isShowingModal', false);
      this.sendAction('updateGame', game, params);
    },
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    }
  }
});
