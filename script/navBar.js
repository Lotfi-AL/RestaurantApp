
function createHeader() {
  var header = document.createElement('HEADER');
  header.className = "side-header";

  var div1 = document.createElement('DIV');
  header.appendChild(div1);
  div1.className = "top-head";

  var div2 = document.createElement('DIV');
  div2.className = 'container';
  div1.appendChild(div2);

  var div3 = document.createElement('DIV');
  div3.className='row3';
  div2.appendChild(div3);

  var div4 = document.createElement('DIV');
  div4.className = 'col-inline col-50';
  div3.appendChild(div4);



  var div5 = document.createElement('DIV');
  div5.className = 'header-bar-text';
  div4.appendChild(div5);

  var p1 = document.createElement('P');
  div5.appendChild(p1);
  p1.innerHTML = 'Kontakt oss på Tlf: 42069420';

  var div5 = document.createElement('DIV');
  div5.className='col-inline col-right';
  div3.appendChild(div5);

  var div6 = document.createElement('DIV');
  div6.className='bestill-na-btn';
  div5.appendChild(div6);

  var a1 = document.createElement('A');
  a1.innerHTML = 'Bestill mat nå!';
  a1.href="order.html";
  div6.appendChild(a1);

  var divNavBar = document.createElement("DIV");
  var divNavContainer = document.createElement("DIV");
  var divNavRow = document.createElement("DIV");
  var divNavCol1 = document.createElement("DIV");
  var divNavCol2 =document.createElement("DIV");
  var divNavCol3 = document.createElement("DIV");

  divNavBar.className="nav-bar";
  divNavContainer.className="container";
  divNavRow.className="row3";
  divNavCol1.className="col-50 logo-navbar";
  divNavCol2.className="col-inline col-right side-navigasjon";
  divNavCol3.className="hamburger-menu d-none";
  //col1
  divNavRow.appendChild(divNavCol1);

  var divNavsidemerke = document.createElement("DIV");
  divNavsidemerke.className="side-merke";
  divNavCol1.appendChild(divNavsidemerke);

  var navABlock =document.createElement("A");
  navABlock.className="display-block";
  navABlock.href="index.html";
  navABlock.rel="home";
  divNavsidemerke.appendChild(navABlock);

  var navImgBlock = document.createElement("IMG");
  navImgBlock.className="display-block";
  navImgBlock.src="images/logo1.png";
  navImgBlock.alt="logo";
  navABlock.appendChild(navImgBlock);

  //col2
  divNavRow.appendChild(divNavCol2);

  var ulNavBar = document.createElement("UL");
  ulNavBar.id="navBar";
  divNavCol2.appendChild(ulNavBar);
  //col3
  divNavRow.appendChild(divNavCol3);
  for (let i = 0; i<3; i++)
  {
    nodeSpan=document.createElement("SPAN");
    divNavCol3.appendChild(nodeSpan);
  }

  divNavContainer.appendChild(divNavRow);
  divNavBar.appendChild(divNavContainer);
  header.appendChild(divNavBar);
  document.body.appendChild(header);
}

createHeader();

const navBarNavn = [
  "Meny",
  "MatBestilling",
  "BordBestilling",
  "Om oss",
  "Kontakt"
];

const navBarLink = [
  "index.html",
  "order.html",
  "tableRes.html",
  "aboutus.html",
  "contactUs.html"
]

function genNavbar(navBar){
  for (let i = 0; i<navBarNavn.length; i++)
  {
    var a = document.createElement('A');
    a.href = navBarLink[i];
    a.appendChild(document.createTextNode(navBarNavn[i]));
    var li = document.createElement('LI');
    li.appendChild(a);
    document.getElementById(navBar).appendChild(li);
  }
}
genNavbar("navBar");

var hamburger = document.getElementsByClassName("hamburger-menu")[0];
hamburger.addEventListener("click",fncHamburger);
function fncHamburger(){
  hamburger2=document.getElementsByClassName("hamburger-menu")[0];
  hamburger2.classList.toggle("open");
  sideNav = document.getElementsByClassName("side-navigasjon")[0];
  sideNav.classList.toggle("show");
}
