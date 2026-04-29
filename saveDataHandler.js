function updateSaveHTML() {
    if (!localStorage.getItem("config save file")) {localStorage.setItem("config save file", "0 W,S,A,D,E,C,Q,Z,R,F,V")}
    let configSave = split(localStorage.getItem("config save file"), " ")
    flag = ["Immortal snail territory", "The starlands", "Transnailvania", "Sillylind", "The horror land", "Ocean snail isles", "Archipelago of half-snails", "The kingdom of the crown"][int(configSave[0].substring(configSave[0].length-1))]

    if (state < 10) {
        let css = select("#backgroundImage")
        css.style("background-image",
        "url(\"data/flags/" +
        flag + ".jpg" +
        "\")")
    }

    let keybindData = split(configSave[1], ",")
    keybinds = {
        "Up": keybindData[0],
        "Down": keybindData[1],
        "Left": keybindData[2],
        "Right": keybindData[3],
        "Confirm": keybindData[4],
        "Attack": keybindData[5],
        "Heal": keybindData[6],
        "Map": keybindData[7],
        "Up Usable": keybindData[8],
        "Middle Usable": keybindData[9],
        "Down Usable": keybindData[10]
    }

    let saveFile = select("#configSaveFile")
    saveFile.html(`<input class="savefileeditor" contenteditable="true" id="configsavefileeditor"> ← enter custom config</input><br>
<button class="savefileuser" onclick="localStorage.setItem('config save file', select('#configsavefileeditor').value()); updateSaveHTML()">Use file</button>
<button class="savefileuser" onclick="localStorage.setItem('config save file', '0 W,S,A,D,E,C,Q,Z,R,F,V'); updateSaveHTML()">Restore default</button>
<div class="savefiledisplay">${localStorage.getItem("config save file")}</div>`)
}