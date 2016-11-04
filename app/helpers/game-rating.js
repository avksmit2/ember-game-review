import Ember from 'ember';

export function gameRating(params) {
 return params[0].get('reviews').get('length');
}

export default Ember.Helper.helper(gameRating);
