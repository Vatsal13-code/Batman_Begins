class Umbrella {
    constructor(x,y) {
        this.x=x
        this.y=y
        this.body=Bodies.circle(this.x,this.y,10)
        this.image=loadImage("Walking Frame/walking_3.png")
    }

    display() {
        image(this.image,this.body.position.x,this.body.position.y,300,200)
    }
    
}