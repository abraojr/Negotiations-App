export function print(...objects) {
    for (let object of objects) {
        console.log(object.convertToText());
    }
}
