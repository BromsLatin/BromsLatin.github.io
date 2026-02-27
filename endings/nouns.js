import { Word } from "./word.js";

const cases = ["nominative", "accusative", "genitive", "dative", "ablative"];

const nouns_boxes = [];

for (let i = 1; i <= 10; i++) {
    nouns_boxes.push(document.getElementById(`nouns-box${i}`));
}

const nagda = (declension, isNeuter = false) => {
    let output = [];
    for (let i of cases) {
        output.push(window.getNounEnding(declension, i, false, isNeuter));
    }
    for (let i of cases) {
        output.push(window.getNounEnding(declension, i, true, isNeuter));
    }

    return output;
}

const fillNouns = (declension, isNeuter = false) => {
    nouns_boxes.forEach((elem, i) => {
        elem.value = nagda(declension, isNeuter)[i];
    });
}

const showNouns = () => {
    window.nounsTable.classList.remove("inactive");
    window.verbsTable.classList.add("inactive");
}

const nouns = new Word(window.getNounEnding, nagda, fillNouns, showNouns, "nouns-table", window.nounsTable, nouns_boxes);
window.nouns = nouns;

export { nouns };