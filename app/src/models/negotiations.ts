import { IComparable } from '../interfaces/IComparable';
import { IPrintable } from "../interfaces/IPrintable.js";
import { Negotiation } from "./negotiation.js";

export class Negotiations implements IPrintable, IComparable<Negotiations> {
  private negotiations: Negotiation[] = [];

  public add(negotiation: Negotiation) {
    this.negotiations.push(negotiation);
  }

  public list(): readonly Negotiation[] {
    return this.negotiations;
  }

  public convertToText(): string {
    return JSON.stringify(this.negotiations, null, 2);
  }

  public isEqual(obj: Negotiations): boolean {
    return JSON.stringify(this.negotiations) === JSON.stringify(obj.list());
  }
}
