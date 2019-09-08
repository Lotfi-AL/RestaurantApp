


//grad = context.createLinearGradient(0.000, 150.000, 300.000, 150.000);
//grad.addColorStop(0.540, 'rgba(255, 143, 38, 1.000)');
//grad.addColorStop(1.000, 'rgba(255, 255, 255, 1.000)');

function lagSirkel(id,start,slutt,farge){
  let canvas = document.getElementById(id);
  let context = canvas.getContext("2d");
  context.beginPath();
  context.arc(156,156,100,start,slutt,true);
  let grd;
  grad = context.createLinearGradient(0.000, 150.000, 300.000, 150.000);
  grad.addColorStop(0.000, 'rgba(0, 0, 0, 1.000)');
  grad.addColorStop(0.000, 'rgba(255, 127, 0, 1.000)');
  grad.addColorStop(1.000, 'rgba(216, 149, 86, 1.000)');
  context.fillStyle= "#262626";
  context.strokeStyle=grad;
  context.lineWidth=12;
  context.stroke();
  context.fill();
}

lagSirkel("canv1",0*Math.PI,2*Math.PI,"blue");
lagSirkel("canv2",1.2*Math.PI,1.5*Math.PI,"red");
lagSirkel("canv3",1.35*Math.PI,1.5*Math.PI,"black");
