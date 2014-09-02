'use strict';

exports.locals = function(req, res, next){
  res.locals.user  = req.user;
  res.locals.flash = req.session.flash || {};
  next();
};

exports.bounce = function(req, res, next){
  if(res.locals.user){
    next();
  }else{
    res.redirect('/login');
  }
};

