import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr('string'),
  timestamp: DS.attr(),
  rating: DS.attr('number'),
  comments: DS.attr('string'),
  game: DS.belongsTo('game', {async: true})
});
