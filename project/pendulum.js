import Pendulum from '../classes/Pendulum.js'
import VectorBuilder from '../classes/Vector/Builder.js'


let pendulum, gravity
const RandomWalker = {
    setup() {
        it('Simple Pendulum', {
            background: 'black',
            description: `
                A Simple Pendulum simulation
            `,
            note: `
                PENDULUM\n
                 - pendulum force
                 => -1 * gravity force * sin(pendulum angle) / pendulum length
                \n
            `
        })
        
        
        pendulum = new Pendulum({
            armType: 'normal',
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
            .withPosition(0, 2)
            .build()
    },
    
    draw() {
        
        
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