
$("#submitButton").on("click", function (event) {
    event.preventDefault();

    var surveyData = {
        name: $("#name").val().trim(),
        
        scores: 
        [
            $("#num1").val(),
            $("#num2").val(),
            $("#num3").val(),
            $("#num4").val(),
            $("#num5").val(),
            // $("#num6").val(),
            // $("#num7").val(),
            // $("#num8").val(),
            // $("#num9").val(),
            // $("#num10").val()
        ]
    };

    console.log("surveyData: " + JSON.stringify(surveyData));

    // Compare scores:
    console.log(surveyData)
    $.post("/api/pets/submit", surveyData)
        .then(function(res) {
          console.log("res.body", res.body);
          console.log("res.name", res.species_name);
          
          $("#best-friend-alert").text("Your new best friend has been identified as " + res.pet_name + "!")
          $("#best-friend-image").attr("src", res.img);
          $("#best-friend-image").attr("width", 450);
                    
    });
})

$("#modal-close").on("click", function (event) {
    event.preventDefault();
    
    window.scrollTo(0, 0);
    location.reload();
    
    console.log("closing modal!")
});