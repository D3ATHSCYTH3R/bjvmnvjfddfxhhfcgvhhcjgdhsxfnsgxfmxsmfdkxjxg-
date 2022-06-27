function preload(){

}
function setup(){
canvas=createCanvas(550, 400);
canvas.position(340, 150);
video=createCapture(VIDEO);
video.hide();

c="";
}
function draw(){
    image(video, 0, 0, 550, 400);
    tint(c);
    
}
function ts(){
    save('taco.png');
}
function tc(){
c=document.getElementById("i1").value;
}