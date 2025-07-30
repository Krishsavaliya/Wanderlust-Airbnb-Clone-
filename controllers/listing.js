require("dotenv").config();

const Listing = require("../models/listing");
const axios = require("axios");
const geoapifyKey = process.env.GEOAPIFY_API_KEY;

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    res.redirect("/listings");
  }
  res.render("listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res, next) => {
  try {
    const locationQuery = req.body.listings.location;
    const geocodingUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
      locationQuery
    )}&apiKey=${geoapifyKey}`;

    const response = await axios.get(geocodingUrl);

    let url = req.file.path;
    let filename = req.file.filename;
    const newListing = new Listing(req.body.listings);
    newListing.owner = req.user._id;
    newListing.image = { url, filename };

    newListing.geometry = response.data.features[0].geometry;

    let savedListing = await newListing.save();
    console.log(savedListing);
  } catch (error) {
    console.log(error);
  }

  req.flash("success", "New Listing Created!");
  res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    res.redirect("/listings");
  }

  let ogImgUrl = listing.image.url;
  ogImgUrl = ogImgUrl.replace("/upload", "/upload/w_250");

  res.render("listings/edit.ejs", { listing, ogImgUrl });
};

module.exports.updateListing = async (req, res) => {
  const { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listings });

  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }
  req.flash("success", "Listing Updated!");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
  const { id } = req.params;
  const deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  req.flash("success", "Listing Deleted!");
  res.redirect("/listings");
};
