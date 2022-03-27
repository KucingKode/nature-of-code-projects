import Paricle from '../classes/Particle.js'

let particle
const particleSystem = {
    setup() {
        it('Particle', {
            background: 'black',
            description: `
                A Simple Particle System
            `,
            note: `
                PARTICLE
                \n
            `
        })
        
        particle = new Paricle({
            x: 200,
            y: 200,
            size: 20
        })
    },
    
    draw() {
        particle.update()
        particle.draw()
    },

    getInfo() {
        return `
        `
    }
      
}

export default particleSystem