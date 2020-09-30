var bullet, wall;

var weight, speed, damage, thickness;

function setup() {
  
  weight = Math.round(random(30,52));
  speed = Math.round(random(223,321));
  thickness = Math.round(random(22,83));

  bullet = createSprite(50, 200, weight, weight/2);
  bullet.shapeColor = "white";
  bullet.velocityX = (speed*3)/100;
  

  wall = createSprite(1200,200,thickness, 200);


  damage = Math.round((0.5*weight*speed*speed)/(thickness*thickness*thickness));

 


  
}
function draw() {
  createCanvas(1600,400);
  background(0,0,0); 

  if (hasCollided(bullet,wall)){

    fill("white");
  textSize(30);
  text("Damage: "+ damage, 750, 350);

    if(damage>10){
      wall.shapeColor = "red";
      fill("red");
      textSize(50);
      text("Wall not Approved", 550, 100);
    }
    else if(damage<10){
      fill("green");
      textSize(50);
      text("Wall Approved", 550, 100);
      wall.shapeColor = "green";
    }
  
  else if(damage=10){
    fill("yellow");
    textSize(50);
    text("Wall is Weak but Ok", 450, 100);
    wall.shapeColor = "yellow";
  }
  }




  fill("white");
  textSize(30);
  text("Weight: "+ weight, 100, 350);
  text("Speed: "+ speed, 300, 350);
  text("Thickness: "+ thickness, 500, 350);
  
  
 
  drawSprites();
}

function hasCollided(bullet, wall){

  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  
  if(bulletRightEdge>=wallLeftEdge){

    bullet.velocityX = 0;
    return true
  }
  return false;
}


