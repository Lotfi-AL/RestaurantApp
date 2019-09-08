
function createFooter(){
  var footer = document.createElement("FOOTER");
  footer.className="site-footer";

  var divFooterWidgets = document.createElement("DIV");
  divFooterWidgets.className="footer-widgets";
  footer.appendChild(divFooterWidgets);

  var divFooterContainer = document.createElement("DIV");
  divFooterContainer.className="container";
  divFooterWidgets.appendChild(divFooterContainer);

  var divFooterRow = document.createElement("DIV");
  divFooterRow.className="row";
  divFooterContainer.appendChild(divFooterRow);

  //col1
  var divCol1 = document.createElement("DIV");
  divCol1.className="col-inline col-50";
  divFooterRow.appendChild(divCol1);

  var divFooterAbout = document.createElement("DIV");
  divFooterAbout.className="foot-about";
  divCol1.appendChild(divFooterAbout);

  var nodeH2 = document.createElement("H2");
  var nodeAFoot = document.createElement("A");
  nodeAFoot.className="foot-logo";
  nodeAFoot.href="index.html";
  var nodeIMG = document.createElement("IMG");
  nodeIMG.src="images/logo2.png";
  nodeAFoot.appendChild(nodeIMG);
  nodeH2.appendChild(nodeAFoot);

  divFooterAbout.appendChild(nodeAFoot);
  var nodeUL = document.createElement("UL");
  nodeUL.className="ul-foot";
  var li1 = document.createElement("LI");
  var li1A = document.createElement("A");
  var li1i = document.createElement("I");
  li1A.href="#";
  li1i.className="fa fa-pinterest-p"
  li1.appendChild(li1A);
  li1A.appendChild(li1i);
  nodeUL.appendChild(li1);

  var li2 = document.createElement("LI");
  var li2A = document.createElement("A");
  var li2i = document.createElement("I");
  li2A.href="#"
  li2i.className="fa fa-facebook";
  li2.appendChild(li2A);
  li2A.appendChild(li2i);
  nodeUL.appendChild(li2);

  var li3 = document.createElement("LI");
  var li3A = document.createElement("A");
  var li3i = document.createElement("I");
  li3A.href="#"
  li3i.className="fa fa-instagram";
  li3.appendChild(li3A);
  li3A.appendChild(li3i);
  nodeUL.appendChild(li3);

  var nodeP = document.createElement("P");
  nodeP.innerHTML="Gløs Gourmet, i business siden 1993!<br> Kvalitets mat og service for penga";
  divFooterAbout.appendChild(nodeP);
  divFooterAbout.appendChild(nodeUL);

  //col2
  var divCol2 = document.createElement("DIV");
  divCol2.className="col-inline col-50";
  divFooterRow.appendChild(divCol2);

  var divFooterContact = document.createElement("DIV");
  divFooterContact.className="foot-contact";
  divCol2.appendChild(divFooterContact);

  var nodeH2About = document.createElement("H2");
  nodeH2About.innerHTML="Kontakt";
  divFooterContact.appendChild(nodeH2About);
  var nodeULAbout = document.createElement("UL");

  var nodeLI1 = document.createElement("LI");
  var nodeLI1I=document.createElement("I");
  nodeLI1I.className="fa fa-phone";
  var nodeLI1Span = document.createElement("SPAN");
  nodeLI1Span.innerHTML="90415561";
  nodeLI1.appendChild(nodeLI1I);
  nodeLI1.appendChild(nodeLI1Span);

  var nodeLI2 = document.createElement("LI");
  var nodeLI2I=document.createElement("I");
  nodeLI2I.className="fa fa-envelope";
  var nodeLI2Span = document.createElement("SPAN");
  nodeLI2Span.innerHTML="gløs.gourmet@ntnu.no";
  nodeLI2.appendChild(nodeLI2I);
  nodeLI2.appendChild(nodeLI2Span);

  var nodeLI3 = document.createElement("LI");
  var nodeLI3I=document.createElement("I");
  nodeLI3I.className="fa fa-map-marker";
  var nodeLI3Span = document.createElement("SPAN");
  nodeLI3Span.innerHTML="Høgskoleringen 5, 7034 Trondheim";
  nodeLI3.appendChild(nodeLI3I);
  nodeLI3.appendChild(nodeLI3Span);


  nodeULAbout.appendChild(nodeLI1);
  nodeULAbout.appendChild(nodeLI2);
  nodeULAbout.appendChild(nodeLI3);
  divFooterContact.appendChild(nodeULAbout);

  var divSubscribe = document.createElement("DIV");
  divSubscribe.className="subscribe-form";
  var formFooter = document.createElement("FORM");
  var input1 = document.createElement("INPUT");
  input1.type="email" ;
  input1.placeholder="Din email, så kontakter vi deg!";
  var input2 = document.createElement("INPUT");
  input2.type="submit";
  input2.value="Send";
  formFooter.appendChild(input1);
  formFooter.appendChild(input2);
  divSubscribe.appendChild(formFooter);
  divFooterContact.appendChild(divSubscribe);
  document.body.appendChild(footer);
}

createFooter();
