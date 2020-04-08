var express = require("express");

var router = express.Router();


const axios = require("axios");
require("dotenv").config();

const key = process.env.API_KEY;

let i = 0




  
  router.get("/", function(req, res) {
    console.log(`yes`)
    axios
      .get(
        `https://api.yelp.com/v3/businesses/search?term=food&location=sacramento`,
        {
          headers: {
            Authorization: `Bearer ${key}`
          },
          responseType: `json`
        }
      ) 
      .then( (answer) => {
        const restaurant = {
          name: answer.data.businesses[i].name,
          image: answer.data.businesses[i].image_url,
          location: answer.data.businesses[i].location.display_address,
          phone: answer.data.businesses[i].display_phone,
          rating: answer.data.businesses[i].rating
        }
        console.log(restaurant)
            
        res.render("index", restaurant)

        i += 1
      });

    })

  



router.post("/api/:input", function (req, res) {

  const input = req.params.input

  console.log(input)

  axios
      .get(
        `https://api.yelp.com/v3/businesses/search?term=food&location=${input}`,
        {
          headers: {
            Authorization: `Bearer ${key}`
          },
          responseType: `json`
        }
      ) 
      .then( (answer) => {
        const restaurant = {
          name: answer.data.businesses[i].name,
          image: answer.data.businesses[i].image_url,
          location: answer.data.businesses[i].location.display_address,
          phone: answer.data.businesses[i].display_phone,
          rating: answer.data.businesses[i].rating
        }
        console.log(restaurant)
            
        res.render("index", restaurant)

        i += 1
      });
});

router.put("/api/match/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);
});

module.exports = router;
