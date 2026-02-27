document.getElementById("nouns-form").addEventListener("submit", e => {
    e.preventDefault();

    const declension = document.getElementById("declension").value;
    const neuter = document.getElementById("neuter").checked;
    
    localStorage.setItem("type", "nouns");
    localStorage.setItem("declension", declension);
    localStorage.setItem("neuter", neuter);

    window.location.href = "Tables/index.html?type=nouns";
});

document.getElementById("verbs-form").addEventListener("submit", e => {
    e.preventDefault();

    const tense       = document.getElementById("tense").value;
    const voice       = (document.getElementById("passive").value) ? "passive" : "active";
    const mood        = (document.getElementById("subjunctive").value) ? "subjunctive" : "indicative";
    const conjugation = document.getElementById("conjugation").value;

    localStorage.setItem("type", "verbs");
    localStorage.setItem("tense", tense);
    localStorage.setItem("voice", voice);
    localStorage.setItem("mood", mood);
    localStorage.setItem("conjugation", conjugation);

    window.location.href = "Tables/index.html?type=verbs";
});