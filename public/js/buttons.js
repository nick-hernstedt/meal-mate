const no = document.getElementById(`nono`);

const yes = document.getElementById(`yes`);

let j = 0;


$("#search").on("click", function (event) {
    event.preventDefault();

    var location = {
        location: $("#locationSearch")
            .val()
            .trim(),
    };

    console.log(location);

    $.ajax("/api/proxy", {
        type: "POST",
        data: location,
    }).then(function (data) {
        console.log(data);

        for (let i = 0; i < 20; i++) {
            var choices = data.businesses[i];

            $(`#name${[i]}`).text(choices.name);
            $(`#url${[i]}`).attr("href", choices.url);
            $(`#yes${[i]}`).attr("restaurant", choices.name);
            $(`#imgsrc${[i]}`).attr("src", choices.image_url);
            $(`#address${[i]}`).text(choices.location.display_address);
            $(`#number${[i]}`).text(choices.display_phone);
            $(`#reviews${[i]}`).text(choices.rating);
            switch (choices.rating) {
                case (0):
                    $(`#reviews${[i]}`).attr('src', '/images/small_0@3x.png')
                    break
                case (1):
                    $(`#reviews${[i]}`).attr('src', '/images/small_1@3x.png')
                    break
                case (1.5):
                    $(`#reviews${[i]}`).attr('src', '/images/small_1_half@3x.png')
                    break
                case (2):
                    $(`#reviews${[i]}`).attr('src', '/images/small_2@3x.png')
                    break
                case (2.5):
                    $(`#reviews${[i]}`).attr('src', '/images/small_2_half@3x.png')
                    break
                case (3):
                    $(`#reviews${[i]}`).attr('src', '/images/small_3@3x.png')
                    break
                case (3.5):
                    $(`#reviews${[i]}`).attr('src', '/images/small_3_half@3x.png')
                    break
                case (4):
                    $(`#reviews${[i]}`).attr('src', '/images/small_4@3x.png')
                    break
                case (4.5):
                    $(`#reviews${[i]}`).attr('src', '/images/small_4_half@3x.png')
                    break
                case (5):
                    $(`#reviews${[i]}`).attr('src', '/images/small_5@3x.png')
                    break

            };
        }


    });

    $(`#card${j}`).toggleClass("is-hidden");

    j += 1;

});


$(`.yes`).on("click", function () {
    event.preventDefault();

    var match = {
        name: $(this).attr("restaurant"),
    };

    console.log($(this).attr("restaurant"));

    $.ajax("/api/match", {
        type: "post",
        data: match,
    }).then((data) => {
        if (data != $(this).attr("restaurant")) {
            console.log(`yes clicked`);
            $(`#card${(j -= 1)}`).toggleClass("is-hidden");
            $(`#card${(j += 1)}`).toggleClass("is-hidden");

            j += 1;
        } else if (data == $(this).attr("restaurant")) {
            alert(`eat at ` + $(this).attr("restaurant"));
            $(`.modal`).toggleClass(`is-active`);
        }
    });
});

$(`.nono`).on("click", function () {
    event.preventDefault();

    console.log(`no clicked`);
    $(`#card${(j -= 1)}`).toggleClass("is-hidden");
    $(`#card${(j += 1)}`).toggleClass("is-hidden");

    j += 1;
});

$(`.close`).click(function () {
    location.reload();
});