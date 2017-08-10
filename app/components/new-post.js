import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },
    savePost() {
     var params = {
       writer: this.get('writer'),
       rating: this.get('rating'),
       content: this.get('content'),
       review: this.get('review')
     };
     this.set('addNewPost', false);
     this.sendAction('savePost', params);
   }
  }
});
