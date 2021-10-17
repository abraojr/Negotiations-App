import { Negotiation } from "../models/negotiation.js";
export class NegotiationsService {
    getNegotiations() {
        return fetch("http://localhost:8080/data")
            .then(res => res.json())
            .then((data) => {
            return data.map(eachData => {
                return new Negotiation(new Date(), eachData.times, eachData.amount);
            });
        });
    }
}
//# sourceMappingURL=negotiations-service.js.map