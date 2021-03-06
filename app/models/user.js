var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
  auth0id : String,
  username : String,
  tier : String,
  usedStorage : Number
});

userSchema.statics.saveUnique = function(user, saveUser) {
  this.count({auth0id : user.id}, function(err, count) {
    if(count == 0) saveUser(true);
    else saveUser(false);
  });
}

module.exports = mongoose.model('User', userSchema);