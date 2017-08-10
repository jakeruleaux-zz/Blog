import Ember from 'ember';

export default Ember.Route.extend({
  model() {
   return this.store.findAll('review');
 },
 actions: {
   saveReview(params) {
     var newReview = this.store.createRecord('review', params);
     newReview.save();
     this.transitionTo('index');
   }
 }
});
