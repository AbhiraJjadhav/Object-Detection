objectDetector = "";
img = "";
status = "";
objects = [];

function preload() {
    img = loadImage('dog_cat.jpg');
}
function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400, 400);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML = "Status : Detecting Objects";
}
function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
}
function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw() {
    image(video, 0, 0, 400, 400);
    
    /*fill('#0000')FF;
    text('Dog', 45, 75);
    noFill();
    stroke('#0000FF');
    rect(30, 60, 450, 350);

    fill("#00FF00");
    text('Cat', 320, 120); //text to be written, x, y
    noFill();
    stroke("#00FF00");
    rect(300, 90, 270, 320); //x value, y value, width, hiegth*/
}