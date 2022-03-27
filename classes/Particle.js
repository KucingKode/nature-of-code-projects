import VectorBuilder from "./Vector/Builder.js";

class Particle {
    constructor({
        x, y, size, mass = 1, color = [255, 255, 255], lifetime = 1, image = null,
        stroke = {}
    }) {
        this.mass = mass
        this.color = color
        this.Cstroke = stroke.color
        this.Wstroke = stroke.weight
        this.size = size
        this.lifetime = lifetime
        this.image = image

        this.pos = new VectorBuilder()
            .withPosition(x, y)
            .build()
        this.acc = new VectorBuilder()
            .withPosition(0, 0)
            .build()
        this.vel = new VectorBuilder()
            .withPosition(0, 0)
            .build()
    }

    applyForce(force, isGravity = false) {
        const calculatedForce = new VectorBuilder()
            .fromCopy(force)
            .build()

        if(!isGravity) {
            calculatedForce.div(force, this.mass)
        }
        this.acc.addVec(calculatedForce)
    }

    update() {
        this.vel.addVec(this.acc)
        this.pos.addVec(this.vel)
        // this.lifetime -= 0.1
        this.acc.set(0, 0)
    }

    draw() {
        this.Wstroke ? strokeWeight(this.Wstroke) : ''
        this.Cstroke ? stroke(...this.Cstroke, this.lifetime) : ''

        fill(...this.color, this.lifetime)
        circle(this.pos.x, this.pos.y, this.size)
    }
}

export default Particle