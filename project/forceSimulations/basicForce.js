import Mover from "../../classes/Mover.js"
import VectorBuilder from "../../classes/Vector/Builder.js"

let movers, force, gravity
const basicForce = {
    setup() {
        it('Basic Force Simulator', {
            background: 'black',
            description: `
                A Simple Project About Force in Newton's first law, Friction, Grab
            `,
            note: `
                FORCES\n

                Newton I law
                => An Object at rest stays at rest and
                in motion stays in motion
                at a constant speed and direction unless
                acted upon by an unbalanced force.

                Gaileo's learning tower of pisa experiment
                => time for a object to fall down
                was independent from a mass of an object

                Euler Integration
                => Integration in fixed time
                \n
                ex:
                acc = force / mass
                vel = vel + acc
                pos = pos + vel
                
                ----------------------------

                Friction
                => force resisting the relative motion of solid surfaces,
                fluid layers, and material elements sliding
                against each other

                Ffriction = -1 * m * N * ^v
                Ffriction = -1 * coefficient of friction(mu) * normal friction * velocity unit vector

                ----------------------------
            `
        })

        force = new VectorBuilder()
            .withPosition(0, 0)
            .build()
        movers = [
            new Mover(150, 200, 2, sky, 'Blue Color'),
            new Mover(200, 200, 4, magenta, 'Magenta Color'),
            new Mover(100, 300, 8, purple, 'Purple Color'),
            new Mover(250, 150, 12, cyan, 'Cyan Color')
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

        movers.forEach(mover => {
            let height = 0 + (mover.pos.y - mover.r)
            if(height < 1) {
                mover.friction(0.1)
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
            Gravity: ( x: ${Math.floor(gravity.x)}, y: ${Math.floor(gravity.y)} )
            Force: ( x: ${Math.floor(force.x)}, y: ${Math.floor(force.y)} )
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


export default basicForce