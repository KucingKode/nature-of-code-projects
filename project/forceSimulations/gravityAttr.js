import Mover from "../../classes/Mover.js"
import Attractor from '../../classes/Attractor.js'

const ATTRACTOR_MASS = 5
const ATTRACTOR_G = 0.02

let movers, attractor
const gravityAttr = {
    setup() {
        it('Gravitational Attraction', {
            background: 'black',
            description: `
                A Simple Project About Force in Newton's law of universal gravitation
            `,
            note: `
                FORCES\n

                Newton's law of universal gravitation
                => every particle attracts every other particle in the universe
                with a force which is directly proportional to the product of their masses
                and inversely proportional to the square of their distance between the centers.

                F = G * m1 * m2 / r*r
                F = (G * m1 * m2 / r*r) * ^r

                G = gravitational constant
                F = gravitational force
                m = mass
                r = distance between the centers
                ^r = distance unit vector ( direction )
            `
        })

        movers = [
            new Mover(0, 0, 2, sky, 'Blue Color'),
            new Mover(400, 150, 4, magenta, 'Magenta Color'),
            new Mover(150, 400, 8, purple, 'Purple Color'),
            new Mover(250, 350, 12, cyan, 'Cyan Color')
        ]
        attractor = new Attractor(200, 200, ATTRACTOR_MASS, ATTRACTOR_G)
        attractor.add(movers)
        
    },
    
    draw() {
        background(0)
        
        attractor.draw()
        attractor.attract()
        movers.forEach(mover => {
            mover.move({
                noEdge: true
            })
            mover.draw({
                debug: true
            })
        })
    },

    getInfo() {
        let result = `
            Attractor mass = ${ATTRACTOR_MASS}
            Gravity constant = ${ATTRACTOR_G}
            Attractor position = ( x: 200, y: 200 )
            \n
        `
        movers.forEach(mover => {
            const {name, mass, x, y, acc, vel} = mover.getInfo()
            result += `
            ${name} Ball:
             - Mass: ${mass}
             - Position: ( x: ${x}, y: ${y} )
             - Acceleration: ( x: ${acc.x}, y: ${acc.y} )
             - Velocity: ( x: ${vel.x}, y: ${vel.y} )
             \n
            `
        })
        return result
    }
}


export default gravityAttr