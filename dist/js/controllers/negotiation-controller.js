import { Negotiation } from "./../models/negotiation";
export class NegotiationController {
    constructor() {
        this.inputeDate = document.querySelector("#date");
        this.inputQuantity = document.querySelector("#quantity");
        this.inputValue = document.querySelector("#value");
    }
    add() {
        const regExp = /-/g;
        const date = new Date(this.inputeDate.value.replace(regExp, ","));
        const quantity = parseInt(this.inputQuantity.value);
        const value = parseFloat(this.inputValue.value);
        const negotiation = new Negotiation(date, quantity, value);
        console.log(negotiation);
    }
}
