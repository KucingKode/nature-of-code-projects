import Mover from "../../classes/Mover.js"
import VectorBuilder from "../../classes/Vector/Builder.js"

let movers, force, gravity
const dragForce = {
    setup() {
        it('Drag Force Simulator', {
            background: 'black',
            description: `
                A Simple Project About Drag force
            `,
            note: `
                DRAG FORCE\n

                Newton I law
                => An Object at rest stays at rest and
                in motion stays in motion
                at a constant speed and direction unless
                acted upon by an unbalanced force.

                Gaileo's learning tower of pisa experiment
                => time for a object to fall down
                was independent from a mass of an object

                ----------------------------

                Drag force / air resistance / fluid resistance
                => a force acting opposite of the relative
                motion of any object moving with respect
                to a surrounding fluid

                Fd = 1/2 * p * v*v * Cd * A
                Fd = -1/2 * p * v*v * A * Cd * ^v

                FD = drag force
                p(rho) = density of the fluid
                v = speed of object relative to the fluid
                ^v = velocity vector
                A = cross sectional area
                CD = drag coefficient

                ----------------------------


            `
        })

        force = new VectorBuilder()
            .withPosition(0, 0)
            .build()
        movers = [
            new Mover(150, 50, 2, sky, 'Blue Color'),
            new Mover(200, 50, 4, magenta, 'Magenta Color'),
            new Mover(100, 50, 8, purple, 'Purple Color'),
            new Mover(250, 50, 12, cyan, 'Cyan Color')
        ]

    },
    
    draw() {
        background(0)
        force.mult(0)

        gravity = new VectorBuilder()
            .withPosition(0, 0.5)
            .build()

        if(mouseIsPressed) {
            const wind = new VectorBuilder()
                .withPosition(random(-0.6, 0.6), -0.8)
                .build()
            background(150)
            force.addVec(wind)
        }

        strokeWeight(0)
        fill(...blue)
        rect(0, height / 2, width, height / 2)

        movers.forEach(mover => {
            if(Math.floor(mover.height()) < height / 2) {
                mover.drag(0.3)
            }
            mover.applyGravity(gravity)
            mover.applyForce(force)
            mover.move()
            mover.draw({
                debug: true
            })
        })
    },

    getInfo() {
        let result = `
            Gravity: ( x: ${gravity.x}, y: ${gravity.y} )
            Force: ( x: ${force.x}, y: ${force.y} )
            \n
        `
        movers.forEach(mover => {
            const {name, mass, height, acc, vel} = mover.getInfo()
            result += `
            ${name} Ball:
             - Mass: ${mass}
             - Height: ${height}
             - Acceleration: ( x: ${acc.x}, y: ${acc.y} )
             - Velocity: ( x: ${vel.x}, y: ${vel.y} )
             \n
            `
        })
        return result
    }
}

export default dragForce