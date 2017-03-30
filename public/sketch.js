
var socket;

function setup(){
   createCanvas(800, 800);

   socket = io.connect('https://mysterious-bastion-37866.herokuapp.com:3000');
   socket.on('mouse', newDrawing);

}

function newDrawing(data){

  fill(random(0, 255));
  rect(data.x, data.y, 80, 80);

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