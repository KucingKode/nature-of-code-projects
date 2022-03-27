let angles
let angleV
let place
let lastI
let f
let size
const harmonicMotion = {
    setup() {
        it('Sine wave', {
            background: 'black',
            description: `
                A Simple Project About Simple Sine Wave
            `,
            note: `
                SINE WAVE\n

                Sin = opposite / adjacent
                Wave component
                 - Amplitude => longest range from the base
                 point of a sine wave

                 - Period => Time needed to do 1
                 full cycle of the wave

                 - frequency => how mant the wave repeat on
                 the period (1/period)

                \n
            `
        })

        angles = []
        angleV = 0.1
        place = 0
        lastI = 1
        f = 2
        size = 4
        
        for(let i = f; i < width - (f * 2); i += (f * 2)) {
            angles.push(0)
        }
    },
    
    draw() {
        background(0)
        // angle += angleV
        angles.forEach((angle, i) => {
            if(i == 0 || i == angles.length - 1) {
                fill(...blue)
            } else {
                fill(...yellow)
            }
            // cool broken thing
            // const y = map(Math.sin(angle*place/width), -1, 1, 100, 300)

            // real
            const y = map(Math.sin(angle), -1, 1, 100, 300)

            circle(place, y, (size * 2))
            if(i < lastI) {
                angles[i] += angleV
            }
            place += (f * 2)
        })
        place = f
        if(lastI <= angles.length) {
            lastI++
        }
    },

    getInfo() {
       return `
       ` 
    }
}

export default harmonicMotion