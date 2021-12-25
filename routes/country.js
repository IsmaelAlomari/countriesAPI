const router = require("express").Router();
const {
  fetchAllCountries,
  searchCountry,
  countryCurrencyByCca2,
  countryGroup,
} = require("../controllers/countryController");

router.get("/countries", fetchAllCountries);
router.post("/search", searchCountry);
router.get("/countryCurrencies/:cca2", countryCurrencyByCca2);
router.get("/group/:type/:key?", countryGroup);

module.exports = router;
