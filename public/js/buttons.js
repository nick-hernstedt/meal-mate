
const no = document.getElementById(`nono`)

const yes = document.getElementById(`yes`)

// no.onclick = () => {
//     event.preventDefault()
//     console.log(`buttsnstuff`)
// }

// no.addEventListener("click", () => {
//     event.preventDefault()
//     console.log(`buttsnstuff`)
//     //find()
// })  

$("#search").on("click", function (event) {

    event.preventDefault();

    console.log(`baby butter`)
     
    var location = {
        location: $("#locationSearch").val().trim(),
      };
 
    console.log(location)


    $.ajax("/api/location", {
        type: "POST",
        data: location
    }).then(
        function () {
            console.log("butternutsquash");

            find()
        } 
    );
});