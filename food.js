class Food{
    constructor(){
    reference=database.ref("Pet/");
    reference.on("value",function(data){
        petposition=data.val();
        foodN=petposition.food;
        timeN=petposition.time;
        a=petposition.time2;
    });
    pet = createSprite(800,250,10,10);
    pet.addAnimation("pet",petImg);
    pet.addAnimation("pet1",petImg2);
    pet.scale=0.2;
    }

    display(){
        text("Last Fed : " + timeN + " " + a,100,100);
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
                image(milk,i*50+60,250,40,50);
            }else{
                image(milk,(i-10)*50+60,350,40,50);
            }
        }


        var button=createButton('Add Food');
        button.position(30,30);
        button.style("border-radius:20px;background-color:blue;color:white");
        button.mousePressed(function(){
            if(petposition != undefined && foodN<20){
                reference.set(
                    {
                        food:foodN+1
                    }
                );
                pet.changeAnimation("pet",petImg);
                game="wait";
            }
            
        });
       

        var button2=createButton('Feed the Food');
        button2.position(150,30);
        button2.style("border-radius:20px;background-color:blue;color:white");
        button2.mousePressed(function(){if(petposition != undefined && game=="play") {
            var now=new Date();
            timeN=now.getHours();
            if(timeN>12){
                timeN=timeN-12;
                a="PM";
            }else{
                a="AM";
            }
            console.log(timeN);
            reference.set(
                {
                    food:foodN-1,
                    time:timeN,
                    time2:a
                }
            );
            pet.changeAnimation("pet",petImg);
            game="wait";
            
        }})

    }  

}
