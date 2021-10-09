export class View {
    constructor(selector, escape) {
        this._escape = false;
        this.element = document.querySelector(selector);
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
