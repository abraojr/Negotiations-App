import { Negotiation } from "./../models/negotiation.js";

export class NegotiationController {
  private inputeDate: HTMLInputElement;
  private inputQuantity: HTMLInputElement;
  private inputValue: HTMLInputElement;

  constructor() {
    this.inputeDate = document.querySelector("#date");
    this.inputQuantity = document.querySelector("#quantity");
    this.inputValue = document.querySelector("#value");
  }

  add(): void {
    const negotiation = this.createNegotiation();
    console.log(negotiation);
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
