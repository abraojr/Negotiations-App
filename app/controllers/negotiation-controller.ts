export class NegotiationController {
  private inputeDate;
  private inputQuantity;
  private inputValue;

  constructor() {
    this.inputeDate = document.querySelector("#date");
    this.inputQuantity = document.querySelector("#quantity");
    this.inputValue = document.querySelector("#value");
  }

  add() {
    console.log(this.inputeDate);
    console.log(this.inputQuantity);
    console.log(this.inputValue);
  }
}
