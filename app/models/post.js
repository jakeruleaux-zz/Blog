import DS from 'ember-data';

export default DS.Model.extend({
  writer: DS.attr(),
  rating: DS.attr(),
  content: DS.attr(),
  review: DS.belongsTo('review', { async: true })
});
