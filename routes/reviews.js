const express=require("express");
const router=express.Router({mergeParams:true});
const Listing=require("../models/listing.js");
const Review=require("../models/review.js");
const wrapAsync=require("../utils/wrapAsync.js");
const {validateReview, isLoggedIn, isAuthor}=require("../middleware.js");
const reviewController= require("../controllers/reviews.js");
const { destroyListing } = require("../controllers/listings.js");

//review-post request
router.post("/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewController.postReview));
  
//Review-Delete route
router.delete("/:reviewId",
  isLoggedIn,
  isAuthor,
  wrapAsync(reviewController.destroyReview));

module.exports=router;