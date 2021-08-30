function preload() {
}

function setup() {
    canvas = createCanvas(640,480);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video , 0, 0, 640, 480);

    fill(255, 3, 199);
    stroke(1, 139, 253);
    circle(60, 50, 80);

    circle(60, 430, 80);

    circle(580, 50, 80);

    circle(580, 430, 80);

    fill(255, 0, 0);
    stroke(255, 255, 255);
    circle(550, 230, 50);

    circle(90, 230, 50);


    fill(1, 139, 253);
    stroke(255, 3, 199);
    rect(100, 40, 440, 20);

    rect(100, 420, 440, 20);

    rect(50, 90, 20, 300);

    rect(570, 90, 20, 300);

}

function take_snapshot() {
    save("designed_image.png");
}