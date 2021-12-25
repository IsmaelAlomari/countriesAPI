const Country = require("../models/Country");
const axios = require("axios");

const instance = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

exports.fetchAllCountries = async (req, res, next) => {
  try {
    const result = await instance.get("/all");
    const countries = result.data.map((country) => {
      const dataMap = {};
      dataMap.name = {
        common: country.name.common,
        official: country.name.official,
      };
      dataMap.cca2 = country.cca2;
      dataMap.ccn3 = country.ccn3;
      dataMap.cca3 = country.cca3;
      dataMap.currencies = [];
      for (const key in country.currencies)
        dataMap.currencies.push({
          code: key,
          name: country.currencies[key].name,
        });
      dataMap.region = country.region;
      dataMap.languages = [];
      for (const key in country.languages)
        dataMap.languages.push({ code: key, name: country.languages[key] });
      dataMap.location = {
        latitude: country.latlng[0],
        longitude: country.latlng[1],
      };
      return dataMap;
    });
    await Country.create(countries);
    res.json(countries);
  } catch (error) {
    next(error);
  }
};

exports.searchCountry = async (req, res, next) => {
  try {
    const { cca2, ccn3, cca3, name } = req.body;
    const query = {};
    if (name)
      query.$or = [
        {
          "name.common": { $regex: new RegExp(name, "i") },
        },
        {
          "name.official": { $regex: new RegExp(name, "i") },
        },
      ];
    if (cca2) query.cca2 = cca2;
    if (ccn3) query.ccn3 = ccn3;
    if (cca3) query.cca3 = cca3;

    const result = await Country.find(query);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

exports.countryCurrencyByCca2 = async (req, res, next) => {
  try {
    const { cca2 } = req.params;

    const result = await Country.findOne({ cca2 });
    res.json(result.currencies);
  } catch (error) {
    next(error);
  }
};

exports.countryGroup = async (req, res, next) => {
  try {
    const { type, key } = req.params;

    const countries = await Country.find();
    const countriesGroup = {};
    countries.forEach((country) => {
      if (type === "region") {
        if (countriesGroup[country.region])
          countriesGroup[country.region].push(country);
        else countriesGroup[country.region] = [country];
      } else if (type === "language") {
        country.languages.forEach((language) => {
          if (countriesGroup[language.name])
            countriesGroup[language.name].push(country);
          else countriesGroup[language.name] = [country];
        });
      }
    });
    res.json(key ? countriesGroup[key] : countriesGroup);
  } catch (error) {
    next(error);
  }
};
