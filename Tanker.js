class Tanker {
    constructor(x, y, width, height) {
        var options = {
        isStatic: true
       }
       this.body = Bodies.rectangle(x,y,width,height,options);  
       this.image = loadImage("tanker.png");
       this.width = width;
       this.height = height;
       World.add(world, this.body);
      }
  
      fly(){
        this.sling.bodyA = null;
    }
    
      display(){
      var pos =this.body.position;
      image(this.image,10,345,this.width,this.height);
      }
  }