const express = require("express");
const router = express.Router();
const wrapAsync = require("../utiles/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listing.js");
const multer = require("multer");
const { storage } = require("../clouodConfig.js");
const upload = multer({ storage });

router
  .route("/")
  .get(wrapAsync(listingController.index)) //Index Route
  .post(
    //Create Route
    isLoggedIn,
    upload.single("listings[image]"),
    validateListing,
    wrapAsync(listingController.createListing)
  );

//New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

router
  .route("/:id")
  .get(wrapAsync(listingController.showListing)) //Show Route
  .put(
    //Update Route
    isLoggedIn,
    isOwner,
    upload.single("listings[image]"),
    validateListing,
    wrapAsync(listingController.updateListing)
  )
  .delete(
    //Delete Route
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.destroyListing)
  );

//Edit Route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm)
);

module.exports = router;
