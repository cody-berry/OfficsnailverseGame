/**
 *  @author 
 *  @date 2024.
 *
 */

let font
let fixedWidthFont
let variableWidthFont
let instructions
let debugCorner /* output debug text in the bottom left corner of the canvas */
let state = 0
let flag = "Immortal snail territory"
let titlescreencnv
let cnv
let framesWhenStageStarted = 0
let fadeInFrames = 100
let frames = 0


function preload() {
    font = loadFont('data/consola.ttf')
    fixedWidthFont = loadFont('data/consola.ttf')
    variableWidthFont = loadFont('data/meiryo.ttf')
}


function setup() {
    cnv = createCanvas(700, 700)
    cnv.parent('#canvas')
    colorMode(HSB, 360, 100, 100, 100)
    textFont(font, 14)

    let css = select("#backgroundImage")
    css.style("background-image",
        "url(\"data/flags/" +
        flag + ".jpg" +
        "\")")

    css = select("#titleScreenImage")
    css.style("background-image",
        "url(\"data/flags/" +
        flag + ".jpg" +
        "\")")

    setupTitleScreen()
    frameRate(60)
}


function draw() {
    frames++
    cnv.clear()
    drawTitleScreen()
    cnv.background(0, 0, 0, map(frames - framesWhenStageStarted, 0, fadeInFrames, 120, 0))

    print(frameRate())
}


function keyPressed() {
}