import { DaysOfWeek } from '../enums/days-of-week.js';
import { MessageView } from "../views/message-view.js";
import { NegotiationsView } from "../views/negotiations-view.js";
import { Negotiations } from "../models/negotiations.js";
import { Negotiation } from "../models/negotiation.js";
import { loginRuntime } from '../decorators/login-runtime.js';
import { inspect } from '../decorators/inspect.js';
import { domInjector } from '../decorators/dom-injector.js';
import { NegotiationsService } from '../services/negotiations-service.js';

export class NegotiationController {

  @domInjector("#date")
  private inputeDate: HTMLInputElement;

  @domInjector("#quantity")
  private inputQuantity: HTMLInputElement;

  @domInjector("#value")
  private inputValue: HTMLInputElement;

  private negotiations = new Negotiations();
  private negotiationsView = new NegotiationsView("#negotiationsView");
  private messageView = new MessageView("#messageView");
  private negotiationsService = new NegotiationsService();

  constructor() {
    this.negotiationsView.update(this.negotiations);
  }

  @inspect()
  @loginRuntime()
  public add(): void {
    const negotiation = Negotiation.createFrom(
      this.inputeDate.value,
      this.inputQuantity.value,
      this.inputValue.value
    );
    if (!this.isWorkingDay(negotiation.date)) {
      this.messageView.update("Only negotiations made in working days are accepted!");
      return;
    }
    this.negotiations.add(negotiation);
    this.clearForm();
    this.updateView();
  }

  public importData(): void {
    this.negotiationsService
      .getNegotiations()
      .then(eachNegotiation => {
        for (let negotiation of eachNegotiation) {
          this.negotiations.add(negotiation);
        }
        this.negotiationsView.update(this.negotiations);
      });
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
    this.messageView.update("Negotiation added successfully!");
  }
}
