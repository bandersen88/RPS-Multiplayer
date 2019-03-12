    var config = {
      apiKey: "AIzaSyCwqRBTXjqoSuBRtOf8Qri4b2eR5m_HEE0",
      authDomain: "click-counter-ee196.firebaseapp.com",
      databaseURL: "https://click-counter-ee196.firebaseio.com",
      projectId: "click-counter-ee196",
      storageBucket: "click-counter-ee196.appspot.com",
      messagingSenderId: "1048340335635"
    };

    firebase.initializeApp(config);

   


    //initialize that database and the clickCounter variable
    //TODO initialize all variables
    var database = firebase.database();
    var clickCounter = 10;

    database.ref().set({
        clickCount: clickCounter
    });

    //***TODO need to know how to connect variables to connections */

    //TODO game starts if and only if 2 concurrent connections exist to the db
        //1 connection will show a screen of waiting for opponent to join
        //3rd attempted connnection will be told the game is full

    //TODO log each person choice and tell both what the outcome was






    // reference code

    // $("#click-button").on("click", function() {
    //   clickCounter--;
    //   database.ref().set({
    //     clickCount: clickCounter
    //   });
    //   if(clickCounter === 0) {
    // $("body").append('<iframe src="https://giphy.com/embed/26tOZ42Mg6pbTUPHW" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/26tOZ42Mg6pbTUPHW">via GIPHY</a></p>')
    // }
    // });


    // database.ref().on("value", function(snapshot) {
    //   console.log(snapshot.val());
    //   $("#click-value").text(snapshot.val().clickCount);
    //   clickCounter = snapshot.val().clickCount;
    // }, function(errorObject) {
    //   console.log("The read failed: " + errorObject.code);
    // });

