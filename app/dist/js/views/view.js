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
        const t1 = performance.now();
        let template = this.template(model);
        if (this._escape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, "");
        }
        this.element.innerHTML = template;
        const t2 = performance.now();
        console.log(`Runtime of the update method: ${(t2 - t1) / 1000} seconds.`);
    }
}
