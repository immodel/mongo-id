module.exports = function(model) {
  model
    .cast(function(value) {
      if(value && value.isObjectId)
        value = value.str;
      return value;
    })
    .type('ObjectID');
};