import DS from 'ember-data';

export default DS.Model.extend({
  postDate: DS.attr(),
  rating: DS.attr('number'),
  comments: DS.attr('string'),
  game: DS.belongsTo('game', {async: true})
});
