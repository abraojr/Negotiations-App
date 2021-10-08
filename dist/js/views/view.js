export class View {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    update(model) {
        const template = this.template(model);
        this.element.innerHTML = template;
    }
    template(model) {
        throw Error("Child class needs to implement the template method");
    }
}
