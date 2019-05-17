Survey.Survey.cssType = "bootstrap";

var json = {
  pages: [
    {
      name: "page1",
      elements: [
        { type: "text", name: "question1", title: "Name:" },
        {
          type: "dropdown",
          name: "question2",
          title:
            "I would rather live in a posh NYC high rise than 100 acres in the country",
          choices: [
            { value: "item1", text: "1 (Strongly Disagree)" },
            { value: "item2", text: "2" },
            { value: "item3", text: "3" },
            { value: "item4", text: "4" },
            { value: "item5", text: "5 (Strongly Agree)" }
          ]
        },
        {
          type: "dropdown",
          name: "question3",
          title:
            "Going outside for a run is the morning is the perfect way to start a Saturday!",
          choices: [
            { value: "item1", text: "1 (Strongly Disagree)" },
            { value: "item2", text: "2" },
            { value: "item3", text: "3" },
            { value: "item4", text: "4" },
            { value: "item5", text: "5 (Strongly Agree)" }
          ]
        },
        {
          type: "dropdown",
          name: "question4",
          title:
            "I would rather spend the whole day on the couch binging on Netflix than go for a walk.",
          choices: [
            { value: "item1", text: "1 (Strongly Disagree)" },
            { value: "item2", text: "2" },
            { value: "item3", text: "3" },
            { value: "item4", text: "4" },
            { value: "item5", text: "5 (Strongly Agree)" }
          ]
        },
        {
          type: "dropdown",
          name: "question5",
          title: "I love meeting new people; I make friends everywhere I go!",
          choices: [
            { value: "item1", text: "1 (Strongly Disagree)" },
            { value: "item2", text: "2" },
            { value: "item3", text: "3" },
            { value: "item4", text: "4" },
            { value: "item5", text: "5 (Strongly Agree)" }
          ]
        },
        {
          type: "dropdown",
          name: "question6",
          title:
            "Going to my same favorite restaurant over trying the new hotspot downtown is more my style.",
          choices: [
            { value: "item1", text: "1 (Strongly Disagree)" },
            { value: "item2", text: "2" },
            { value: "item3", text: "3" },
            { value: "item4", text: "4" },
            { value: "item5", text: "5 (Strongly Agree)" }
          ]
        },
        {
          type: "dropdown",
          name: "question7",
          title:
            "If I'm planning the trip we're going straight to the mountains, not some hot beach!.",
          choices: [
            { value: "item1", text: "1 (Strongly Disagree)" },
            { value: "item2", text: "2" },
            { value: "item3", text: "3" },
            { value: "item4", text: "4" },
            { value: "item5", text: "5 (Strongly Agree)" }
          ]
        },
        {
          "type": "imagepicker",
          "name": "question8",
          "title": "My favorite color is:",
          "choices": [
           {
            "value": "lion",
            "imageLink": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAAA1BMVEUbqPBsarW2AAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIALA8UNAAFusnLHAAAAAElFTkSuQmCC"
           },
           {
            "value": "giraffe",
            "imageLink": ""
           },
           {
            "value": "panda",
            "imageLink": ""

            "imageLink": "http://dreamicus.com/data/red/red-02.jpg"
           },
           {
            "value": "panda",
            "imageLink": "http://www.photoemporium.ca/index_htm_files/44.png"
           },
           {
            "value": "camel",
            "imageLink": ""
           },
           {
            "value": "item1",
            "imageLink": ""
           }
          ]
         },
        {
          type: "dropdown",
          name: "question9",
          title:
            "I'm always willing to try a new dish I've never had before.",
          choices: [
            { value: "item1", text: "1 (Strongly Disagree)" },
            { value: "item2", text: "2" },
            { value: "item3", text: "3" },
            { value: "item4", text: "4" },
            { value: "item5", text: "5 (Strongly Agree)" }
          ]
        },
        {
          type: "dropdown",
          name: "question10",
          title:
            "A wild adventure to a place I've never been sounds like my dream vacation!",
          choices: [
            { value: "item1", text: "1 (Strongly Disagree)" },
            { value: "item2", text: "2" },
            { value: "item3", text: "3" },
            { value: "item4", text: "4" },
            { value: "item5", text: "5 (Strongly Agree)" }
          ]
        },
      ]
    }
  ]
};

window.survey = new Survey.Model(json);

survey.onComplete.add(function(result) {
  document.querySelector("#surveyResult").innerHTML =
    "result: " + JSON.stringify(result.data);
});

$("#surveyElement").Survey({ model: survey });