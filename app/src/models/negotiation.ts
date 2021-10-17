import { IModel } from './../interfaces/IModel.js';

export class Negotiation implements IModel<Negotiation> {
  constructor(
    private _date: Date,
    public readonly quantity: number,
    public readonly value: number
  ) { }

  public static createFrom(dateStr: string, quantityStr: string, valueStr: string): Negotiation {
    const regExp = /-/g;
    const date = new Date(dateStr.replace(regExp, ","));
    const quantity = parseInt(quantityStr);
    const value = parseFloat(valueStr);
    return new Negotiation(date, quantity, value);
  }

  // get methods
  get date(): Date {
    const date = new Date(this._date.getTime());
    return date;
  }
  get amount(): number {
    return this.quantity * this.value;
  }

  public convertToText(): string {
    return `
        Date: ${this.date},
        Quantity: ${this.quantity},
        Value: ${this.value}
    `
  }

  public isEqual(obj: Negotiation): boolean {
    return this.date.getDate() === obj.date.getDate()
      && this.date.getMonth() === obj.date.getMonth()
      && this.date.getFullYear() === obj.date.getFullYear();
  }
}
