var express = require("express");

var router = express.Router();

const axios = require("axios");
require("dotenv").config();

const key = process.env.API_KEY;

router.post("/api/proxy", function(req, res) {
  console.log(`yes`);
  axios
    .get(
      `https://api.yelp.com/v3/businesses/search?term=food&location=${req.body.location}`,
      {
        headers: {
          Authorization: `Bearer ${key}`
        },
        responseType: `json`
      }
    )
    .then(answer => {
      console.log(answer.data);
      return res.json(answer.data);
    });
});

router.get("/main", function(req, res) {
  res.render("index", req.user);
});

router.put("/api/match/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);
});

module.exports = router;
