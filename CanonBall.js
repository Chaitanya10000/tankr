class CanonBall {
  constructor(x, y,width,height) {
    var options = {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06,
    }

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("canonBall.png");
    World.add(world, this.body);
    
  }

  display(){
    image(this.image,300,200,this.width,this.height);
    fill("black");
   
  }
}