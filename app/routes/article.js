import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
      return this.store.findRecord('review', params.review_id)
},

  actions: {
  savePost(params) {
     var newPost = this.store.createRecord('post', params);
     var review = params.review;
     review.get('posts').addObject(newPost);
     newPost.save().then(function() {
       return review.save();
     });
     this.transitionTo('article', review);
   },

   update(post, params) {
     Object.keys(params).forEach(function(key) {
       if(params[key]!==undefined) {
         post.set(key,params[key]);
       }
     });
     post.save();
     this.transitionTo('article');
   },

   destroyReview(review) {
    var post_deletions = post.get('posts').map(function(post) {
      return post.destroyRecord();
    });
    Ember.RSVP.all(post_deletions).then(function() {
      return post.destroyRecord();
    });
    this.transitionTo('article');
  },

    destroyPost(post) {
      post.destroyRecord();
      this.transitionTo('article');
    }
  }
});
