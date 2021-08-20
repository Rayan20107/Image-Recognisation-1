let capture;

function setup() {
  createCanvas(400, 100);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  video.hide()
}

function draw() {
  background(255);
  image(capture,0, 0, 320, 240);
}

function preload()
{

}