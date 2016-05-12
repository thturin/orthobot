PImage img;

void setup(){
  size(360,540);
  background(0,0,0);
  for (int i = 0; i <4000 ; i++){
   float x = random(width);
   float y = random(height);
   float r = random(height);
   //float b = 200;
   noStroke();
   fill(50,0,200,100);
   ellipse(x,y,2,2);
  }
    imageMode(CENTER);
  img = loadImage("cross14.png");
  image(img,width/2,height/2,350,475);
  tint(255, 126); 
  
  save("output14.png");
  exit();

}