class Fields {
    #fields;
    #steps;

    constructor() {
        this.#steps = 0;
        this.#initFields();
        
    }

    #initFields() {
        this.#fields = [];
        for (let index = 0; index < 9; index++) {
            this.#fields.push("");
        }
    }

    getSteps() {
        return this.#steps;
    }

    getValueById(id) {
        return this.#fields[id];
    }

    getAllValue() {
        return [...this.#fields];
    }

    setValueById(index) {
        if (this.#fields[index] == "") {
            this.#fields[index] = this.#steps % 2 == 0 ? "x" : "o";
            this.#steps++
            this.#checkWinner();
        }
    }

    #checkWinner() {
        const winner = this.#otherCheck();

        if (winner == "x") {
            alert("Játékos 1. nyert!");
        } else if (winner == "O") {
            alert("Játékos 2. nyert!");
        }

        if (this.#isTie()) {
            alert("Döntetlen!");
        }
    }

    #isTie() {
        let i = 0;
        while (i < this.#fields.length && this.#fields[i] != "") {
            i++;
        }
        return i >= this.#fields.length;
    }

    #otherCheck() {
        let txt = "";

        for (let index = 0; index < this.#fields.length; index++) {
            let field = this.#fields[index];

            txt += field;
            txt += index % 3 == 2 ? "@" : "";
        }

        if (txt.indexOf("ooo") >= 0) {
            return "o";
        } else if (txt.indexOf("xxx") >= 0) {
            return "x";
        }
        return "";
    }
}

export default Fields;