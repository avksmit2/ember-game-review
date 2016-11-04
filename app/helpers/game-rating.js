import Ember from 'ember';

export function gameRating(params) {
  var ratings = parseInt(params)
  if (!isNaN(ratings)) {
    if (ratings === 5) {
      var totThumbs =   Ember.String.htmlSafe('<span class="glyphicon glyphicon-thumbs-up"><span class="glyphicon glyphicon-thumbs-up"><span class="glyphicon glyphicon-thumbs-up"><span class="glyphicon glyphicon-thumbs-up"><span class="glyphicon glyphicon-thumbs-up">')
    } else if (ratings === 4) {
      totThumbs =   Ember.String.htmlSafe('<span class="glyphicon glyphicon-thumbs-up"><span class="glyphicon glyphicon-thumbs-up"><span class="glyphicon glyphicon-thumbs-up"><span class="glyphicon glyphicon-thumbs-up">')
    } else if (ratings === 3) {
      totThumbs =   Ember.String.htmlSafe('<span class="glyphicon glyphicon-thumbs-up"><span class="glyphicon glyphicon-thumbs-up"><span class="glyphicon glyphicon-thumbs-up">')
    } else if (ratings === 2) {
      totThumbs =   Ember.String.htmlSafe('<span class="glyphicon glyphicon-thumbs-up"><span class="glyphicon glyphicon-thumbs-up">')
    } else {
      totThumbs =   Ember.String.htmlSafe('<span class="glyphicon glyphicon-thumbs-up">')
    }
    return totThumbs;
  }
}

export default Ember.Helper.helper(gameRating);
