class Bird extends BaseClass{           // inherits the baseclass
    constructor(x,y){
        super(x,y,50,50);       // transfer all the properties from the base class
        this.image=loadImage("sprites/bird.png")
    }

    display(){
this.body.position.x=mouseX;
this.body.position.y=mouseY;

super.display()
    }

}