alert("You're about to learn how to tie a shoe!");



for (var i = 1; i < 6; i++) {
      document.write("We love step " + i + "!");
    }


$("h1").mouseover(function(){
    $("h1").css("background-color", "rgb(120, 73, 126)");
});

$("h1").mouseleave(function(){
    $("h1").css("background-color", "rgb(231, 165, 207)");
});


$("h1").append(" :)");

$("h2").css("background-color", "rgb(168, 76, 131)");


$(document).ready(function() {


 $(".easyQuestion").on("click", function() {

   var textToAdd = prompt("Did you find it easy to learn the steps?");

   $(".userText").html(textToAdd);



 });
});






$(document).ready(function() {


      $(".step1").hide();
      $(".step2").hide();
      $(".step3").hide();
      $(".step4").hide();
      $(".step5").hide();

      var hideStatus = true;


        //SHOW AND HIDE EVENTS
        $(".button1").on("click", function() {


          // if true
          if(hideStatus == true){

              $(".step2").hide();
              $(".step3").hide();
              $(".step4").hide();
              $(".step5").hide();
              $(".step1").show();

              hideStatus = false;
          }
          else{

              $(".step2").hide();
              $(".step3").hide();
              $(".step4").hide();
              $(".step5").hide();
              $(".step1").hide();

              hideStatus = true;
          }


      });

      $(".button2").on("click", function() {


        // if true
        if(hideStatus == true){

            $(".step2").show();
            $(".step3").hide();
            $(".step4").hide();
            $(".step5").hide();
            $(".step1").show();

            hideStatus = false;
        }
        else{

            $(".step2").hide();
            $(".step3").hide();
            $(".step4").hide();
            $(".step5").hide();
            $(".step1").hide();

            hideStatus = true;
        }


      });


      $(".button3").on("click", function() {


        // if true
        if(hideStatus == true){

            $(".step2").show();
            $(".step3").show();
            $(".step4").hide();
            $(".step5").hide();
            $(".step1").show();

            hideStatus = false;
        }
        else{

            $(".step2").hide();
            $(".step3").hide();
            $(".step4").hide();
            $(".step5").hide();
            $(".step1").hide();

            hideStatus = true;
        }


      });


      $(".button4").on("click", function() {


        // if true
        if(hideStatus == true){

            $(".step2").show();
            $(".step3").show();
            $(".step4").show();
            $(".step5").hide();
            $(".step1").show();

            hideStatus = false;
        }
        else{

            $(".step2").hide();
            $(".step3").hide();
            $(".step4").hide();
            $(".step5").hide();
            $(".step1").hide();

            hideStatus = true;
        }


      });


      $(".button5").on("click", function() {


        // if true
        if(hideStatus == true){

            $(".step2").show();
            $(".step3").show();
            $(".step4").show();
            $(".step5").show();
            $(".step1").show();

            hideStatus = false;
        }
        else{

            $(".step2").hide();
            $(".step3").hide();
            $(".step4").hide();
            $(".step5").hide();
            $(".step1").hide();

            hideStatus = true;
        }


      });

});
