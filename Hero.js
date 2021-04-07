class Hero{
    constructor(x,y,width,height){
        var options={
            restitution:0.4
        }
        this.width=width;
        this.height=height;
    this.hero=Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.hero);

    this.image=loadImage("superhero.png")

    }
    display(){
        push()
        imageMode(CENTER)
        image(this.image,this.hero.position.x,this.hero.position.y,this.width,this.height)
        pop();

    }
}