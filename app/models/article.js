import DS from 'ember-data';

const {attr} = DS;

export default DS.Model.extend({
  title: attr('string'),
  summary: attr('string'),
  image: attr('string'),
  created: attr('string'),
  category: attr(),
  author: attr()
});
