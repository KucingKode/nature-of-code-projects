import { colors, projects, lastest } from './projects.js'

// Elements
const projectChanger = document.querySelector('.project_changer')
const projectController = document.querySelector('.project_controller')
const restartBtn = document.querySelector('.restart')
const boardChanger = document.querySelector('.board_changer')
const board = document.querySelector('.board')
const projectListContainer = document.querySelector('.projects')

// Main data
let currProject = lastest
let changed = true
let stopped = false

// board data
let boardMode = 'note'
let noteText = board.innerText
let specText = ''

function setSpecText() {
    if(!currProject.getInfo || stopped) return
    const lastX = board.scrollLeft
    const lastY = board.scrollTop
    board.innerText = `
    Position and Angle
    => in cartesian coordinate,
    (0, 0) in center
    ------------------`

    board.innerText += currProject.getInfo()
    board.scroll(lastX, lastY)
}

// Events
projectChanger.addEventListener('click', () => {
    projectListContainer.style.display = 'grid'
})
boardChanger.addEventListener('click', () => {
    if(boardMode == 'note') {
        noteText = board.innerText
        specText = setInterval(() => setSpecText(false), 250)
        boardChanger.innerText = 'Note'
        boardMode = 'spec'
    } else {
        clearInterval(specText)
        board.innerText = noteText
        boardChanger.innerText = 'Spectate'
        boardMode = 'note'
        
    }
})
projectController.addEventListener('click', () => {
    if(stopped) {
        stopped = false
        projectController.innerText = 'Stop'
        projectController.classList.add('stop')
        projectController.classList.remove('start')
    } else {
        stopped = true
        projectController.innerText = 'Start'
        projectController.classList.add('start')
        projectController.classList.remove('stop')
        
    }
})
restartBtn.addEventListener('click', () => {
    changed = true
    stopped = false
})
projectListContainer.addEventListener('click', (e) => {
    if(e.target == projectListContainer) {
        projectListContainer.style.display = 'none'
    }
})


// Main Logics
window.setup = () => {
    const keys = Object.keys(projects)
    keys.forEach(key => {
        const project = projects[key]

        const keyBtn = document.createElement('p')
        keyBtn.style.backgroundColor = colors[project.category]
        keyBtn.innerText = `- ${key}`
        keyBtn.addEventListener('click', () => {
            currProject = project.project
            changed = true
            stopped = false
            projectListContainer.style.display = 'none'
        })

        document.querySelector('.projects__box').appendChild(keyBtn)
    })
}
window.draw = () => {
    if(changed) {
        document.querySelector('canvas')?.remove()

        const canvas = createCanvas(400, 400)
        canvas.parent('main')
        currProject.setup()
        resizeBoard()
        changed = false
    } else {
        if(!stopped) {
            currProject.draw()
        }
    }
}