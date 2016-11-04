import Ember from 'ember';

export default Ember.Component.extend({
  reviewHeading: Ember.computed('review.user', 'review.timestamp', function() {
    return 'posted by: ' + this.get('review.user') + ' ' moment(this.get('review.timestamp').fromNow());
  })
});
