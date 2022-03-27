import VectorBuilder from '../classes/Vector/Builder.js'

class Mover {
    target = {
        x: 0,
        y: 0
    }

    constructor(x, y, mass, color, name = '') {
        this.name = name
        this.color = color
        this.mass = mass
        this.size = Math.sqrt(mass) * 15
        this.r = this.size / 2
        this.pos = new VectorBuilder()
            .withPosition(x, y)
            .build()
            
        this.vel = new VectorBuilder()
            .withPosition(0, 0)
            .build()
            
        this.acc = new VectorBuilder()
            .withPosition(0, 0)
            .build()
        this.gravity = new VectorBuilder()
            .withPosition(0, 0)
            .build()
    }

    applyGravity(gravity) {
        this.acc.addVec(gravity)

    }
    applyForce(force) {
        const calculatedForce = new VectorBuilder()
            .fromDiv(force, this.mass)
            .build()
        this.acc.addVec(calculatedForce)
    }

    friction(mu) {
        // Shortcut of friction!
        // this.vel.mult(0.95)

        // Direction of friction
        let friction = new VectorBuilder()
            .fromCopy(this.vel)
            .build()
        friction.normalize()
        friction.mult(-1)

        // magnitude of friction
        const normal = this.mass
        friction.setMag(mu * normal)
        this.applyForce(friction)
    }

    drag(c) {

        // Direction of friction
        let drag = new VectorBuilder()
            .fromCopy(this.vel)
            .build()
        drag.normalize()
        drag.mult(-1)

        
        const speed = this.vel.mag()
        // console.log(speed)
        drag.setMag(c * speed * speed)
        this.applyForce(drag)
    }

    edges() {
        if(this.pos.y - this.r <= 0) {
            this.pos.y = 0 + this.r
            this.vel.y *= -1
        }
        if(this.pos.y + this.r >= height) {
            this.pos.y = height - this.r
            this.vel.y *= -1
        }
        if(this.pos.x - this.r <= 0) {
            this.pos.x = 0 + this.r
            this.vel.x *= -1
        }
        if(this.pos.x + this.r >= width) {
            this.pos.x = width - this.r
            this.vel.x *= -1
        }
    }

    move({noEdge = false} = {}) {
        this.vel.addVec(this.acc)
        this.pos.addVec(this.vel)
        if(!noEdge) this.edges()

        this.acc.set(0, 0)
    }

    height() {
        return height - this.pos.y + this.r
    }

    getInfo() {
        return {
            height: Math.floor(this.height()),
            x: Math.floor(this.pos.x - 200),
            y: Math.floor(this.pos.y - 200),
            mass: this.mass,
            name: this.name,
            vel: {
                x: Math.floor(this.vel.x),
                y: Math.floor(this.vel.y)
            },
            acc: {
                x: Math.floor(this.acc.x),
                y: Math.floor(this.acc.y)
            },
        }
    }

    draw({ debug = false } = {}) {
        const direction = new VectorBuilder()
        .fromCopy(this.vel)
        .build()
        direction.normalize()
        direction.mult(30)
        
        stroke(...this.color)
        strokeWeight(2)
        fill(255, 100)
        ellipse(this.pos.x, this.pos.y, this.size)
        
        if(!debug) return

        const center = new VectorBuilder()
            .withPosition(
                this.pos.x,
                this.pos.y
            )
            .build()

        strokeWeight(2)
        // X direction
        stroke(255, 56, 56)
        line(
            center.x,
            center.y,
            center.x + direction.x,
            center.y
        )

        // Y direction
        stroke(18, 241, 18)
        line(
            center.x,
            center.y,
            center.x,
            center.y + direction.y
        )

        // direction
        stroke(255, 209, 56)
        line(
            center.x,
            center.y,
            center.x + direction.x,
            center.y + direction.y
        )
    }
}

export default Mover