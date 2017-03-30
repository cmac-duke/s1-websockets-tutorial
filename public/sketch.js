
var socket;

function setup(){
   createCanvas(800, 800);

   socket = io.connect();
   socket.on('mouse', newDrawing);

    osc = new p5.Oscillator();
    osc.setType('sine');
    osc.freq(240);
    osc.amp(0);
    osc.start();

}

function newDrawing(data){

  fill(random(0, 255));
  rect(data.x, data.y, 80, 80);
  osc.amp(0.5)
  osc.freq(data.x);
}

function mouseDragged(){
	console.log(mouseX + ' ' + mouseY);

	var data = {
		x: mouseX, 
		y: mouseY
	}

	socket.emit('mouse', data);


  if (mouseIsPressed) {
    fill(random(0, 255), random(0, 255), random(0, 255));
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}

function draw(){ 

}