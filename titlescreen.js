function setupTitleScreen() {
    titlescreencnv = createCanvas(700, 700)
    titlescreencnv.parent('#titleScreenImage')
}

function drawTitleScreen() {
    titlescreencnv.blendMode(ADD)
    noStroke()
    textAlign(CENTER, CENTER)
    textSize(80)
    fill(0, 0, 100, map(frames - framesWhenStageStarted, fadeInFrames, fadeInFrames+50, 0, 100))
    titlescreencnv.text("THE", width/2, height/2 - 240)
    fill(0, 0, 100, map(frames - framesWhenStageStarted, fadeInFrames+50, fadeInFrames+100, 0, 100))
    titlescreencnv.text("OFFICSNAILVERSE", width/2, height/2 - 160)
    translate(0, map(frames - framesWhenStageStarted, fadeInFrames, fadeInFrames+120, -5000, 0, true))
    push()
    for (let r = 0; r < 30; r+= 3) {
        for (let a = 0; a < TWO_PI; a += TWO_PI/20) {
            push()
            translate(r*cos(a), r*sin(a))
            fill(a*360/TWO_PI, r*100/30, 100, 2)
            titlescreencnv.text("THE", width/2, height/2 - 240)
            fill(a*360/TWO_PI, r*100/30, 100, 2)
            titlescreencnv.text("OFFICSNAILVERSE", width/2, height/2 - 160)
            pop()
        }
    }
    pop()
    titlescreencnv.blendMode(BLEND)
}