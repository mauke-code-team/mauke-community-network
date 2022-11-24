//set the biggest the diameter can be
// set initial values
var maxDiameter; 
var theta; 

function setup() {
  var myCanvas = createCanvas(500, 200);
  myCanvas.parent("sketch-container");
	
  maxDiameter = 150; 
	theta = 0; 
    aplha = 1

    
  
}

function draw() {
    clear();
    fill("rgba(0, 0, 0, 0)")
stroke('rgba(0,0,0,0)')
strokeCap(PROJECT);
strokeJoin(MITER);
stroke("#000000")
translate(100,50)
beginShape();
vertex(20,37);
bezierVertex(22,27,22,9.5,29.5,3.5);
bezierVertex(40,-2.5,46,3.5,54.5,8);
bezierVertex(63,12.5,101,26.5,123.5,37);
bezierVertex(146,47.5,144,38.5,154.5,51);
bezierVertex(165,63.5,170.5,87.5,173.5,101);
bezierVertex(176.5,114.5,174.5,150.5,173.5,165.5);
bezierVertex(172.5,180.5,165.5,204.5,160.5,214.5);
bezierVertex(155.5,224.5,145.5,227.5,131.5,240);
bezierVertex(117.5,252.5,103.5,261,95.5,261);
bezierVertex(87.5,261,89.5,259,83.5,255.5);
bezierVertex(77.5,252,50,235.5,36,222.5);
bezierVertex(22,209.5,9,174,7,167.5);
bezierVertex(5,161,6,158.5,7,147);
bezierVertex(8,135.5,1,111.5,1.5,99.5);
bezierVertex(2,87.5,6.5,75,12,66.5);
bezierVertex(17.5,58,18,47,20,37);
endShape();

    if (aplha<=0) {
        aplha=0
    }

  // calculate the diameter of the circle 
  //height/2 + sin(theta) * amplitude; 

  var diam = sin(theta) * maxDiameter ;
//   console.log(diam)
  if(diam > maxDiameter-1) {
      theta = 0
      diam = 0 ;
      aplha = 1
  }

  // draw the circle 
  ellipse(width/2,height/2, diam, diam); 
  noFill();
  stroke('rgba(100%,100%,100%,'+aplha+')')
  strokeWeight(2);

  // make theta keep getting bigger
  // you can play with this number to change the speed
  theta += .01; 
  aplha -= .007;

}