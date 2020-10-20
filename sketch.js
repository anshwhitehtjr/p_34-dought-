//Create variables here
var happyDog, dog_img, dog, happyDog, database, foodS, foodStock;

function preload()
{
  //load images here
  dog_img = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(1000,1000);
  dog = createSprite(250*2,250*2);
  dog = addImage(dog_img);
  database = firebase.database();
  foodStock = database.ref('food');
  foodStock.on("value",readStock);

  
  
}


function draw() {  
  background("green");

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }
  drawSprites();
  //add styles here

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    food:x
  })
}