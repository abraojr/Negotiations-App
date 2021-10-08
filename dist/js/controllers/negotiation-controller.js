import { MessageView } from "./../views/message-view.js";
import { NegotiationsView } from "./../views/negotiations-view.js";
import { Negotiations } from "./../models/negotiations.js";
import { Negotiation } from "./../models/negotiation.js";
export class NegotiationController {
    constructor() {
        this.negotiations = new Negotiations();
        this.negotiationsView = new NegotiationsView("#negotiationsView");
        this.messageView = new MessageView("#messageView");
        this.inputeDate = document.querySelector("#date");
        this.inputQuantity = document.querySelector("#quantity");
        this.inputValue = document.querySelector("#value");
        this.negotiationsView.update(this.negotiations);
    }
    add() {
        const negotiation = this.createNegotiation();
        this.negotiations.add(negotiation);
        this.negotiationsView.update(this.negotiations);
        this.messageView.update("Negotiation added successfully");
        this.clearForm();
    }
    createNegotiation() {
        const regExp = /-/g;
        const date = new Date(this.inputeDate.value.replace(regExp, ","));
        const quantity = parseInt(this.inputQuantity.value);
        const value = parseFloat(this.inputValue.value);
        return new Negotiation(date, quantity, value);
    }
    clearForm() {
        this.inputeDate.value = "";
        this.inputQuantity.value = "";
        this.inputValue.value = "";
        this.inputeDate.focus();
    }
}
