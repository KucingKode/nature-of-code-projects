import Walker from '../../classes/Walker/Random.js'

let walker
const RandomWalker = {
    setup() {
        it('Random Walker', {
            background: 'black',
            description: `
                A Simple Walking Point Using Vector
            `,
            note: `
                RANDOM WALKER\n
                It works by add a random vector into the original vector,
                that was positioned on the center of canvas,
                and then draw a point on the original vector position
                \n
                ex:
                ->x = (2, 2)
                ->y = (1, 3)

                ->X + ->y = (2 + 1, 2 + 3) =(3, 5)
            `
        })
        
        walker = new Walker(200, 200)
    },

    draw() {
        translate(0, height)
        scale(1, -1)

        background(0)
        walker.walk()
        walker.draw()
    },

    getInfo() {
        const {x, y, steps} = walker.getInfo()
        return `
            Walker Position: ( x: ${x}, y: ${y} )
            Walker Size: ${walker.size}
            Steps: ${steps}
        `
    }
}

export default RandomWalker