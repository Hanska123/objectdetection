img="";
function setup(){
canvas=createCanvas(640,420);
canvas.center();
}
function draw(){
image(img,0,0,640,420);
}
function preload(){
img=loadImage('dog_cat.jpg');
}