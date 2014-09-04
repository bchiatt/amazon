'use strict';

var GithubStategy = require('passport-github').Strategy,
    User          = require('../../models/user'),
    config        = require('../../../../../../config'),
    github        = new GithubStategy(
                    {
                      clientID:     config.github.clientId,
                      clientSecret: config.github.clientSecret,
                      callbackURL:  config.github.callbackUrl
                    },
                    User.githubAuthenticate);

module.exports = github;
