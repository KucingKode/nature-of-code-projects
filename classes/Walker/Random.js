import VectorBuilder from '../Vector/Builder.js'


class Walker {
    size = 5
    steps = 0

    constructor(x, y) {
        this.pos = new VectorBuilder()
            .withPosition(x, y)
            .build()
    }

    walk() {
        this.steps++
        this.pos.add(
            random(3, -3),
            random(3, -3)
        )
    }

    getInfo() {
        return {
            x: Math.floor(this.pos.x -200),
            y: Math.floor(this.pos.y - 200),
            steps: this.steps}
    }

    draw() {
        stroke(255)
        strokeWeight(2)
        fill(255, 100)
        ellipse(this.pos.x, this.pos.y, this.size)
    }
}

export default Walker