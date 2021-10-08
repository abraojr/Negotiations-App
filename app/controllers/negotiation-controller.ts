import { MessageView } from "./../views/message-view.js";
import { NegotiationsView } from "./../views/negotiations-view.js";
import { Negotiations } from "./../models/negotiations.js";
import { Negotiation } from "./../models/negotiation.js";

export class NegotiationController {
  private inputeDate: HTMLInputElement;
  private inputQuantity: HTMLInputElement;
  private inputValue: HTMLInputElement;
  private negotiations = new Negotiations();
  private negotiationsView = new NegotiationsView("#negotiationsView");
  private messageView = new MessageView("#messageView");

  constructor() {
    this.inputeDate = document.querySelector("#date");
    this.inputQuantity = document.querySelector("#quantity");
    this.inputValue = document.querySelector("#value");
    this.negotiationsView.update(this.negotiations);
  }

  add(): void {
    const negotiation = this.createNegotiation();
    this.negotiations.add(negotiation);
    this.negotiationsView.update(this.negotiations);
    this.messageView.update("Negotiation added successfully");
    this.clearForm();
  }

  createNegotiation(): Negotiation {
    const regExp = /-/g;
    const date = new Date(this.inputeDate.value.replace(regExp, ","));
    const quantity = parseInt(this.inputQuantity.value);
    const value = parseFloat(this.inputValue.value);
    return new Negotiation(date, quantity, value);
  }

  clearForm(): void {
    this.inputeDate.value = "";
    this.inputQuantity.value = "";
    this.inputValue.value = "";
    this.inputeDate.focus();
  }
}
