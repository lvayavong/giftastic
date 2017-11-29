var superHeroes = ["CaptainAmerica", "TheQuestion", "Superman", "Thor"];


function displaySuperInfo() {
  //
  var superHero = $(this).attr("data-name");
  var queryURL = "http://api.giphy.com/v1/gifs/search?api_key=rWHLYQCohxeslKwk1BVmLYSWs8L6vLkK&q=" + superHero + "&limit=5&rating=G&lang=en";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {

    var results = response.data
    for (var i = 0; i < results.length; i++) {


      var superHeroDiv = $("<div class='superHero'>");


      var rating = response.rating;


      var pOne = $("<p>").text("Rating: " + results[i].rating);


      superHeroDiv.append(pOne);


      var url = response.url;


      var pTwo = $("<p>").text("URL: " + results[i].url);


      superHeroDiv.append(pTwo);


      var imgURL = response.images;


      var image = $("<img>").attr("src", results[i].images.fixed_height.url);


      superHeroDiv.append(image);


      $("#superheroes-view").append(superHeroDiv);
    }


  });
}



function renderButtons() {


  $("#buttons-view").empty();


  for (var i = 0; i < superHeroes.length; i++) {


    var a = $("<button>");

    a.addClass("superhero");

    a.attr("data-name", superHeroes[i]);

    a.text(superHeroes[i]);

    $("#buttons-view").append(a);
  }
}


$("#add-superhero").click(function(event) {
  event.preventDefault();

  var superHero = $("#superhero-input").val().trim();


  superHeroes.push(superHero);


  renderButtons();
});


$(document).click(".superHero", displaySuperInfo);


renderButtons();

$(".gif").on("click", function() {

  var state = $(this).attr("data-state");

  if (state === "still") {
    $(this).attr("<img>", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("<img>", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
});
