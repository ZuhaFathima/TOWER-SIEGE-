class Block{
  constructor(x, y, width, height){

    var options = {
      'restitution':1.0,
      'friction':1.0,
      'density':1.0
  }

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.visibility = 255;

    World.add(world, this.body);
  }

  
  score(){
    if(this.visibility < 0 && this.visibility > -105){
      score++;
    }
  }

  display(){
    //console.log(this.body.speed); 
    var angle = this.body.angle; 
    var pos = this.body.position; 
    
    if(this.body.speed < 8){ 
      push(); 
      translate(pos.x, pos.y); 
      rotate(angle); 
      rectMode(CENTER); 
      rect(0,0,this.width, this.height); 
      pop(); 
    } else{ 
      World.remove(world, this.body); 
      push(); 
      this.visibility = this.visibility - 5; 
      tint(20,this.visibility); 
      pop(); 
    }

  }

};


