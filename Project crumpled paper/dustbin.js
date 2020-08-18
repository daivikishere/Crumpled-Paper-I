class Dustbin{
    constructor(x,y){
      var options = {
        isStatic: true
      }
      this.body = Bodies.rectangle(x,y,150,20,options);
        this.width = 150;
        this.height = 20;
        World.add(world, this.body);

        this.body2 = Bodies.rectangle(x-85,y-30,20,50,options);
        this.width2 = 20;
        this.height2 = 80;
        World.add(world, this.body2);

        this.body3 = Bodies.rectangle(x+85,y-30,20,50,options);
        this.width3 = 20;
        this.height3 = 80;
        World.add(world, this.body3);


    }
    display(){
      rectMode (CENTER);
      rect(this.body.position.x,this.body.position.y,this.width,this.height)

      rectMode (CENTER);
      rect(this.body2.position.x,this.body2.position.y,this.width2,this.height2)

      rectMode (CENTER);
      rect(this.body3.position.x,this.body3.position.y,this.width3,this.height3)

    }
  }                                                           