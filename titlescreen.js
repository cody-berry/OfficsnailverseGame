function setupTitleScreen() {
    let css = select("#backgroundImage")
    css.style("background-image",
        "url(\"data/flags/" +
        flag + ".jpg" +
        "\")")

    titlescreencnv = createCanvas(700, 700)
    titlescreencnv.parent('#titleScreenImage')
}

function drawTitleScreen() {
    switch (state) {
        case 0:
            titlescreencnv.clear()
            titlescreencnv.blendMode(ADD)
            noStroke()
            textAlign(CENTER, CENTER)
            textSize(80)
            fill(0, 0, 100, map(frames - framesWhenStageStarted, fadeInFrames, fadeInFrames+50, 0, 100))
            titlescreencnv.text("THE", width/2, height/2 - 240)
            fill(0, 0, 100, map(frames - framesWhenStageStarted, fadeInFrames+50, fadeInFrames+100, 0, 100))
            titlescreencnv.text("OFFICSNAILVERSE", width/2, height/2 - 160)
            push()
            translate(0, map(frames - framesWhenStageStarted, fadeInFrames, fadeInFrames+120, -5000, 0, true))
            for (let r = 0; r < 30; r+= 3) {
                for (let a = 0; a < TWO_PI; a += TWO_PI/20) {
                    push()
                    translate(r*cos(a), r*sin(a))
                    fill((a*360/TWO_PI + frames/3) % 360, r*150/30 - 50, 100, 1)
                    titlescreencnv.text("THE", width/2, height/2 - 240)
                    titlescreencnv.text("OFFICSNAILVERSE", width/2, height/2 - 160)
                    pop()
                }
            }
            textSize(40)
            fill(0, 0, 100)
            titlescreencnv.text("press any button to start", width/2, height/2 + 200)
            for (let r = 0; r < 30; r+= 3) {
                for (let a = 0; a < TWO_PI; a += TWO_PI/20) {
                    push()
                    translate(r*cos(a), r*sin(a))
                    fill((a*360/TWO_PI + frames/3) % 360, r*150/30 - 50, 100, 1.5)
                    titlescreencnv.text("press any button to start", width/2, height/2 + 200)
                    pop()
                }
            }
            pop()
            titlescreencnv.blendMode(BLEND)
            break
        case 1:
            titlescreencnv.clear()
            titlescreencnv.blendMode(ADD)
            noStroke()
            textAlign(CENTER, CENTER)
            textSize(80)
            fill(0, 0, 100)
            titlescreencnv.text("THE", width/2, height/2 - 240)
            fill(0, 0, 100)
            titlescreencnv.text("OFFICSNAILVERSE", width/2, height/2 - 160)
            for (let r = 0; r < 30; r+= 3) {
                for (let a = 0; a < TWO_PI; a += TWO_PI/20) {
                    push()
                    translate(r*cos(a), r*sin(a))
                    fill((a*360/TWO_PI + frames/3) % 360, r*150/30 - 50, 100, 1)
                    titlescreencnv.text("THE", width/2, height/2 - 240)
                    titlescreencnv.text("OFFICSNAILVERSE", width/2, height/2 - 160)
                    pop()
                }
            }
            textSize(40)
            for (let r = log(frames - framesWhenStageStarted)*50; r < log(frames - framesWhenStageStarted)*50+30; r+= 3) {
                for (let a = 0; a < TWO_PI; a += TWO_PI/20) {
                    push()
                    translate(r*cos(a), r*sin(a))
                    fill((a*360/TWO_PI + frames/3) % 360, r*150/30 - 50, 100, map(frames - framesWhenStageStarted, 0, 100, 1.5, 0))
                    titlescreencnv.text("press any button to start", width/2, height/2 + 200)
                    pop()
                }
            }

            let options = ["Play", "Settings", "Keybinds", "Extras"]
            if (selected === -1) selected = options.length -1
            if (selected === options.length) selected = 0
            for (let i = 0; i < options.length; i++) {
                if (selected === i) {
                    for (let r = 5; r < 30; r+= 3) {
                        for (let a = 0; a < TWO_PI; a += TWO_PI/20) {
                            push()
                            translate(r*cos(a), r*sin(a))
                            stroke((a*360/TWO_PI + frames/3) % 360, r*100/30, 100, 1)
                            strokeWeight(10)
                            titlescreencnv.line(width/2 - 150, height/2 + 80 + i*80, width/2 + 150, height/2 + 80 + i*80)
                            pop()
                        }
                    }
                }
                noStroke()
                titlescreencnv.text(options[i], width/2, height/2 + 80 + i*80)

                if (selected === i) {
                    for (let r = 0; r < 30; r+= 3) {
                        for (let a = 0; a < TWO_PI; a += TWO_PI/20) {
                            push()
                            translate(r*cos(a), r*sin(a))
                            fill((a*360/TWO_PI + frames/3) % 360, r*150/30 - 50, 100, 1.5)
                            titlescreencnv.text(options[i], width/2, height/2 + 80 + i*80)
                            pop()
                        }
                    }
                }
            }

            titlescreencnv.blendMode(BLEND)
            break
    }
}