import Wave from "../classes/Wave.js"

let waves = []
const harmonicMotion = {
    setup() {
        it('Additive wave', {
            background: 'black',
            description: `
                A Simple Project About Additive Wave
            `,
            note: `
                ADDITIVE WAVE\n

                Additive wave
                => a wave from addition from some other waves
                \n
            `
        })

        waves = []
        for(let i = 0; i < 5; i++) {
            waves.push(new Wave(random(20, 80), random(100, 600), random(Math.PI, 10)))
        }
    },
    
    draw() {
        background(0)
        fill(...yellow)
        for(let x = 0; x < width; x+=2) {
            let y = 0
            waves.forEach(wave => {
                y += wave.calculate(x)
            })
            circle(x, y + 200, 6)
        }

        waves.forEach(wave => {
            wave.phase += 0.1
        })
    },

    getInfo() {
       return `
       ` 
    }
}

export default harmonicMotion