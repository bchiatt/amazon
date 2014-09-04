'use strict';

var TwitterStategy   = require('passport-twitter').Strategy,
    User             = require('../../models/user'),
    config           = require('../../../config.js'),
    twitter          = new TwitterStategy(
                       {
                         consumerKey:     config.twitter.apiKey,
                         consumerSecret: config.twitter.apiSecret,
                         callbackURL:    config.twitter.callbackUrl
                       },
                       User.twitterAuthenticate);

module.exports = twitter;
