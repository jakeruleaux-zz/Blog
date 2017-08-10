import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
   actions: {
     updatePostForm() {
       this.set('updatePostForm', true);
     },
     update(post) {
       var params = {
         writer: this.get('writer'),
         rating: this.get('rating'),
         content: this.get('content'),
         review: this.get('review')
       };
       this.set('updatePostForm', false);
       this.sendAction('update', post, params);
     }
   }
 });
