function setup() {
	createCanvas(windowWidth - 10, windowHeight - 10); 
	background(100); 
}

function draw() {
	var rectWidth = 150; 
	var rectHeight = 150; 
	
	rect((windowWidth / 2) - (rectWidth / 2), (windowHeight / 2) - (rectWidth / 2), rectHeight, rectWidth);
}