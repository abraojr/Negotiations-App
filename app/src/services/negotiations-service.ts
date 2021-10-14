import { INegotiation } from "../interfaces/INegotiation.js";
import { Negotiation } from "../models/negotiation.js";

export class NegotiationsService {

    public getNegotiations(): Promise<Negotiation[]> {
        return fetch("http://localhost:8080/data")
            .then(res => res.json())
            .then((data: INegotiation[]) => {
                return data.map(eachData => {
                    return new Negotiation(new Date(), eachData.times, eachData.amount)
                })
            });
    }
}