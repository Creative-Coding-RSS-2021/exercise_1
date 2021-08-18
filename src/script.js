const canvas = document.getElementById('exercise_1')
canvas.width = window.innerWidth
const ctx = canvas.getContext('2d')

const steps = 50
const sceneWidth = canvas.width
const stepWidth = Math.floor(sceneWidth/steps)


const sceneHeight = canvas.height
const stepHeight = sceneHeight/steps


function horisontalGradient (step, sceneHeight, sceneWidth) {

    for(i=0; i<= sceneWidth; i = i + step){
    
        const channel = 255 * (i/sceneWidth)
        ctx.fillStyle = `rgba(${channel}, 0, 0)`;
        ctx.fillRect(i, 0, step, sceneHeight)
    }
    
}


function verticalGradient (step, sceneHeight, sceneWidth) {

    for(i=0; i<= sceneHeight; i = i + step){
    
        const channel = 255 * (i/sceneHeight)
        ctx.fillStyle = `rgba(${channel}, 0, 0)`;
        ctx.fillRect(0, i, sceneWidth, step)
    }
    
}

function bothGradients (step, sceneHeight, sceneWidth) {

    for(j=0; j<=sceneWidth; j = j + step) {
    
        for (i=0; i<=sceneHeight; i = i + step) {
       
            const heightChannel = 255 * (i/sceneHeight)
            const widthChannel = 255 * (j/sceneWidth)
            ctx.fillStyle = `rgba(${heightChannel}, 0, ${widthChannel})`
            ctx.fillRect(j, i, step, step)
        }
    }
}


function gradient (direction) {

    if (direction === 'vertical') {

        verticalGradient(stepHeight, sceneHeight, sceneWidth)

    } else if ( direction === 'horisontal') {

        horisontalGradient(stepWidth, sceneHeight, sceneWidth)

    } else {
        
        bothGradients(1, sceneHeight, sceneWidth)

    }

}

gradient()

