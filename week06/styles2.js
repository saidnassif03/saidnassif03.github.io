let moons = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {
    for (let moon of moons) {
        moon.display();
        moon.update();
    }
}

function mouseMoved() {
    moons.push(new Moon(mouseX, mouseY));
}

class Moon {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = random(10, 50);
        this.color = color(random(100, 255), random(100, 255), random(100, 255));
    }

    display() {
        noStroke();
        fill(this.color);
        ellipse(this.x, this.y, this.size);
    }

    update() {
        this.x += random(-1, 1);
        this.y += random(-1, 1);
    }
}
