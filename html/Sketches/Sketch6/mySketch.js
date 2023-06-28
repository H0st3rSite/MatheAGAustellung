let scal = 700;
let range = 1;
let points = [];
let colors; 


function setup() {
	createCanvas(windowWidth - 10, windowHeight - 10);
	background(0);
	colors = [color(108, 58, 92),color(189, 210, 166),color(204, 75, 194),color(225, 111, 124),color(120, 111, 89)]
	
}

function draw() {
	background(0,0,0,0.2)
	for(let i of points) i.move();
	for(let i of points) i.draw();
	
	
	points = points.filter(({v})=>{
		return !(v.x > width || v.x < 0 || v.y > height || v.y < 0)
	})
	
	for(let i = 0; i < 1000 - points.length; i ++) points.push(new Particle())
	
}

class Particle{
	constructor(){
		this.v = createVector(random(width),random(height))
		this.c = random(colors)
		this.time = 0;
	}
	move(){
		const n = noise(this.v.x / scal,this.v.y / scal) * TWO_PI * 5
		this.v.add(cos(n) * range,sin(n) * range)
		this.time += 0.5;
	}
	draw(){
		noStroke();
		fill(this.c);
		ellipse(this.v.x,this.v.y,4,4)
	}
	
}
