class Current {
    constructor(wordType, wordInfo) {
        switch (wordType) {
            case window.nouns: {
                this.declension = wordInfo.declension;
                this.isNeuter   = wordInfo.isNeuter;
                break;
            }
            case window.verbs: {
                this.tense       = wordInfo.tense; 
                this.voice       = wordInfo.voice;
                this.mood        = wordInfo.mood;
                this.conjugation = wordInfo.conjugation | "1";
                break;
            }
        }
    }
}