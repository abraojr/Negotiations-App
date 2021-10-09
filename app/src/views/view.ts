export abstract class View<T> {
  protected element: HTMLElement;
  private _escape: boolean = false;

  constructor(selector: string, escape?: boolean) {
    const element = document.querySelector(selector);
    if (element) {
      this.element = element as HTMLElement;
    } else {
      throw Error(`Selector ${selector} does not exist in the DOM. Check with the development team!`)
    }
    if (escape) {
      this._escape = escape;
    }
  }

  public update(model: T): void {
    const t1 = performance.now();
    let template = this.template(model);
    if (this._escape) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, "");
    }
    this.element.innerHTML = template;
    const t2 = performance.now();
    console.log(`Runtime of the update method: ${(t2 - t1) / 1000} seconds.`)
  }

  protected abstract template(model: T): string;
}
