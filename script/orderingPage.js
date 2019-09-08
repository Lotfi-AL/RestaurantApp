
function clearTingen(){
  for(let o = 0;o<tab.length;o++){
    nolo=document.getElementsByClassName("matListe")[o].innerHTML="";
  }
}

  function pageScroll() {
      window.scrollBy(0,1);
      scrolldelay = setTimeout(pageScroll,10);
  }
  //mobilsiden
  function mobilSide(){
    //lager menylisteitemene
    function spawnMeny(){
      for(let ytre = 0; ytre<tab.length; ytre++){

        for (let indre = 0; indre<tabLengde[ytre];indre++){
          var nodeLI = document.createElement("LI");
          var nodeP = document.createElement("P");
          var textnode = document.createTextNode(tab[ytre][indre].navn);
          nodeP.innerHTML = tab[ytre][indre].navn;
          nodeLI.appendChild(nodeP);
          var inpKnapp = document.createElement("BUTTON");
          var nodeSPAN = document.createElement("SPAN");
          nodeSPAN.className="prislapp";
          nodeSPAN.innerHTML = "Pris: " + tab[ytre][indre].pris+ ",-";
          nodeLI.appendChild(nodeSPAN);
          for (let i=0; i<nodeLI.childNodes.length;i++)
          {
            nodeLI.childNodes[i].value = tab[ytre][indre].pris;
            nodeLI.childNodes[i].name = tab[ytre][indre].navn;
            nodeLI.childNodes[i].beskrivelse =tab[ytre][indre].beskrivelse;
          }
          nodeLI.value = tab[ytre][indre].pris;
          nodeLI.name= tab[ytre][indre].navn;
          nodeLI.beskrivelse = tab[ytre][indre].beskrivelse;
          nodeLI.addEventListener("click",btnEvent);
          nodeLI.className="knapp";
          document.getElementsByClassName("matListe")[ytre].appendChild(nodeLI);
        }
    }
    }
    var okse = 0;
  var verdiTab = new Array();
    verdiTab[okse] = new Array();
    spawnMeny();
  // lager listeelement som viser pris og en knapp for å slette LI
    function btnEvent(btn){
      liste = document.getElementById("prisListe")
      var nodeLI = document.createElement("LI");
      nodeLI.innerHTML ="<p>"+btn.target.name +" "+ btn.target.value+" kr,-"+"</p>";
      var inpKnapp = document.createElement("INPUT");
      inpKnapp.type="button";
      inpKnapp.value="-";
      inpKnapp.className="knapp";
      inpKnapp.id="slettKnapp";
      inpKnapp.name = okse;
      verdiTab[okse] = {value:btn.target.value,navn:btn.target.name};
      inpKnapp.addEventListener("click",slettKnapp);
      nodeLI.appendChild(inpKnapp);
      liste.append(nodeLI);
      okse+=1;
      beregn();
  }
  //bygger om listen etter at noe er blitt slettet ved å iterere gjennom array hvor vi har lagra hva som ble slettet
  function rebuild(){
      for (var i=0; i<verdiTab.length;i++)
      {
        liste = document.getElementById("prisListe")
        var nodeLI = document.createElement("LI");
        nodeLI.innerHTML = verdiTab[i].navn+" "+ verdiTab[i].value+" kr,-";
        var inpKnapp = document.createElement("INPUT");
        inpKnapp.type="button";
        inpKnapp.value="-";
        inpKnapp.className="knapp";
        inpKnapp.id="slettKnapp";
        inpKnapp.name = i;
        verdiTab[i] = {value:verdiTab[i].value,navn:verdiTab[i].navn};
        inpKnapp.addEventListener("click",slettKnapp);
        nodeLI.appendChild(inpKnapp);
        liste.append(nodeLI);
      }
      beregn();
      okse=0;
  }
    function slettKnapp(evt){
      viktig = evt.target.name;
      verdiTab.splice(evt.target.name,1);
      evt.target.parent
      var element = document.getElementById("prisListe");
      element.parentNode.removeChild(element);
      fisk = document.getElementsByClassName("plasseringListe")[0];
      nodeUL = document.createElement("UL");
      nodeUL.id = "prisListe";
      fisk.appendChild(nodeUL);

      rebuild();

    }

//regner ut totalen
  function beregn(){
      var total2 = 0;
      for (var i=0; i<verdiTab.length;i++)
      {
        total2 = total2+ parseInt(verdiTab[i].value,10);
      }

        document.getElementById("noobsa").value=total2+",-";
            return (total2);
  }
  var dunk = document.getElementById("betal").addEventListener("click",betaling);
  function betaling(){

    var totalPris = beregn();

    alert("Takk for bestillingen! Totalen ble på: "+totalPris+",-");

  }
  }
//desktopside
  function desktopSide(){
    //lager menylisten
    function spawnMeny(){
    for(let ytre = 0; ytre<tab.length; ytre++){
      for (let indre = 0; indre<tabLengde[ytre];indre++){
        var nodeLI = document.createElement("LI");
        var nodeP = document.createElement("P");
        var textnode = document.createTextNode(tab[ytre][indre].navn);
        nodeP.innerHTML = tab[ytre][indre].navn;
        nodeLI.appendChild(nodeP);
        var inpKnapp = document.createElement("BUTTON");

        inpKnapp.id="leggTilKnapp";
        inpKnapp.innerHTML = "+";

        var nodeSPAN = document.createElement("SPAN");
        nodeSPAN.className="prislapp";
        nodeSPAN.innerHTML = "Pris: " + tab[ytre][indre].pris+ ",-";
        nodeLI.appendChild(nodeSPAN);

        for (let i=0; i<nodeLI.childNodes.length;i++)
        {
          nodeLI.childNodes[i].value = tab[ytre][indre].pris;
          nodeLI.childNodes[i].name = tab[ytre][indre].navn;
          nodeLI.childNodes[i].beskrivelse =tab[ytre][indre].beskrivelse;
        }
        nodeLI.value = tab[ytre][indre].pris;
        nodeLI.name= tab[ytre][indre].navn;
        nodeLI.beskrivelse = tab[ytre][indre].beskrivelse;
        nodeLI.addEventListener("click",modula);
        nodeLI.className="knapp";
        document.getElementsByClassName("matListe")[ytre].appendChild(nodeLI);
      }
    }
    }
    var okse = 0;
    var viktig = 0;
    var verdiTab = new Array();
    verdiTab[okse] = new Array();
    spawnMeny();
    var popup = document.getElementById('order-popup');
    var span = document.getElementsByClassName("close")[0];
    var popup2 = document.getElementsByClassName("popup-content")[0];
    var p = document.getElementById("besk");
    var kk = document.getElementById("popuph1");
    var pris =document.getElementById("pris");

    //lager popupen
    function modula(evt){
      // for å endre hvilken select option som var valg til 1, men det funket ikke ..
      document.getElementById("antall")[0].innerHTML="";
      document.getElementById("antall")[0].innerHTML="<option selected value=1>1</option>";

      popup.style.display = "block";
      img = document.getElementById("hei");
      try {
      pris.innerHTML=evt.target.name+" for " +evt.target.value+",-";
      img.src="images/meny/"+evt.target.name+".jpeg";
      p.innerHTML=evt.target.beskrivelse;
      kole = document.getElementById("leggtil")
      kole.value = evt.target.value;
      kole.name = evt.target.name;
    }
    catch{

    }
      kk.innerHTML=evt.target.name;
    }
      var kor = document.getElementById("leggtil").addEventListener("click",fncLeggTil);
    function nyVare(btn){
      liste = document.getElementById("prisListe")
      var nodeLI = document.createElement("LI");
      nodeLI.innerHTML ="<p>"+btn.target.name +" "+ btn.target.value+",-"+"</p>";
      var inpKnapp = document.createElement("INPUT");
      inpKnapp.type="button";
      inpKnapp.value="-";
      inpKnapp.className="knapp";
      inpKnapp.id = "slettKnapp";
      inpKnapp.name = okse;
      verdiTab[okse] = {value:btn.target.value,navn:btn.target.name};
      inpKnapp.addEventListener("click",slettKnapp);

      // for å regne ut totalen så går du gjennom den arrayen du mekker nå
      nodeLI.appendChild(inpKnapp);
      liste.append(nodeLI);
      okse+=1;
      beregn();
      popup.style.display="none";
  }
  function fncLeggTil(k){
    i = document.getElementById("antall").value;
    for (let a=0;a<i;a++)
    {
        nyVare(k);
    }

  }


  function rebuild(){
      for (var i=0; i<verdiTab.length;i++)
      {
        liste = document.getElementById("prisListe")
        var nodeLI = document.createElement("LI");
        nodeLI.innerHTML = verdiTab[i].navn+" "+ verdiTab[i].value+",-";
        var inpKnapp = document.createElement("INPUT");
        inpKnapp.type="button";
        inpKnapp.value="-";
        inpKnapp.className="knapp";
        inpKnapp.id="slettKnapp";
        inpKnapp.name = i;
        verdiTab[i] = {value:verdiTab[i].value,navn:verdiTab[i].navn};
        inpKnapp.addEventListener("click",slettKnapp);
        nodeLI.appendChild(inpKnapp);
        liste.append(nodeLI);
      }
      beregn();
      okse=0;
  }
    function slettKnapp(evt){
      viktig = evt.target.name;
      verdiTab.splice(evt.target.name,1);
      evt.target.parent
      var element = document.getElementById("prisListe");
      element.parentNode.removeChild(element);
      fisk = document.getElementsByClassName("plasseringListe")[0];
      nodeUL = document.createElement("UL");
      nodeUL.id = "prisListe";
      fisk.appendChild(nodeUL);

      rebuild();

    }


  function beregn(){
      var total2 = 0;
      for (var i=0; i<verdiTab.length;i++)
      {
        total2 = total2+ parseInt(verdiTab[i].value,10);
      }
        document.getElementById("noobsa").value=" "+total2+",-";
        return (total2)
  }
  var dunk = document.getElementById("betal").addEventListener("click",betaling);
  function betaling(){
    var totalPris = beregn();
    alert("Takk for bestillingen! Totalen ble på: "+totalPris+",-");

  }
  function vis(){
    document.getElementsByClassName("matListe")[2].style.display="block";
  }



  span.onclick = function ki() {
      popup.style.display = "none";
  }



  window.onclick = function(event) {
      if (event.target == popup) {
          popup.style.display = "none";
      }
  }

  }


if (matchMedia) {
const mq = window.matchMedia("(min-width: 767px)");
mq.addListener(WidthChange);
WidthChange(mq);
}

// media query change
function WidthChange(mq) {
if (mq.matches) {

clearTingen();  desktopSide();
// window width is at least 767px
} else {
clearTingen();  mobilSide();
// window width is less than 767px
}
}

//  var kor = document.getElementById("leggtil").addEventListener("click",fncLeggTil);

// lager listeelement som viser pris og en knapp for å slette LI
