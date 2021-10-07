export class Negotiation {
  #date;
  #quantity; //  these are private attributes
  #value;

  constructor(date, quantity, value) {
    this.#date = date;
    this.#quantity = quantity;
    this.#value = value;
  }
}
