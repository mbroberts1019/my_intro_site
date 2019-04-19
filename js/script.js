// jshint esversion:6

function iDontKnow() {
  alert("Haven't decided what to do with this button yet");
}

/* Original backgroundToggle function depends on "onclick" in html file

var originalBackground = true;

function toggleBackground() {
  let bodyClass = document.getElementsByTagName("body")[0];
  if (!originalBackground) {
    bodyClass.style.backgroundImage = "radial-gradient(#00bdaa,#257aa6,#621e81)";
    originalBackground = true;
  } else if (originalBackground) {
    bodyClass.style.backgroundImage = "radial-gradient(#fac70b,#127681,#df0e62)";
    originalBackground = false;
  } else {
    console.log("not working yet");
  }
}
*/

 /* And a much cleaner jQuery version. Also keeps styling out of script.js yeah!! */
$("#btn-home").click(function(){
  console.log("function called");
  $( "body" ).toggleClass("new-body");
});

function toldYouSo() {
  let dogImg = document.getElementById("cliffImg");
  dogImg.src = "images/cliffypoo.jpeg";

  /*
    glad you got the chance to use setTimeout. That and setInterval can be really
    powerful methods.
  */
  setTimeout(function() {
    alert("Told you so!");
  }, 1000);
  setTimeout(function() {
    dogImg.src = "images/cliffturd.jpeg";
  }, 5000);
  setTimeout(function() {
    dogImg.src = "images/handsomeman.jpeg";
  }, 10000);
}


//slide togggle p element

$("#btn-bikes").on("click", function(){
  console.log("clicking");
  $("#slider").slideToggle();
});

$("#btn-sew").on("click", function(){
  console.log("click");
  $("#fader").fadeToggle();
});

/* wasn't able to get this working before class time
$("#nomnom").on("hover", function(){
  $("#intrest-img").toggle();
});*/
