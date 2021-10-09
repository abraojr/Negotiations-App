export class View {
    constructor(selector, escape) {
        this._escape = false;
        const element = document.querySelector(selector);
        if (element) {
            this.element = element;
        }
        else {
            throw Error(`Selector ${selector} does not exist in the DOM. Check with the development team!`);
        }
        if (escape) {
            this._escape = escape;
        }
    }
    update(model) {
        let template = this.template(model);
        if (this._escape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, "");
        }
        this.element.innerHTML = template;
    }
}
