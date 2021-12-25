const router = require("express").Router();
const {
  fetchAllCountries,
  searchCountry,
  countryCodeByCca2,
  countryGroup,
} = require("../controllers/countryController");

router.get("/countries", fetchAllCountries);

router.post("/search", searchCountry);
router.get("/countryCode/:cca2", countryCodeByCca2);
router.get("/group/:type/:key?", countryGroup);

module.exports = router;
