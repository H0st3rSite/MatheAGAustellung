function setup() {
	createCanvas(windowWidth - 10, windowHeight - 10); // - 10 to not have scrollbars
	background(100); // grey bg
}

function draw() {
	var rectWidth = 150; // Rect width
	var rectHeight = 150; // Rect height
	// Both calcs to bring rect to middle of canvas
	rect((windowWidth / 2) - (rectWidth / 2), (windowHeight / 2) - (rectWidth / 2), rectHeight, rectWidth);
}	