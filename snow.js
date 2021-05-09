class Snow{
constructor(x,y,radius){

    var options={
        'friction':1.0,
        'density':0.3

    }

    this.body=Bodies.circle(x,y,radius, options)
    World.add(world, this.body)

    this.radius=radius
    this.image=loadImage("snow4.webp");

}
display(){
    var angle=this.body.angle;
    push()
    translate(this.body.position.x, this.body.position.y)
    rotate(angle)
    imageMode(CENTER)
    image(this.image,0,0,this.radius,this.radius)
    pop()
}

}