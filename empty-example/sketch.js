const barWidth = 80;
let lastBar = 2;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, width, height, 80);
  noStroke(50);
}

function draw() {
  let whichBar = mouseX / barWidth;
  if (whichBar !== lastBar) {
    let barX = whichBar * barWidth;
    fill(barX, mouseY, 100);
    rect(barX, 20, barWidth, height);
    lastBar = whichBar;
    ellipse(190,190,190);
 }
}