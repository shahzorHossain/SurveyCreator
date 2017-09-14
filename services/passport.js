const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose')

const keys = require('../config/keys.js');

//referencing the model
const User = mongoose.model('users')

passport.serializeUser((user, done) => {
    done(null,user.id)
});

passport.deserializeUser((id,done) => {
    User.findById(id).then( (user) => {
        done(null,user)
    })
})

passport.use(new googleStrategy({
    clientID : keys.googleClientID,
    clientSecret : keys.googleClientSecret,
    callbackURL : '/auth/google/callback'
},(accessToken,refreshToken,profile,done) => {
    User.findOne({googleId: profile.id})
    .then( (existingUser ) => {
        if(existingUser){
            //a user found, not going to add
            //completes without any error, with the existing record
            done(null, existingUser)
        } else {
             //adding a new user, they must fulfill the schema
            new User({ googleId: profile.id }).save()
            .then( (user) => {
                //completes without error, with a new record
                done(null,user)
            })
        }
    })
   

})
);