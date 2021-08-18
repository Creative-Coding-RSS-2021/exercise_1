
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
const canvas = document.getElementById("exercise_1")
const ctx = canvas.getContext('2d')

// draw a basic rectangle
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes

ctx.fillStyle = 'red'
ctx.fillRect(0, 0, 150, 150)
ctx.clearRect(25, 25, 100, 100)

// draw a circle
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#arcs
ctx.arc(75, 75, 45, 0, 2 * Math.PI);
ctx.strokeStyle = 'blue'
ctx.stroke()