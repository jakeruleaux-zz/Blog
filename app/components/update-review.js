import Ember from 'ember';

export default Ember.Component.extend({
  updateReviewForm: false,
actions: {
  updateReviewForm() {
    this.set('updateReviewForm', true);
  },

  update(review) {
    var params = {
      title: this.get('title'),
      venue: this.get('venue'),
      author: this.get('author'),
      article: this.get('article'),
      image: this.get('image')
    };
    this.set('updateReviewForm', false);
    this.sendAction('update', review, params);
  }
}
});
