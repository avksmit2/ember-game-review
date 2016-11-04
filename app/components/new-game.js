import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  isShowingModal: false,
  actions: {
    toggleModal() {
      this.toggleProperty('isShowingModal');
    },
    addGame() {
      var params = {
        user: this.get('user') ? this.get('user') : "",
        gameName: this.get('gameName') ? this.get('gameName') : "",
        image: this.get('image') ? this.get('image') : "https://dummyimage.com/600x400/000/fff.png&text=??",
        releaseDate: this.get('releaseDate') ? this.get('releaseDate') : "",
        details: this.get('details') ? this.get('details') : "",
        timestamp: moment().valueOf(),
      };
      this.set('isShowingModal', false);
      this.sendAction("addGame", params);
      this.set('user', "");
      this.set('gameName', "");
      this.set('image', "");
      this.set('releaseDate', "");
      this.set('details', "");
    }
  }
});
