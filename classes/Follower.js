import VectorBuilder from '../classes/Vector/Builder.js'

class Follower {
    size = 20
    target = {
        x: 0,
        y: 0
    }

    constructor(x, y) {
        this.pos = new VectorBuilder()
            .withPosition(x, y)
            .build()
        this.acc = new VectorBuilder()
            .withPosition(0, 0)
            .build()
            
        this.vel = new VectorBuilder()
            .withPosition(0, 0)
            .withLimit(8)
            .build()

        this.vel.mult(random(2))
    }

    getInfo() {
        return {
            x: this.pos.x - 200,
            y: (this.pos.y * -1) + 200,
            vel: {
                x: this.vel.x,
                y: this.vel.y,
            },
            acc: {
                x: this.acc.x,
                y: this.acc.y,
            }
        }
    }

    follow(x, y) {
        this.target.x = x
        this.target.y = y
        const target = new VectorBuilder()
            .withPosition(this.target.x, this.target.y)
            .build()

        const acc = new VectorBuilder()
            .fromSub(target, this.pos)
            .build()
        acc.setMag(1)
        this.acc = acc
        
        this.vel.addVec(this.acc)
        this.pos.addVec(this.vel)
    }

    draw() {
        stroke(255)
        strokeWeight(2)
        fill(255, 100)
        ellipse(this.pos.x, this.pos.y, this.size)

        const length = Math.floor(Math.sqrt(
            (Math.abs(this.target.x - this.pos.x) ** 2) +
            (Math.abs(this.target.y - this.pos.y) ** 2)
        ))
        strokeWeight(100 / length)
        stroke(...yellow)
        line(this.target.x, this.target.y, this.pos.x, this.pos.y)
    }
}

export default Follower