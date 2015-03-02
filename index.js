var objectid = require('objectid');

module.exports = function(model) {
  model
    .caster(function(value) {
      if(value && objectid.isValid(value))
        value = objectid.toString(value);
      return value;
    })
    .validator(objectid.isValid, 'ObjectID')
    .on('init', function(evt) {
      evt.doc.doc = evt.doc.doc || objectid();
    })
    .type('ObjectID');
};