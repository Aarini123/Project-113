function preload(){
}

function setup(){
    canvas=createCanvas(640,480);
    canvas.position(150,300);
    video=createCapture(VIDEO);
    video.hide();
    TINT="";
}

function draw(){
    image(video,0,0,640,480);
    tint(TINT);
    ellipse(56,46,55,55);
    rect(38, 120, 50, 230);
    ellipse(55,400,55,55);
    rect(120, 380, 400, 50);
    ellipse(580,400,55,55);
    rect(558, 120, 50, 230);
    ellipse(580,46,55,55);
    rect(120, 10, 400, 50);

  
}

function take_snapshot(){
    save("image.png");
}
