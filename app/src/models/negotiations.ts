import { Negotiation } from "./negotiation.js";

export class Negotiations {
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
}
