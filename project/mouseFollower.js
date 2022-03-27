import Follower from "../classes/Follower.js"


let follower
const RandomWalker = {
    setup() {
        it('Mouse Follower', {
            background: 'black',
            description: `
                A Simple Project Acceleration
            `,
            note: `
                MOUSE FOLLOWER\n

                Newton II law
                => Force = Mass * Acceleration

                Motion 101
                => pos + (vel + acc)

                Velocity
                => change of position over time
                Acceleration
                => change of velocity over time
                \n
            `
        })
        
        
        follower = new Follower(200, 200)
    },
    
    draw() {
        background(0)
        follower.follow(mouseX, mouseY)
        follower.draw()
    },

    getInfo() {
        const {x, y, acc, vel} = follower.getInfo()
        return `
            Follower position: ( x: ${Math.floor(x)}, y: ${Math.floor(y)} )
            Follower Acceleration: ( x: ${Math.floor(acc.x)}, y: ${Math.floor(acc.y)} )
            Follower Velocity: ( x: ${Math.floor(vel.x)}, y: ${Math.floor(vel.y)} )
        `
    }
}

export default RandomWalker