const JwtStrategy = require('passport-jwt').Strategy;
const ExtractSJwt = require('passport-jwt').ExtractJwt;

const AdminUser = require('../models/adminUser');
const config = require('./database');

module.exports = function(passport) {
    let opts = {};
    opts.jwtFromRequest = ExtractSJwt.fromAuthHeaderWithScheme('jwt');
    opts.secretOrKey = config.secret;

    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        AdminUser.getAdminUserId(jwt_payload._id, (err,user) => {
            if(err) {
                return done(err, false);
            }
            if(user){
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    }))
}