
$("#submitButton").on("click", function (event) {
    event.preventDefault();

    // var surveyData = {
    //     name: $("#name").val().trim(),

    //     scores:
    //         [
    //             $("#num1").val(),
    //             $("#num2").val(),
    //             $("#num3").val(),
    //             $("#num4").val(),
    //             $("#num5").val(),
    //             $("#num6").val(),
    //             $("#num7").val(),
    //             $("#num8").val(),
    //             $("#num9").val(),
    //             $("#num10").val()
    //         ]
    // };

    //Use getValue to get the value of the question
    survey.getValue('question1');
    //Use data property to get/set survey data as json
    survey.data = { "youquestion1": value1, "youquestionN": valueN };
    //Use onValueChanged event to get a notification on changing question value.
    survey.onValueChanged.add(function (sender, options) {
        var mySurvey = sender;
        var questionName = options.name;
        var newValue = options.value;
    });

    //Use onComplete to get survey.data to pass it to the server.
    survey.onComplete.add(function (sender) {
        var mySurvey = sender;
        var surveyData = sender.data;
    });

    console.log("surveyData: " + JSON.stringify(surveyData));

    // Compare scores:
    console.log(surveyData)
    $.post("/api/pets/submit", surveyData)
        .then(function (res) {
            console.log(res);
            console.log("res.id", res.id);
            console.log("res.species", res.species);

            $("#best-friend-alert").text("Your Spirit Animal has been identified as a " + res.species + "!")
            $("#best-friend-image").attr("src", res.img);
            $("#best-friend-image").attr("width", 450);
            var lcaseSpecies = res.species.toLowerCase();
            $("#close-button").attr("href", "/all#" + lcaseSpecies);
        });
})

$("#modal-close").on("click", function (event) {
    event.preventDefault();

    // window.scrollTo(0, 0);
    // location.reload();

    console.log("closing modal!")
});