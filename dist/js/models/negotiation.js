export class Negotiation {
    constructor(_date, quantity, value) {
        this._date = _date;
        this.quantity = quantity;
        this.value = value;
    }
    // get methods
    get date() {
        const date = new Date(this._date.getTime());
        return date;
    }
    get amount() {
        return this.quantity * this.value;
    }
    static createFrom(dateStr, quantityStr, valueStr) {
        const regExp = /-/g;
        const date = new Date(dateStr.replace(regExp, ","));
        const quantity = parseInt(quantityStr);
        const value = parseFloat(valueStr);
        return new Negotiation(date, quantity, value);
    }
}
