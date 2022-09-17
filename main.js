noseX = 0;
noseY = 0;

function preload() {
    moustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup() {
    canvas = createCanvas(500, 450);
    canvas.position(500, 180);
    video = createCapture(VIDEO);
    video.size(500, 450);
    video.hide();
    tint_color = "";
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is Loaded...');
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        console.log("moustache_x = " + results[0].pose.nose.x - 25);
        console.log("moustache_y = " + results[0].pose.nose.y + 5);
        noseX = results[0].pose.nose.x -35;
        noseY = results[0].pose.nose.y +5;
    
    }
}

function filter_tint() {
    tint_color = document.getElementById("color_name").value;
}

function draw() {
    image(video, 0, 0, 500, 450); 
    image(moustache, noseX, noseY, 80, 65);
    tint(tint_color);

}
function take_snapshot() {
    save('filter_image.png');
}