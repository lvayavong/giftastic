
        var superHeroes = ["Captain America", "The Question", "Superman", "Thor"];


        function displaySuperInfo() {
        //
          var superHero = $(this).attr("data-name");
          var queryURL = "http://api.giphy.com/v1/gifs/search?api_key=rWHLYQCohxeslKwk1BVmLYSWs8L6vLkK&q=" + superHero + "&limit=5&offset=0&rating=G&lang=en";
          // var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=rWHLYQCohxeslKwk1BVmLYSWs8L6vLkK&limit=5");
          // xhr.done(function(data) { console.log("success got data", data); });
        // }
          // Creating an AJAX call for the specific movie button being clicked
          $.ajax({
            url: queryURL,
            method: "GET"
          }).done(function(data){
        //     {
        //     console.log("success got data", data); };
        //   });
        // };

            var superHeroDiv = $("<div class='superHero'>");


            var rating = data.rating;


            var pOne = $("<p>").text("Rating: " + rating);


            superHeroDiv.append(pOne);


            var url = data.url;


            var pTwo = $("<p>").text("URL: " + url);


            superHeroDiv.append(pTwo);


            var imgURL = data.Poster;


            var image = $("<img>").attr("src", imgURL);


            superHeroDiv.append(image);


            $("#superheroes-view").prepend(superHeroDiv);
          });

        }


        function renderButtons() {


          $("#buttons-view").empty();


          for (var i = 0; i < superHeroes.length; i++) {


            var a = $("<button>");

            a.addClass("superhero");

            a.attr("data-name", superHeroes[i]);

            a.text(superHeroes[i]);

            $("#superheroes-view").append(a);
          }
        }


        $("#add-superhero").on("click", function(event) {
          event.preventDefault();

          var superHero = $("#superhero-input").val().trim();


          superHeroes.push(superHero);


          renderButtons();
        });


        $(document).on("click", ".superHero", displaySuperInfo);


        renderButtons();