var objectid = require('objectid');

module.exports = function(model) {
  model
    .caster(function(value) {
      if(value && objectid.isValid(value))
        value = objectid.toString(value);
      return value;
    })
    .get(function(value) {
      return value && value.toString();
    })
    .validator(objectid.isValid, 'ObjectID')
    .type('ObjectID');
};