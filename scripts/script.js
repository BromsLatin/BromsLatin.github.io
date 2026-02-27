var current;

const prime = (wordType, options) => {
    current = new Current(wordType, options);
}

const submit = (table, jurisdiction) => {
    for (let i of jurisdiction) {
        table.boxes[i].classList.remove("correct");
        table.boxes[i].classList.remove("incorrect");
    }

    for (let i of jurisdiction) {
        check_value(table, table.boxes[i], i);
    }
}

const check_value = (table, box, index) => {
    let correct = false;
    switch (table) {
        case window.nouns: {
            if (box.value == table.getGroup(current.declension, current.isNeuter)[index]) {
                box.classList.add("correct");
                correct = true;
            }
            break;
        }
        case window.verbs: {
            if (box.value == table.getGroup(current.tense, current.voice, current.mood, current.conjugation)[index]) {
                box.classList.add("correct");
                correct = true;
            }
        }
    }

    if (!correct) {
        box.classList.add("incorrect");
    }
}

window.onload = () => {
    let parser = new Parser(window.location.search);
    parser.expect("?type=");

    switch (parser.rest()) {
        case "nouns":
            prime(nouns, {
                declension: localStorage.getItem("declension"),
                neuter: localStorage.getItem("neuter"),
            });
            nouns.activate();
            break;

        case "verbs":
            prime(verbs, {
                tense: localStorage.getItem("tense"),
                voice: localStorage.getItem("voice"),
                mood: localStorage.getItem("mood"),
                conjugation: localStorage.getItem("conjugation"),
            });

            verbs.activate();
            // verbs.fill(localStorage.getItem("tense")
            //           ,localStorage.getItem("voice")
            //           ,localStorage.getItem("mood")
            //           ,localStorage.getItem("conjugation"));
            break;
            
        default:
            throw new Error("Invalid query");

    }
}

