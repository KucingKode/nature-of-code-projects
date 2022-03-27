import randomWalker from './project/walkers/classic.js'
import levyRandomWalker from './project/walkers/levyFlight.js'

import randomVector from './project/randomVector.js'
import mouseLine from './project/mouseLine.js'
import mouseFollower from './project/mouseFollower.js'

import basicForceSimulation from './project/forceSimulations/basicForce.js'
import dragForceSimulation from './project/forceSimulations/dragForce.js'
import gravitationalAttraction from './project/forceSimulations/gravityAttr.js'

import harmonicMotion from './project/harmonicMotion.js'
import sineWave from './project/sineWave.js'
import additiveWave from './project/additiveWave.js'
import pendulum from './project/pendulum.js'
import spring from './project/spring.js'

import particle from './project/particle.js'

const lastest = particle
const colors = {
    vector: 'rgb(176, 213, 255)',
    force: 'rgb(255, 248, 205)',
    trigonometry: 'rgb(255, 161, 232)'
}
const projects = {
    // Vector
    randomWalker : {
        project: randomWalker,
        category: 'vector'
    },
    randomVector : {
        project: randomVector,
        category: 'vector'
    },
    mouseLine : {
        project: mouseLine,
        category: 'vector'
    },
    mouseFollower : {
        project: mouseFollower,
        category: 'vector'
    },
    levyRandomWalker : {
        project: levyRandomWalker,
        category: 'vector'
    },
    // Force
    basicForceSimulation : {
        project: basicForceSimulation,
        category: 'force'
    },
    dragForceSimulation : {
        project: dragForceSimulation,
        category: 'force'
    },
    gravitationalAttraction : {
        project: gravitationalAttraction,
        category: 'force'
    },

    // Trigonometry and wave
    harmonicMotion: {
        project: harmonicMotion,
        category: 'trigonometry'
    },
    sineWave: {
        project: sineWave,
        category: 'trigonometry'
    },
    addtitiveWave: {
        project: additiveWave,
        category: 'trigonometry'
    },
    pendulum: {
        project: pendulum,
        category: 'trigonometry'
    },
    spring: {
        project: spring,
        category: 'trigonometry'
    },

    // Particle system
    particle: {
        project: particle,
        category: 'trigonometry'
    },
}

export { projects, colors, lastest }