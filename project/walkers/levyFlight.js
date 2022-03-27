import LevyWalker from '../../classes/Walker/Levy.js'

let walker
const RandomWalker = {
    setup() {
        it('Levy Random Walker', {
            background: 'black',
            description: `
                A Simple Walking Point Using Vector And Levy Flight Behaviour
            `,
            note: `
                LEVY RANDOM WALKER\n
                Levy Flight
                => A Method that used by animals for hunting Their Pray,
                It will search something around them if nothing there
                it will take a realy long step to go somewhere else,
                then repeat the same step.
            `
        })
        
        walker = new LevyWalker(200, 200)
    },

    draw() {
        translate(0, height)
        scale(1, -1)

        background(0)
        walker.walk()
        walker.draw()
    },

    getInfo() {
        if(!walker) return ''
        
        const {x, y, steps} = walker.getInfo()
        return `
            Walker Position: ( x: ${x}, y: ${y} )
            Walker Size: ${walker.size}
            Steps: ${steps}
        `
    }
}

export default RandomWalker