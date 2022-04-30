let particles = []

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	colorMode(HSB);
	for (o=0; o<height;o+=15){
		for(i=0;i<width;i+=20){
			particles.push({
				x: i,
				y: o,
				clr: color(noise(i/50,o/50)*360,90,90)
			})
		}
	}
}

function draw() {
	noStroke()
	background(0,0.01)
	for(var i=0; i<particles.length; i++){
		let p = particles[i]
		fill(p.clr)
		ellipse(p.x, p.y, 5)
		p.x+= (noise(p.x/200, p.y/200, 1000) -0.5) *3//noise為0-1之間的值
		p.y+= (noise(p.x/200, p.y/200, 10000) -0.5) *3
	}
}