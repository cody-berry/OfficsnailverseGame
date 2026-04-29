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
let titleTheme
let selected = -10
let keybinds = {

}



function preload() {
    font = loadFont('data/consola.ttf')
    fixedWidthFont = loadFont('data/consola.ttf')
    variableWidthFont = loadFont('data/meiryo.ttf')
    titleTheme = loadSound('data/title theme!.mp3', false, false)
    print("If something goes really awry, input:" +
        " \nlocalStorage.setItem(\"config save file\", \"0" +
        " W,S,A,D,E,C,Q,Z,R,F,V\"); setup();\nThat should solve the problem.")
}

function loopSound(sound, vol=0.4) {
    sound.loop()
    sound.amp(vol)
}


function setup() {
    cnv = createCanvas(700, 700)
    cnv.parent('#canvas')
    colorMode(HSB, 360, 100, 100, 100)
    textFont(font, 14)

    updateSaveHTML()

    setupTitleScreen()
    frameRate(60)
}



function draw() {
    switch (state) {
        case 0:
            frames++
            cnv.clear()
            drawTitleScreen()
            cnv.background(0, 0, 0, map(frames - framesWhenStageStarted, 0, fadeInFrames, 120, 0))
            break
        case 1:
            frames++
            cnv.clear()
            drawTitleScreen()
            break
    }
}


function keyPressed() {
    if (state === 0 && frames - framesWhenStageStarted > fadeInFrames + 120) {
        state = 1
        loopSound(titleTheme, 0.4)
        framesWhenStageStarted = frames
        fadeInFrames = 0
        selected = 0
    }
    if (selected > -10) {
        if (key === "w") {
            selected -= 1
        }
        if (key === "s") {
            selected += 1
        }
    }
}