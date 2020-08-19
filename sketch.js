//Create variables here
var dog,happyDog,database,foodS,foodStock



function preload()
{
  //load images here
  dogImage=loadImage("images/dogImg.png");
  happyDogImage=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(250,300,150,150);
  dog.addImage(dogImage);
  dog.scale=0.2;
  foodStock = database.ref('food')
foodStock.on("value",readStock);

}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImage);

  }


  drawSprites();
  //add styles here
  stroke("white");
  textSize(20);
  fill("white");
  text("press up to feed the dog",130,10);

}

function readStock(data){
  foodS=data.val();

}

function writeStock(x){


  if(x<=0){
    x=0;
  }else{
    x= x -1;
  }

  database.ref('/').update({
    food:x
  })
}




