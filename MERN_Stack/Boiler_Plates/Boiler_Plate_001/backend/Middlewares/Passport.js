const User = require("../Models/User");
const { Strategy, ExtractJwt } = require("passport-jwt");
const { SECRET } = require("../Config/Config");


var cookieExtractor = function(req) {
    var token = null;
    if (req && req.cookies)
    {
        if (req.cookies.bearerToken){
            bTokenCookie = req.cookies.bearerToken;
            bToken = bTokenCookie.split(" ");
            token = bToken[1];
        } else {
            token = req.cookies
        }
    }
    return token;
};

const opts = {
    jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
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