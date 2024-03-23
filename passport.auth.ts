import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import { Strategy as LocalStrategy } from 'passport-local';
import usersData from "./model/users.model.js";
// var GoogleStrategy = Google.Strategy;


passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});
//google login
passport.use(new GoogleStrategy({
  clientID: "161819643124-2cb7ah15et5g3rfs2bbmul88te83pi5d.apps.googleusercontent.com",
  clientSecret: "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",
  callbackURL: "http://localhost:3000/auth/google/callback",

},
function(accessToken, refreshToken, profile, cb) {
  console.log(profile)
  console.log(accessToken, refreshToken)
  return cb(null, profile, accessToken, refreshToken);
}
));


// facebook login

passport.use(new FacebookStrategy({
  clientID: "798999958710251",
  clientSecret: "82fb462f919380e94ea13d01a7532846",
  callbackURL: "http://localhost:3000/auth/facebook/callback",
  profileFields: ['id', 'displayName', 'photos', 'email', 'gender', 'birthday', 'location', 'friends']

},
function(accessToken, refreshToken, profile, cb) {
  console.log(profile)
  console.log(accessToken, refreshToken)
  return cb(null, profile, accessToken, refreshToken);
}
));


//local login



passport.serializeUser((user, done) => {
  done(null, user.id); // Use user ID for session (replace with appropriate identifier)
});

passport.deserializeUser(async (id, done) => {
  try {
      const user = await usersData.findById(id).exec();
      done(null, user);
  } catch (err) {
      done(err);
  }
});

// local
passport.use(new LocalStrategy(

  async (email, password, done) => {
  
      try {
        
          console.log(email, password);
          const user = await usersData.findOne({ email }); 
          console.log(user);// Find user by email
          if (!user) {
              
              return done(null, false, { message: 'Incorrect email or password.' });
          }

          if(password!=user.password){
              return done(null, false, { message: 'Incorrect email or password.' });
          }

          return done(null, user); // Successful authentication
      } catch (err) {
        debugger
          console.log(err)
          return done(err); // Handle database or other errors

      }
  }));


export default passport




