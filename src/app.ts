import express from "express";
import passport from "passport";
import cookieSession from "cookie-session";

const app = express();

require("./passport");

app.use(
  cookieSession({
    name: "google-auth-session",
    keys: ["key1", "key2"],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("<button><a href='/auth'>Login With Google</a></button>");
});

app.get(
  "/auth",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/auth/callback",
  passport.authenticate("google", {
    successRedirect: "/auth/callback/success",
    failureRedirect: "/auth/callback/failure",
  })
);

app.get("/auth/callback/success", (req, res) => {
  if (!req.user) res.redirect("/auth/callback/failure");
  res.send(`Welcome ${JSON.stringify(req.user)}`);
});

app.get("/auth/callback/failure", (req, res) => {
  res.send("Error");
});

app.listen(4006, () => {
  console.log("--------Server connected Successfully---------");
});
