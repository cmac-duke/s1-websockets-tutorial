
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
    saw.setType('square');
    saw.freq(240);
    saw.amp(0);
    saw.start();
    
}

function newDrawing(data){

  fill(random(0, 255));
  image(trump, data.x, data.y, 200, 300);
  saw.amp(0.2);
  saw.freq(data.x);
}

function mouseDragged(){
	console.log(mouseX + ' ' + mouseY);

	var data = {
		x: mouseX, 
		y: mouseY
	}

	socket.emit('mouse', data);

  image(obama, mouseX, mouseY, 200, 300);
}

function draw(){ 

    if (mouseIsPressed) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    osc.amp(0.5);
    osc.freq(mouseX);
  } else {
    fill(255);
    osc.amp(0);
  }

}