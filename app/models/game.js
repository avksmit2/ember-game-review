import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr('string'),
  gameName: DS.attr('string'),
  image: DS.attr(),
  releaseDate: DS.attr(),
  summary: DS.attr('string'),
  details: DS.attr('string'),
  timestamp: DS.attr(),
  reviews: DS.hasMany('review', {async: true}),
  ratings: Ember.computed.mapBy('reviews', 'rating'),
  totalRatings: Ember.computed.sum('ratings'),
  avgRatings: Ember.computed('totalRatings', 'ratings.length', function() {
    return Math.round(this.get('totalRatings') / this.get('ratings.length'));
  })
});
