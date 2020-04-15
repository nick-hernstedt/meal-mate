// create a variable equal to zero
let j = 0;
//handles the search function on click
$("#search").on("click", function(event) {
  event.preventDefault();
  // creates a location variable to be passed to the back end
  var location = {
    location: $("#locationSearch")
      .val()
      .trim(),
  };

  console.log(location);
//posts information to the back end
  $.ajax("/api/proxy", {
    type: "POST",
    data: location,
  }).then(function(data) {
    console.log(data);
    // creates a loop that goes through information recieved from the back end and renders cards
    for (let i = 0; i < 20; i++) {
      var choices = data.businesses[i];

      $(`#name${[i]}`).text(choices.name);
      $(`#url${[i]}`).attr("href", choices.url);
      $(`#yes${[i]}`).attr("restaurant", choices.name);
      $(`#imgsrc${[i]}`).attr("src", choices.image_url);
      $(`#address${[i]}`).text(choices.location.display_address);
      $(`#number${[i]}`).text(choices.display_phone);
      $(`#reviews${[i]}`).text(choices.rating);
      //checks and sees what star card we should be displaying
      switch (choices.rating) {
        case 0:
          $(`#reviews${[i]}`).attr("src", "/images/small_0@3x.png");
          break;
        case 1:
          $(`#reviews${[i]}`).attr("src", "/images/small_1@3x.png");
          break;
        case 1.5:
          $(`#reviews${[i]}`).attr("src", "/images/small_1_half@3x.png");
          break;
        case 2:
          $(`#reviews${[i]}`).attr("src", "/images/small_2@3x.png");
          break;
        case 2.5:
          $(`#reviews${[i]}`).attr("src", "/images/small_2_half@3x.png");
          break;
        case 3:
          $(`#reviews${[i]}`).attr("src", "/images/small_3@3x.png");
          break;
        case 3.5:
          $(`#reviews${[i]}`).attr("src", "/images/small_3_half@3x.png");
          break;
        case 4:
          $(`#reviews${[i]}`).attr("src", "/images/small_4@3x.png");
          break;
        case 4.5:
          $(`#reviews${[i]}`).attr("src", "/images/small_4_half@3x.png");
          break;
        case 5:
          $(`#reviews${[i]}`).attr("src", "/images/small_5@3x.png");
          break;
      }
    }
  });
  // shows the first card
  $(`#card${j}`).toggleClass("is-hidden");

  //incrimants j for future use
  j + 1;
});

// handles yes button click
$(`.yes`).on("click", function() {
  event.preventDefault();
// creates a match variable to pass to the back end and compare in the db
  var match = {
    name: $(this).attr("restaurant"),
  };

  console.log($(this).attr("restaurant"));
// posts the match variable to the back end
  $.ajax("/api/match", {
    type: "post",
    data: match,
  }).then((data) => {
    // checks to see if a match has been made
    if (data != $(this).attr("restaurant")) {
      console.log(`yes clicked`);
      // hides current card and shows next card
      $(`#card${(j -= 1)}`).toggleClass("is-hidden");
      $(`#card${(j += 1)}`).toggleClass("is-hidden");

      j += 1;
      //calls on match
    } else if (data == $(this).attr("restaurant")) {
      $(`.modal`).toggleClass(`is-active`);
    }
  });
});
// handles no button click
$(`.nono`).on("click", function() {
  event.preventDefault();

  console.log(`no clicked`);
  //hides current card and shows next card
  $(`#card${(j -= 1)}`).toggleClass("is-hidden");
  $(`#card${(j += 1)}`).toggleClass("is-hidden");

  j += 1;
});
// refreshes page once the modal button has been clicked
$(`.close`).click(function() {
  location.reload();
});
