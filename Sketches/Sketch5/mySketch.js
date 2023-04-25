let sit = [1,-1]

function setup() {
	createCanvas(windowHeight, windowHeight);
	background(0);
	frameRate(20);
}

function draw() {
	
	translate(width / 2, height / 2)
	background(0);
	for(i = 0; i < sit.length; i ++){
		for(j = 0; j < sit.length; j ++){
			for(x = 0; x < width / 2; x += width / 2 / frameCount){
				strokeWeight(1)
				stroke(255);
				line(x * sit[i], 0, 0, map(x, 0, width / 2, width / 2, 0) * sit[j]);
			}
		}
	}
}