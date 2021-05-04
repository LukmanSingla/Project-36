class Food{
    constructor(){
    reference=database.ref("Pet/");
    reference.on("value",function(data){
        petposition=data.val();
        foodN=petposition.food;
    });
    pet = createSprite(800,250,10,10);
    pet.addAnimation("pet",petImg);
    pet.addAnimation("pet1",petImg2);
    pet.scale=0.2;
    }

    display(){
        if(petposition != undefined && game=="play") {if(keyDown(UP_ARROW)){
            reference.set(
                {
                    food:foodN-1
                }
            );
            pet.changeAnimation("pet",petImg);
            game="wait";
        }}


        if(game=="wait" && frameCount%60==0 ){
            pet.changeAnimation("pet1",petImg2);
            game="play"; 
            }

        
        if(foodN==0){
            game="end";
            text("Game Over Press space to continue",50,50);
            if(keyCode === 32){
                game="play";
                reference.set(
                    {
                        food:foodN+20
                    }
                );
            }
        }
        var arr1=[];

        for(var i=0;i<foodN;i++){

            if(i<10){
                image(milk,i*50+60,250,20,30);
            }else{
                image(milk,(i-10)*50+60,350,20,30);
            }
        }
    }
    
}