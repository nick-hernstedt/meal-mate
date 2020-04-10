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
    $(`#card0`).toggle("is-hidden");

    const cards = [];

    const card = loc => `
    <div class="card0 columns is-centered has-text-centered">
    <div class="column results is-one-third has-background-white">
      <div id="name0">${loc.name}</div>
      <div id="image0 is-centered"><img src="${loc.image}" alt="" /></div>
      <div id="address0">
        Address:
        <span class="italics">${loc.location}</span>
      </div>
      <div class="columns">
        <div class="column is-half" id="number0">
          Phone Number: <span class="italics">${phone}</span>
        </div>
        <div class="column is-half" id="reviews0">
          Reviews: ${rating}
        </div>
      </div>
      <div class="columns is-centered bottomIcons has-background-black">
        <div class="column has-text-centered">
          <span class="icon has-text-success">
            <a href="#" id="yes0"><i class="fas fa-heart fa-4x"></i></a>
          </span>
        </div>
        <div class="column has-text-centered">
          <span class="icon has-text-danger">
           <a href="#" id="nono"> <i class="fas fa-times-circle fa-4x" id="nono"></i></a>
          </span>
        </div>
      </div>
    </div>
  </div>
    `;

    for (let i = 0; i < 20; i++) {
      var choices = data.businesses[i];

      // $(`#name${[i]}`).text(choices.name)
      // $(`#image${[i]}`).append(choices.image_url)
      // $(`#address${[i]}`).text(choices.location.display_address)
      // $(`#number${[i]}`).text(choices.display_phone)
      // $(`#reviews${[i]}`).text(choices.rating)

      cards.push(card(data.businesses[i]));
    }

    cardsContainer.innHTML = cards.join("");
  });
});

$(`#yes0`).on("click", function() {
  event.preventDefault();

  var match = {
    name: $(`#name0`.value),
    address: $(`#address0`)
  };

  console.log(`yessir`);

  $.ajax("/api/match", {
    type: "post",
    data: match
  }).then(function(data) {
    console.log(data);
  });
});

new card(biz);

card.like();
card.next;
