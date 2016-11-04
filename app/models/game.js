import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  releaseDate: DS.attr('date'),
  details: DS.attr('string'),
  reviews: DS.hasMany('review', {async: true})
});
