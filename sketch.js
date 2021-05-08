var pet,pet1,database,petImg,petImg2,petposition,foodN=20,game="wait",a,reference,milk,milk1,timeN,a=0;

function preload(){
    petImg=loadAnimation("images/dogImg.png");
    petImg2=loadAnimation("images/dogImg1.png");
    milk=loadImage("Milk.png");
}
function setup(){
    createCanvas(1000,500);
    database=firebase.database();
    pet1=new Food();
    
   
}

function draw(){
    background("green");
    fill("white");
    textSize(20);
    pet1.display();
    // text("Food Remaining :" + foodN,150,150);
    // text("Note : Press UP_ARROW key to feed drago milk",50,20);
    drawSprites();
}
