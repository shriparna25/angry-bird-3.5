class Slingshot {
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length:10
          }
          this.pointB = pointB;
          this.Slingshot = Constraint.create(options);
          World.add(world,this.Slingshot);
    }
Display(){
    if(this.Slingshot.bodyA){

    
    strokeWeight(3);
    line(this.Slingshot.bodyA.position.x,this.Slingshot.bodyA.position.y,this.pointB.x,this.pointB.y);
    }
}

fly (){
    this.Slingshot.bodyA = null;
}


}