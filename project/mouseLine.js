import VectorBuilder from '../classes/Vector/Builder.js'


let target
const RandomWalker = {
    setup() {
        it('Mouse Line', {
            background: 'black',
            description: `
                A Simple Project About Unit Vector Normalization
            `,
            note: `
                MOUSE LINE\n
                Unit vector
                => vector with same the same length but with any direction.

                Normalizing vector
                => shrink a length of vector to 1, by divide x and y
                with its magnitude
                (x / magnitude, y / magnitude)
                \n
            `
        })
        
        
        
    },
    
    draw() {
        // translate(width / 2, height / 2)
        background(0)

        const pos = new VectorBuilder()
            .withPosition(200, 200)
            .build()


        target = new VectorBuilder()
            .withAngleUnit('DEGREE')
            .withPosition(Math.floor(mouseX) - 200, Math.floor(mouseY) - 200)
            .build()

        target.normalize()
        target.mult(100)
        
        const v = new VectorBuilder()
            .fromAdd(pos, target)
            .build()
        
        strokeWeight(4)
        stroke(255)
        line(pos.x, pos.y, v.x, v.y)
    },

    getInfo() {
        return `
            Angle: ${-Math.floor(target.angle())}
        `
    }
}

export default RandomWalker