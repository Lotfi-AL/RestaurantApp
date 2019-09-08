function submitable(){
  document.getElementById('submitButton').disabled = false;
  //The submit-buton is disabled until an input is made in the textfield.
  //This is to prevent the user from sending an empty message.
}

function submit() {
  document.getElementById('msgField').value = "";   //Makes sure the textfield is empty when reloading the page
  document.getElementById('msgField').style.display = "none"; //Hides the textfield when the submit-button is pressed
  document.getElementById('submitButton').style.display = "none"; //Hides the submit-button
  document.getElementById('p1').style.display = "none"; //Hides the paragraph above the textfield
  var tyText = "Takk for din tilbakemelding! Vi håper å se deg igjen på GløsGourmet!";
  document.getElementById('sent').innerHTML = tyText; //Displayes a new paragraph when submitted
  document.getElementById('submitButton').disabled = true; //Makes sure the submit-button is disabled when the page is reloaded

}

function showMap() {
  var map = document.getElementById('map');
  map.style.display = "inline-block";
  document.getElementById('showMap').style.display = "none";
  document.getElementById('hideMap').style.display = "block";
}

function hideMap() {
  var map = document.getElementById('map');
  map.style.display = "none";
  document.getElementById('showMap').style.display = "block";
  document.getElementById('hideMap').style.display = "none";
}


//showMap() and hideMap() are functions related to the hide and show buttons that
//appear when the screen width is lowered.
