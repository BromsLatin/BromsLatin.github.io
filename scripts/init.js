var endings;

fetch("../endings/endings.json")
    .then(response => response.json())
    .then(json => { endings = json; });

var getNounEnding    = (declension, case_, isPlural, isNeuter = false)     => endings.nouns[declension - 1][2 * isNeuter + isPlural][case_];
var getPronounEnding = (declension, table, case_, isPlural)                => null;
var getVerbEnding    = (tense, person, isPlural, mood, voice, conjugation) => {
    const data = endings.verbs[tense][voice][mood];

    const isConjugationRelevant = ((tense == "present") && (mood === "subjunctive")) || 
                                  ((tense === "future") && (mood === "indicative" ));
    

    console.log(data);
    if (!isConjugationRelevant) return data[person + 3 * isPlural];
    let key = "";
    for (let i in data) {
        if (i.includes(conjugation)) 
            key = i;
    }

    return data[key][person + 3 * isPlural];
}

var nounsTable = document.getElementById("nouns-table");
var verbsTable = document.getElementById("verbs-table");

// I know var is bad but I need everything in `window` for the module scripts