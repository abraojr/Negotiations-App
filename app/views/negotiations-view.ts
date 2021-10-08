export class NegotiationsView {
  private element: HTMLElement;

  constructor(selector: string) {
    this.element = document.querySelector(selector);
  }
  template(): string {
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

  update(): void {
    this.element.innerHTML = this.template();
  }
}
