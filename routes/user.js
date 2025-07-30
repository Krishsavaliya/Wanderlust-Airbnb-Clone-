const express = require("express");
const router = express.Router();
const wrapAsync = require("../utiles/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");
const userController = require("../controllers/user");

router
  .route("/signup")
  .get(userController.renserSignUpForm)
  .post(wrapAsync(userController.signup));

router
  .route("/login")
  .get(userController.renserLogInForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    userController.login
  );

router.get("/logout", userController.logout);

module.exports = router;
