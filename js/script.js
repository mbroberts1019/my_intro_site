// jshint esversion:6
//alert("Did it work?");



function iDontKnow(){
  alert("Haven't decided what to do with this button yet");

}

var originalBackground = true;

function toggleBackground(){
  let bodyClass = document.getElementById("index-body");
  console.log(bodyClass);
  let orginalBackground = true;
  if (!originalBackground){
    bodyClass.style.backgroundImage = "radial-gradient(#00bdaa,#257aa6,#621e81)";
    originalBackground = true;
  }
  else if (originalBackground){
    bodyClass.style.backgroundImage = "radial-gradient(#fac70b,#127681,#df0e62)";
    originalBackground = false;
  }else{
    console.log("not working yet");
  }
}
