var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { DaysOfWeek } from '../enums/days-of-week.js';
import { MessageView } from "../views/message-view.js";
import { NegotiationsView } from "../views/negotiations-view.js";
import { Negotiations } from "../models/negotiations.js";
import { Negotiation } from "../models/negotiation.js";
import { loginRuntime } from '../decorators/login-runtime.js';
import { inspect } from '../decorators/inspect.js';
import { domInjector } from '../decorators/dom-injector.js';
import { NegotiationsService } from '../services/negotiations-service.js';
import { print } from '../utils/print.js';
export class NegotiationController {
    constructor() {
        this.negotiations = new Negotiations();
        this.negotiationsView = new NegotiationsView("#negotiationsView");
        this.messageView = new MessageView("#messageView");
        this.negotiationsService = new NegotiationsService();
        this.negotiationsView.update(this.negotiations);
    }
    add() {
        const negotiation = Negotiation.createFrom(this.inputeDate.value, this.inputQuantity.value, this.inputValue.value);
        if (!this.isWorkingDay(negotiation.date)) {
            this.messageView.update("Only negotiations made in working days are accepted!");
            return;
        }
        this.negotiations.add(negotiation);
        print(negotiation, this.negotiations);
        this.clearForm();
        this.updateView();
    }
    importData() {
        this.negotiationsService
            .getNegotiations()
            .then(eachNegotiation => {
            return eachNegotiation.filter(eachNegotiation => {
                return !this.negotiations.list().some(negotiation => negotiation.isEqual(eachNegotiation));
            });
        })
            .then(eachNegotiation => {
            for (let negotiation of eachNegotiation) {
                this.negotiations.add(negotiation);
            }
            this.negotiationsView.update(this.negotiations);
        });
    }
    isWorkingDay(date) {
        return date.getDay() > DaysOfWeek.SUNDAY && date.getDay() < DaysOfWeek.SATURDAY;
    }
    clearForm() {
        this.inputeDate.value = "";
        this.inputQuantity.value = "";
        this.inputValue.value = "";
        this.inputeDate.focus();
    }
    updateView() {
        this.negotiationsView.update(this.negotiations);
        this.messageView.update("Negotiation added successfully!");
    }
}
__decorate([
    domInjector("#date")
], NegotiationController.prototype, "inputeDate", void 0);
__decorate([
    domInjector("#quantity")
], NegotiationController.prototype, "inputQuantity", void 0);
__decorate([
    domInjector("#value")
], NegotiationController.prototype, "inputValue", void 0);
__decorate([
    inspect(),
    loginRuntime()
], NegotiationController.prototype, "add", null);
//# sourceMappingURL=negotiation-controller.js.map