var express = require("express");

var router = express.Router();
var db = require("../models");
const axios = require("axios");
require("dotenv").config();

const resturant = require("../models/resturant");

const key = process.env.API_KEY;

// router.post("/api/proxy", function(req, res) {
//   console.log(`yes`);
//   axios
//     .get(
//       `https://api.yelp.com/v3/businesses/search?term=food&location=${req.body.location}`,
//       {
//         headers: {
//           Authorization: `Bearer ${key}`
//         },
//         responseType: `json`
//       }
//     )
//     .then(answer => {
//       console.log(answer.data);
//       return res.json(answer.data);
//     });
// });

router.get("/main", function(req, res) {
  res.render("index", req.user);
});

router.post("/api/match", function(req, res) {
  console.log(req.body.name);

  db.Resturant.create({
    name: req.body.name
  }).then(console.log(req.body.name));
});

router.post("/api/proxy", (req, res) => {
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
    .then(results => {
      console.log(results.data);
      res.render("index", {
        data: results.data
      });
    })
    .catch(err => {
      console.log(err);
    });
});


router.get("/main", function (req, res) {
  res.render("index", req.user);
});

router.post("/api/match", function (req, res) {
  console.log(req.body.name)

  db.Resturant.create({
    name: req.body.name,
  }).catch( err =>{
    res.send(req.body.name)
  })
});

module.exports = router;
