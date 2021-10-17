export class Negotiations {
    constructor() {
        this.negotiations = [];
    }
    add(negotiation) {
        this.negotiations.push(negotiation);
    }
    list() {
        return this.negotiations;
    }
    convertToText() {
        return JSON.stringify(this.negotiations, null, 2);
    }
    isEqual(obj) {
        return JSON.stringify(this.negotiations) === JSON.stringify(obj.list());
    }
}
