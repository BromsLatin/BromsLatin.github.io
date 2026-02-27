class Parser {
    constructor(str) {
        this.pc = 0;
        this.str = str;
    }

    peek() {
        return (this.pc < this.str.length)
            ? this.str[this.pc]
            : "\0";
    }

    take() {
        return (this.pc < this.str.length)
            ? this.str[this.pc++]
            : "\0";
    }

    rest() {
        let output = "";
        while (this.peek() != "\0") {
            output += this.take();
        }

        return output;
    }

    expect(substring) {
        let test = ""
        for (let i of substring) {
            test += this.peek();
            if (this.take() != i)
                console.log(test);
        }
    }

    
}

