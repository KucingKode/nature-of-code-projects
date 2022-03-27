import Pendulum from '../classes/Pendulum.js'
import VectorBuilder from '../classes/Vector/Builder.js'


let pendulum, gravity
const RandomWalker = {
    setup() {
        it('Spring', {
            background: 'black',
            description: `
                A Simple Spring physic simulation
            `,
            note: `
                SPRING

                Fspring = -K * X

                Fspring = spring force
                K = spring constant
                X = extension
                \n
            `
        })
        
        pendulum = new Pendulum({
            armType: 'spring',
            size: 32,
            origin: {
                x: 200
            },
            origin: {
                x: 200,
                y: 0,
            },
            length: 150
        })

        gravity = new VectorBuilder()
            .withPosition(0, 0.2)
            .build()
    },
    
    draw() {
        if(mouseIsPressed) {
            pendulum.bob.x = mouseX
            pendulum.bob.y = mouseY
        }
        
        background(0)
        pendulum.applyForce(gravity)
        pendulum.update()
        pendulum.draw()
    },

    getInfo() {
        return `
        `
    }
      
}

export default RandomWalker