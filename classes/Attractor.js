import VectorBuilder from "./Vector/Builder.js"

class Attractor {
    movers = []

    constructor(x, y, mass, G) {
        this.pos = new VectorBuilder()
            .withPosition(x, y)
            .build()
        
        this.mass = mass
        this.G = G
    }

    add(newMovers) {
        this.movers = this.movers.concat(newMovers)
    }

    clear() {
        this.movers = []
    }

    attract() {
        this.movers.forEach(mover => {
            const force = new VectorBuilder()
                .fromSub(this.pos, mover.pos)
                .build()

            const r = force.mag()
            const strength = (mover.mass * this.mass) * this.G / r * r

            force.setMag(strength)
            mover.applyForce(force)
        })
    }

    draw() {
        stroke(...red)
        strokeWeight(2)
        fill(...red)
        ellipse(this.pos.x, this.pos.y, sqrt(this.mass) * 15)
    }

}

export default Attractor