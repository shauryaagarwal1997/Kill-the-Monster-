class Monster {
  constructor(x,y,r)
	{
		var options= { 
      density: 5, 
	  restitution:1,
      frictionAir: 0
    };
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("monster1.png");
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			if(this.body.restitution<0.6){
			this.body.restitution=1;
			}
			var santaPos=this.body.position;		
			push()
			translate(santaPos.x, santaPos.y+50);
			rectMode(CENTER)
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r, this.r)
			pop()
			console.log(this.body.restitution)
			
	}
}