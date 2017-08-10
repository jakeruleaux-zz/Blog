import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
   return Ember.RSVP.hash({
   reviews: this.store.findRecord('review', params.review_id),
   posts: this.store.findAll('post')
});
},
  actions: {
savePost(params) {
     var newPost = this.store.createRecord('post', params);
     newPost.save();
     this.transitionTo('article');
   }
 }
});
