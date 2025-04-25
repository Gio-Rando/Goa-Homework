class LockBox {
    #thing;
    #code;

    constructor(thing, code) {
        this.#thing = thing;
        this.#code = code;
    }

    #checkCode(code) {
        return code === this.#code;
    }

    getThing(code) {
        if (this.#checkCode(code)) {
            return this.#thing;
        } else {
            return "Wrong code.";
        }
    }

    putThing(newThing, code) {
        if (this.#checkCode(code)) {
            this.#thing = newThing;
        } else {
            console.log("Wrong code. Can't put thing.");
        }
    }

    changeCode(oldCode, newCode) {
        if (this.#checkCode(oldCode)) {
            this.#code = newCode;
        } else {
            console.log("Wrong code. Can't change code.");
        }
    }
}
