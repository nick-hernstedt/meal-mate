const no = document.getElementById(`nono`);

const yes = document.getElementById(`yes`);

// no.onclick = () => {
//     event.preventDefault()
//     console.log(`buttsnstuff`)
// }

// no.addEventListener("click", () => {
//     event.preventDefault()
//     console.log(`buttsnstuff`)
//     //find()
// })

$("#search").on("click", function(event) {
  event.preventDefault();

  var location = {
    location: $("#locationSearch")
      .val()
      .trim()
  };

  console.log(location);

  $.ajax("/api/proxy", {
    type: "POST",
    data: location
  }).then(function(data) {

    $(`#card0`).css("display: flex !important;")

    for(let i = 0; i < 20; i++){

    var choices = data.businesses[i]

    $(`#name${[i]}`).text(choices.name)
    $(`#image${[i]}`).append(choices.image_url)
    $(`#address${[i]}`).text(choices.location.display_address)
    $(`#number${[i]}`).text(choices.display_phone)
    $(`#reviews${[i]}`).text(choices.rating)

    }


    console.log(data);
  });
});


