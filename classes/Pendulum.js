import VectorBuilder from "./Vector/Builder.js"

class Pendulum {
    constructor({
        armType,
        origin,
        size,
        length
    }) {
        this.armType = armType
        this.origin = new VectorBuilder()
            .withPosition(origin.x, origin.y)
            .build()
        this.length = length

        this.angle = Math.PI/4
        // this.bob = new VectorBuilder()
        //     .withPosition(0, 20)
        //     .build()
        this.bob = new VectorBuilder()
            .withPosition(0, 0)
            .build()
        this.size = size

        this.vel = new VectorBuilder()
            .withPosition(0, 0)
            .build()
        this.acc = new VectorBuilder()
            .withPosition(0, 0)
            .build()

        this.bob.x = this.origin.x + this.length * Math.sin(this.angle)
        this.bob.y = this.origin.y + this.length * Math.cos(this.angle)
    }

    update() {
        if(this.armType == 'normal') {
            this.vel.addVec(this.acc)
            this.angle += this.vel.y

            this.bob.x = this.origin.x + this.length * Math.sin(this.angle)
            this.bob.y = this.origin.y + this.length * Math.cos(this.angle)
        } else {
            this.spring()
            this.vel.addVec(this.acc)
            this.bob.addVec(this.vel)
            this.vel.mult(0.95)
        }
        

        this.acc.set(0, 0)
    }

    spring() {
        const force = new VectorBuilder()
            .fromSub(this.bob, this.origin)
            .build()

        const K = 0.01
        const X = force.mag() - this.length

        force.normalize()
        force.mult(-1 * K * X)
        this.acc.addVec(force)
    }

    applyForce(force) {
        if(this.armType == 'normal') {
            const calculatedForce = new VectorBuilder()
                .fromCopy(force)
                .build()
            calculatedForce.y *= Math.sin(this.angle) / this.length
            this.acc.add(calculatedForce.x, -calculatedForce.y)

        } else {
            this.acc.addVec(force)
        }
    }

    draw() {
        stroke(255)
        strokeWeight(4)
        fill(127)
        line(
            this.origin.x,
            this.origin.y,
            this.bob.x,
            this.bob.y
        )
        circle(this.origin.x, this.origin.y, this.size / 2)
        circle(
            this.bob.x,
            this.bob.y,
            this.size
        )
        // throw(new Error('p'))

    }
}

export default Pendulum