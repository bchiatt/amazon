'use strict';

var Mongo  = require('mongodb'),
    _      = require('underscore-contrib');

function Product(){
}

Object.defineProperty(Product, 'collection', {
  get: function(){return global.mongodb.collection('products');}
});

Product.all = function(cb){
  Product.collection.find().toArray(cb);
};

Product.findById = function(id, cb){
  var _id = Mongo.ObjectID(id);
  Product.collection.findOne({_id:_id}, function(err, obj){
    var product = Object.create(Product.prototype);
    product = _.extend(product, obj);
    cb(err, product);
  });
};

module.exports = Product;

