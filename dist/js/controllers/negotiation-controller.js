import { Negotiation } from "./../models/negotiation";
export class NegotiationController {
    constructor() {
        this.inputeDate = document.querySelector("#date");
        this.inputQuantity = document.querySelector("#quantity");
        this.inputValue = document.querySelector("#value");
    }
    add() {
        const negotiation = this.createNegotiation();
        console.log(negotiation);
    }
    createNegotiation() {
        const regExp = /-/g;
        const date = new Date(this.inputeDate.value.replace(regExp, ","));
        const quantity = parseInt(this.inputQuantity.value);
        const value = parseFloat(this.inputValue.value);
        return new Negotiation(date, quantity, value);
    }
}
