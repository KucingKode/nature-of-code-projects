let angle
let angleV
let x, y
const harmonicMotion = {
    setup() {
        it('Harmonic motion', {
            background: 'black',
            description: `
                A Simple Project About Simple Sine Harmonic Motion
            `,
            note: `
                HARMONIC MOTION\n

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

        x = 0
        y = 0
        angle = 0
        angleV = 0.06
    },
    
    draw() {
        translate(0, height)
        scale(1, -1)

        noStroke()
        background(0, 0, 0, 0.9)
        fill(...yellow)
        y = map(Math.sin(angle), -1, 1, 0, 400)
        x = map(Math.sin(angle * 3/2), -1, 1, 0, 400)
        circle(x, y, 32)
        angle += angleV

        strokeWeight(1)
        stroke(255, 100)
        line(200, 200, x, y)
    },

    getInfo() {
       return `
        Position: ( x: ${Math.floor(x - 200)}, y: ${Math.floor(y - 200)} )
       ` 
    }
}

export default harmonicMotion