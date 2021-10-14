export class View {
    constructor(selector) {
        const element = document.querySelector(selector);
        if (element) {
            this.element = element;
        }
        else {
            throw Error(`Selector ${selector} does not exist in the DOM. Check with the development team!`);
        }
    }
    update(model) {
        let template = this.template(model);
        this.element.innerHTML = template;
    }
}
