'use strict';

var config = {};

config.twitter = {
  apiKey      : '4O91dyHHeu89I4SnddK9c9wLE',
  apiSecret   : process.env.TWITTER_SECRET,
  callbackUrl : 'http://brian-vm.com:3333/auth/twitter/callback'
};

config.github = {
  clientId     : '24c59daefb52b0c6573e',
  clientSecret : process.env.GITHUB_SECRET,
  callbackUrl  : 'http://brian-vm.com:3333/auth/github/callback'
};

config.google = {
  clientId     : '566015469244-k8ds8hk56vbkg9jrs1gb7im3k1r0rfbn.apps.googleusercontent.com',
  clientSecret : process.env.GOOGLE_SECRET,
  callbackUrl  : 'http://brian-vm.com:3333/auth/google/callback'
};

config.facebook = {
  clientId     : '695019767255173',
  clientSecret : process.env.FACEBOOK_SECRET,
  callbackUrl  : 'http://brian-vm.com:3333/auth/facebook/callback'
};

config.trello = {
  clientId     : 'f0a11979a800081588bc6a96508212f7',
  clientSecret : process.env.TRELLO_SECRET,
  callbackUrl  : 'http://brian-vm.com:3333/auth/trello/callback'
};

config.stripe = {
  publishKey : 'pk_test_UKMfyVX6ix2ImBTaTpDqASgl',
  secretKey  : process.env.STRIPE_SECRET
};

module.exports = config;
