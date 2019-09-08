function confirmation() {
  let number = document.getElementById("antall").value;
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;
  let end = "";
  if (number > 1) {
    end = "er";
  }
  let conf = confirm("Vil du bestille bord for "
   + number + " person" + end + " den " + date + " kl. "
  + time + "?");
  return conf;  

}

function validate() {
  let date = document.getElementById("date").value;
  let name = document.getElementById("name").value.trim();
  let phone = document.getElementById("phone").value;
  if ((date=="")||(name=="")||(phone=="")) {
    alert("Alle felter må fylles ut!");
    return false;
  }
  else if ((phone.toString().length != 8) || (!/^[0-9]+/.test(phone))) {
    alert("Ugyldig telefonnummer");
    return false;
  }
  else if (!/^[a-zA-Z\s]+$/.test(name)) {
    alert("Navnet kan bare inneholde bokstaver og mellomrom.");
    return false;
  }
  else {
    console.log('Valid! Calls confimation');
    return confirmation();
  }
}
