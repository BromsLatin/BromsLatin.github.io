import { Word } from "./word.js";

const verbs_boxes = [];

for (let i = 1; i <= 6; i++) {
    verbs_boxes.push(document.getElementById(`verbs-box${i}`));
}


const people = (tense, voice, mood, conjugation = "1") => {
    let output = [];

    for (let i = 0; i < 3; i++) {
        output.push(window.getVerbEnding(tense, i, false, mood, voice, conjugation));
    }

    for (let i = 0; i < 3; i++) {
        output.push(window.getVerbEnding(tense, i, true, mood, voice, conjugation));
    }

    return output;
}

const fillVerbs = (tense, voice, mood, conjugation = "1") => {
    verbs_boxes.forEach((elem, i) => {
        elem.value = people(tense, voice, mood, conjugation)[i];
    });
}

const showVerbs = () => {
    window.nounsTable.classList.add("inactive");
    window.verbsTable.classList.remove("inactive");
}


const verbs = new Word(window.getVerbEnding, people, fillVerbs, showVerbs, "verbs-table", window.verbsTable, verbs_boxes);
window.verbs = verbs;

export { verbs };