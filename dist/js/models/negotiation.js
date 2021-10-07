export class Negotiation {
  #date;
  #quantity; //  these are private attributes
  #value;

  constructor(date, quantity, value) {
    this.#date = date;
    this.#quantity = quantity;
    this.#value = value;
  }

  // get methods
  get date() {
    return this.#date;
  }

  get quantity() {
    return this.#quantity;
  }

  get value() {
    return this.#value;
  }

  get amount() {
    return this.#quantity * this.#value;
  }
}
