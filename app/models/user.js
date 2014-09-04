'use strict';

var bcrypt = require('bcrypt'),
    Mongo  = require('mongodb'),
    _      = require('underscore-contrib');

function User(){
}

Object.defineProperty(User, 'collection', {
  get: function(){return global.mongodb.collection('users');}
});

User.findById = function(id, cb){
  var _id = Mongo.ObjectID(id);
  User.collection.findOne({_id:_id}, function(err, obj){
    var user = Object.create(User.prototype);
    user = _.extend(user, obj);
    cb(err, user);
  });
};

User.register = function(o, cb){
  User.collection.findOne({email:o.email}, function(err, user){
    if(user){return cb();}
    o.password = bcrypt.hashSync(o.password, 10);
    o.type     = 'local';
    User.collection.save(o, cb);
  });
};

User.localAuthenticate = function(email, password, cb){
  User.collection.findOne({email:email}, function(err, user){
    if(!user){return cb();}
    var isOk = bcrypt.compareSync(password, user.password);
    if(!isOk){return cb();}
    cb(null, user);
  });
};

User.twitterAuthenticate = function(token, secret, twitter, cb){
  User.collection.findOne({twitterId:twitter.id}, function(err, user){
    if(user){return cb(null, user);}
    user = {twitterId:twitter.id, username:twitter.username, displayName:twitter.displayName, type:'twitter'};
    User.collection.save(user, cb);
  });
};

User.githubAuthenticate = function(token, secret, github, cb){
  User.collection.findOne({githubID:github.id}, function(err, user){
    if(user){return cb(null, user);}
    user = {githubId:github.id, username:github.username, displayName:github.username, type:'github'};
    User.collection.save(user, cb);
  });
};

User.googleAuthenticate = function(token, secret, google, cb){
  User.collection.findOne({googleID:google.id}, function(err, user){
    if(user){return cb(null, user);}
    user = {googleId:google.id, username:google.displayName, displayName:google.displayName, type:'google'};
    User.collection.save(user, cb);
  });
};

User.facebookAuthenticate = function(token, secret, facebook, cb){
  console.log('TOKEN', token);
  console.log('SECRET', secret);
  console.log('FACEBOOK', facebook);
  console.log('CB', cb);

  User.collection.findOne({facebookID:facebook.id}, function(err, user){
    if(user){return cb(null, user);}
    user = {facebookId:facebook.id, username:facebook.displayName, displayName:facebook.displayName, type:'facebook'};
    User.collection.save(user, cb);
  });
};

User.trelloAuthenticate = function(token, secret, trello, cb){
  console.log('TOKEN', token);
  console.log('SECRET', secret);
  console.log('TRELLO', trello);
  console.log('CB', cb);

  User.collection.findOne({trelloID:trello.id}, function(err, user){
    if(user){return cb(null, user);}
    user = {trelloId:trello.id, username:trello.displayName, displayName:trello.displayName, type:'trello'};
    User.collection.save(user, cb);
  });
};

User.prototype.update = function(body, cb){
  this.email = body.email;
  this.age   = body.age * 1;
  this.photo = body.photo;

  User.collection.save(this, cb);
};

module.exports = User;

