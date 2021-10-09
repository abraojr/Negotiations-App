import { DaysOfWeek } from './../enums/days-of-week.js';
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
        if (!this.isWorkingDay(negotiation.date)) {
            this.messageView.update("Only negotiations made in working days are accepted");
            return;
        }
        this.negotiations.add(negotiation);
        this.clearForm();
        this.updateView();
    }
    isWorkingDay(date) {
        return date.getDay() > DaysOfWeek.SUNDAY && date.getDay() < DaysOfWeek.SATURDAY;
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
    updateView() {
        this.negotiationsView.update(this.negotiations);
        this.messageView.update("Negotiation added successfully");
    }
}
