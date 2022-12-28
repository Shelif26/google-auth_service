import passport from "passport";
import Google_Strategy from "passport-google-oauth2";
import dotenv from "dotenv";

const GoogleStrategy = Google_Strategy.Strategy;

passport.serializeUser((user: any, done: any) => {
  done(null, user);
});

passport.deserializeUser((user: any, done: any) => {
  done(null, user);
});

// dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "423438266151-f8ej0mo34omsv9jjqp7cgnhptumk8bc0.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:4006/auth/callback",
      passReqToCallback: true,
    },
    function (
      _request: any,
      _accessToken: any,
      _refreshToken: any,
      profile: any,
      done: (arg0: null, arg1: any) => any
    ) {
      return done(null, profile);
    }
  )
);
