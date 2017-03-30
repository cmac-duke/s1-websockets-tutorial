
var socket;
var trump;
var obama;

function setup(){

   createCanvas(windowWidth, windowHeight);

    trump = loadImage("assets/trump.png");
    obama = loadImage("assets/obama.png");

   socket = io.connect();
   socket.on('mouse', newDrawing);

    osc = new p5.Oscillator();
    osc.setType('sine');
    osc.freq(240);
    osc.amp(0);
    osc.start();


    saw = new p5.Oscillator();
    saw.setType('sawtooth');
    saw.freq(240);
    saw.amp(0);
    saw.start();
    
}

function newDrawing(data){

  fill(random(0, 255));
  image(trump, data.x, data.y, 200, 300);
  osc.amp(0.5);
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
  image(obama, mouseX, mouseY, 200, 300);
  saw.amp(0.5);
  saw.freq(mouseX);
}

function draw(){ 

}