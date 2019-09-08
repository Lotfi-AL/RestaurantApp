

tab2 = new Array();
tab2[0] ="Forretter";
tab2[1] ="Hovedretter";
tab2[2] ="Desserter";
tab2[3] ="Drikke";

function spawnMeny(){
  for(let ytre = 0; ytre<tab.length; ytre++) {
    for (let indre = 0; indre<tabLengde[ytre];indre++){

    var nodeDIV1 = document.createElement("DIV");
    nodeDIV1.className="left";
    var nodeH4 = document.createElement("H4");
    nodeH4.className="navn";
    var nodeDIV2 = document.createElement("DIV")
    nodeDIV2.className="beskrivelse"
    nodeDIV2.innerHTML="<p>"+tab[ytre][indre].beskrivelse+"</p>";
    var textnode = document.createTextNode(tab[ytre][indre].navn);
    nodeH4.appendChild(textnode);
    nodeDIV1.appendChild(nodeH4);
    nodeDIV1.appendChild(nodeDIV2);
    var nodeP = document.createElement("P");
    nodeP.className="pris";
    if (tab[ytre][indre].pris!=""){
          nodeP.innerHTML=tab[ytre][indre].pris+",-";
    }

    document.getElementsByClassName("rett-Type")[ytre].appendChild(nodeDIV1);
    document.getElementsByClassName("rett-Type")[ytre].appendChild(nodeP);

  }
}
}
spawnMeny();
