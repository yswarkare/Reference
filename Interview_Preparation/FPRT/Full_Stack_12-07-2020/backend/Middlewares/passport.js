const User = require("../Models/User");
const { Strategy, ExtractJwt } = require("passport-jwt");
const { SECRET } = require("../Config/config");

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: SECRET,
}

const strategy = new Strategy(opts, async (jwt_payload, done) => {
    try {
        let user = await User.findOne({_id: jwt_payload._id});
        if(user){
            // console.log(user);
            // console.log(jwt_payload);
            return done(null, user);
        } else {
            return done(null, false);
        }
    } catch (err) {
        console.log(err);
        return done(err, false);
    }    
})

module.exports = {
    strategy
};