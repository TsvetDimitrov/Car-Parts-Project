const express = require('express');
const cors = require('cors');
const facebookStrategy = require('passport-facebook').Strategy;
const passport = require('passport');

const { PORT, FB_LOGIN } = require('./config/constants');
const databaseConfig = require('./config/database');
const routesConfig = require('./config/routes');
const expressConfig = require('./config/express');

start();
async function start() {
    const app = express();
    await databaseConfig(app);
    app.use(express.json());
    expressConfig(app);

    //Can use cors library instead of that.
    app.use(cors());

    passport.serializeUser(function (user, done) {
        console.log('serializeUser: ' + user._id);
        done(null, user._id);
    });
    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            console.log(user);
            if (!err) done(null, user);
            else done(err, null);
        });
    });

    passport.use(new facebookStrategy({
        clientID: FB_LOGIN.facebook_api_key,
        clientSecret: FB_LOGIN.facebook_api_secret,
        callbackURL: "http://localhost:3030/auth/facebook/callback"
    },
        function (accessToken, refreshToken, profile, cb) {
            console.log('HERE MUTHAFUCKA')
            User.findOrCreate({ facebookId: profile.id }, function (err, user) {
                if (err) { return cb(err); }
                cb(null, user);
            });
        }
    ));
    
    app.get('/', (req, res) => {
        res.json({ text: 'It\'s working!' });
    });

    routesConfig(app);

    app.listen(PORT, () => console.log(`App started at http://localhost:${PORT}`));
}
