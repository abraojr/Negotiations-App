import { DaysOfWeek } from './../enums/days-of-week.js';
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

  public add(): void {
    const negotiation = Negotiation.createFrom(
      this.inputeDate.value,
      this.inputQuantity.value,
      this.inputValue.value
    );
    if (!this.isWorkingDay(negotiation.date)) {
      this.messageView.update("Only negotiations made in working days are accepted");
      return;
    }
    this.negotiations.add(negotiation);
    this.clearForm();
    this.updateView();
  }

  private isWorkingDay(date: Date) {
    return date.getDay() > DaysOfWeek.SUNDAY && date.getDay() < DaysOfWeek.SATURDAY
  }

  private clearForm(): void {
    this.inputeDate.value = "";
    this.inputQuantity.value = "";
    this.inputValue.value = "";
    this.inputeDate.focus();
  }

  private updateView(): void {
    this.negotiationsView.update(this.negotiations);
    this.messageView.update("Negotiation added successfully");
  }
}
