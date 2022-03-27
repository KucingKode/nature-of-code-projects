import VectorBuilder from '../Vector/Builder.js'


class Walker {
    size = 5
    steps = 0

    constructor(x, y) {
        this.r = 50
        this.pos = new VectorBuilder()
            .withPosition(x, y)
            .build()

        this.prev = new VectorBuilder()
            .withPosition(x, y)
            .build()
    }

    getInfo() {
        return {
            x: Math.floor(this.pos.x - 200),
            y: Math.floor(this.pos.y - 200),
            steps: this.steps}
    }

    walk() {
        this.steps++
        const step = new VectorBuilder()
            .withRandom2D()
            .build()
        step.mult(3)
        
        this.r = random(100)
        if(this.r <= 1) {
            step.mult(random(20, 35))
        }

        this.prev.x = this.pos.x
        this.prev.y = this.pos.y

        this.pos.addVec(step)
    }

    draw() {
        strokeWeight(this.size)
        
        stroke(255)
        if(this.r < 1) {
            stroke(...magenta)

        }
        line(this.pos.x, this.pos.y, this.prev.x, this.prev.y)
    }
}

export default Walker