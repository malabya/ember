import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://live-ember-editor.pantheonsite.io',
  namespace: 'api',

  pathForType() {
    return 'articles?_format=json'
  }
});
