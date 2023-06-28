function setup() {
	createCanvas(windowWidth - 10, windowHeight - 10);
	background(100);
}

function draw() {
	var rectNum = 10;
	
	for(i = 0; i < rectNum + 100; i += 10) {
		rect(i, i, i, i);

	}

	for(x = 0; x < rectNum + 100; x += 10) {
		rect(100, x, x, x);
	}

	for(y = 0; y < rectNum + 100; y += 10) {
		rect(y + 90, y + 90, y, y);
	}

	for(z = 0; z < windowWidth - 70; z += 10) {
		rect(z, 240, 50, 50);
	}

	rect(100, 300, 80, 80);
	rect(30, 280, 80, 80);
}