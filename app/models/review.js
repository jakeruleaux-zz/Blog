import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  venue: DS.attr(),
  article: DS.attr(),
  author: DS.attr(),
  image: DS.attr(),
  posts: DS.hasMany('post', { async: true })
});
