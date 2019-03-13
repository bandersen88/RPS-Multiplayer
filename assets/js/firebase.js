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
    //clears past data
    // database.ref().remove();
  
    var move = "";
    var text = "newText";

    // database.ref("texts").push({
    //     text: text
    // });

    // database.ref().orderByChild("dateAdded").on("child_added", function(childSnapshot) { });
    
    database.ref("texts").limitToLast(5).on("child_added", function(childSnapshot) {
        alert("hereiam");
        alert(childSnapshot.val().text);
        // alert("now here");
    });

    $(".move").on("click", function(event) {
        event.preventDefault();

        move = $(this).attr("id");

        database.ref().push({
            move: move
        });

    })

    $("#chat").on("submit", function(event) {
        event.preventDefault();

        text = $("#message").val();
        database.ref("texts").push({
            text: text
        });
    })

    // database.ref("texts").orderByChild("dateAdded").limitToLast(1).on("child_added", function(childSnapshot) {
    //     // alert("here it is"+snapshot.child(0).val().text);
    //     alert(childSnapshot.val());
    //     // snapshot.forEach(function(childSnapshot) {
    //     //     alert(childSnapshot.val());
    //     // })
    //     alert("sup");
    //     $("p:first-of-type").remove();
    //     var $p = $("<p>");
    //     alert(childSnapshot.val());
    //     $("p:last-of-type").insertAfter($p);


    // });
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


    //push for multiple records
    //set to change existing records

    //I kind of can't believe it.  But I am actually working on it, whatever needs to happen here in order for me to get a job
    //as a software engineer.  Going to Dunwoody was dumb.  That was being stuck in the past.  Should have jumped aboard the
    //software train.

