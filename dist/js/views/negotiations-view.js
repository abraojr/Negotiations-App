export class NegotiationsView {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    template() {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATE</th>
                    <th>QUANTITY</th>
                    <th>VALUE</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
        `;
    }
    update() {
        this.element.innerHTML = this.template();
    }
}
