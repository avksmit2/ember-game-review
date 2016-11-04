import Ember from 'ember';

export function numberReviews(params) {
  return params[0].get('reviews').get('length');
}

export default Ember.Helper.helper(numberReviews);
