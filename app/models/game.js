import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr('string'),
  gameName: DS.attr('string'),
  image: DS.attr(),
  releaseDate: DS.attr('date'),
  summary: DS.attr('string'),
  details: DS.attr('string'),
  timestamp: DS.attr(),
  reviews: DS.hasMany('review', {async: true})
});
