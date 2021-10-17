import { IPrintable } from "../interfaces/IPrintable.js";

export function print(...objects: IPrintable[]) {
    for (let object of objects) {
        console.log(object.convertToText());
    }
}