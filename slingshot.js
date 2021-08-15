class SlingShot
{
    constructor(bodyA, pointB)
    {
        var options = 
        {
            restitution: 1,
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 60
        }        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly()
    {
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA = body;
    }

    display()
    {        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push()
            strokeWeight(4);
            fill("red");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
        }
    }   
}



