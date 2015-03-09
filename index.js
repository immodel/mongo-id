var objectid = require('objectid');

module.exports = function() {
  this.type('ObjectID', function() {
    return this
      .caster(function(value) {
        if(value && objectid.isValid(value))
          value = objectid.toString(value);
        return value;
      })
      .validator(function() {
        return objectid.isValid(this.value);
      }, 'ObjectID');
  });
};