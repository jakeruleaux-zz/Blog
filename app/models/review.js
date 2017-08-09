import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  venue: DS.attr(),
  review: DS.attr(),
  author: DS.attr(),
  image: DS.attr()
});
