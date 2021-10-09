export abstract class View<T> {
  protected element: HTMLElement;
  private _escape: boolean = false;

  constructor(selector: string, escape?: boolean) {
    this.element = document.querySelector(selector);
    if (escape) {
      this._escape = escape;
    }
  }

  public update(model: T): void {
    let template = this.template(model);
    if (this._escape) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, "");
    }
    this.element.innerHTML = template;
  }

  protected abstract template(model: T): string;
}
