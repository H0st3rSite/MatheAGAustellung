function setup(){
	createCanvas(windowWidth - 10, windowHeight - 10);
}

function draw() {
	background(100);
	rectMode(CENTER);
	translate(windowWidth / 2, windowHeight / 2);
	translate(p5.Vector.fromAngle(millis() / 1000, 40));
	rect(0, 0, 50, 50);

	rect(-50, -50, 25, 25);
	translate(0, 0);
	translate(windowWidth / 2, windowHeight / 2);
	translate(p5.Vector.fromAngle(millis() / 100, 10));
	rect(0, 0, 10, 10);
}