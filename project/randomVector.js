import VectorBuilder from '../classes/Vector/Builder.js'


let vectors = 0
const RandomWalker = {
    setup() {
        it('Random Vector', {
            background: 'black',
            description: `
                A Simple Project About Unit Vector
            `,
            note: `
                RANDOM VECTOR\n
                Unit vector
                => vector with same the same length but with any direction.

                vector operations
                - multiply
                (x * n, y * n)

                - divide
                (x / n, y / n)

                - add
                (x1 + x2, y1 + y2)

                - substract
                (x1 + -x2, y1 + -y2)
                \n
            `
        })
        
        
    },

    draw() {
        const colors = [
            [56, 86, 255],
            [255, 56, 116],
            [255, 209, 56]
        ]
        translate(width / 2, height / 2)
        background(0, 0, 0, 0.95)

        const Vbuilder = new VectorBuilder()
        Vbuilder.withRandom2D(true, true)

        const v = Vbuilder.build()
        v.mult(random(50, 100))


        strokeWeight(4)
        stroke(
            ...colors[Math.floor(random(colors.length))]
        )
        line(0, 0, v.x, v.y)
        vectors++
    },

    getInfo() {
        return `
        Vectors: ${vectors}
        `
    }
}

export default RandomWalker